import React from 'react'
import Shimmer from './Shimmer';

const VideoCard = ({info}) => {
    //console.log(info);
    const { snippet , statistics} = info;
    const{ channelTitle , title, thumbnails}= snippet;
  return (
    info?
   ( <div className='p-2 m-2 shadow-lg w-72'>
        <img 
        className='rounded-lg'
        alt="thumbnail"
        src={thumbnails.medium.url} />
        <ul>
            <li className='py-2 font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>):
    (
      <Shimmer />
    )
  )
}

export default VideoCard
