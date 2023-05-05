import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { json } from 'react-router-dom';
import { togglemenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
    const [SearchQuery ,setSearchQuery]= useState("");
    const [suggestion , setSuggestion]= useState([]);
    const [showSuggestion , setshowSuggestion]= useState();
    const dispatch= useDispatch();
    const toggleMenuHandler =()=>{
        dispatch(togglemenu());
    }

    const searchCache = useSelector(store => store.search)
    useEffect(()=>{
      const timer= setTimeout(()=>{
        if(searchCache[SearchQuery]){
            setSuggestion(searchCache[SearchQuery]);
        } else {
        getSearchResults();}},200) ;
      return()=>{
        clearTimeout(timer);
      }
    },[SearchQuery])
   const getSearchResults = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API+SearchQuery);
        const json = await data.json();
        setSuggestion(json[1]);

        dispatch(cacheResults({
            [SearchQuery] : json[1]
        }));
        
    }

  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
       <div className='flex col-span-1 '>
        <img 
        onClick={()=> toggleMenuHandler()}
        className='h-8 cursor-pointer'
        alt="menu"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        /> 
        <a href="/">
        <img 
        className='h-12'
        alt="logo"
        src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        />
        </a>
        </div>
        <div className='col-span-10 px-10 '>
            <div>
            <input 
            className='w-1/2 p-2 border border-gray-500 rounded-l-full '
             placeholder='Search' 
             type="text"
             value={SearchQuery}
             onChange={(e)=>{ setSearchQuery(e.target.value)}}
             onFocus={()=> setshowSuggestion(true)}
             onBlur={()=> setshowSuggestion(false)}
             />
            <button className='p-2 px-5 py-2 bg-gray-100 border border-gray-500 rounded-r-full'>🔍</button>
            </div>
           {showSuggestion && <div className='fixed w-[44rem] px-5 py-2 bg-white border border-gray-100 rounded-md shadow-lg '>
                <ul>
                    { suggestion.map(s=>  <li key={s} className='py-2 shadow-sm hover:bg-gray-100'>🔍   
                        {s}</li>)}
                       
                
                    
                </ul>
            </div>}
        </div>
        <div className='col-span-1'>
            <img
            className="h-9"
            alt="user-icon"
            src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
            />
        </div>
        </div>
   
  )
}

export default Header