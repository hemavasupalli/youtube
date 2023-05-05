import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,

    },
    reducers:{
        togglemenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen

        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        }
    },
    

});
export const {togglemenu ,closeMenu} = appslice.actions;
export default appslice.reducer;