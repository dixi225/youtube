import { createSlice } from "@reduxjs/toolkit";

const Appslice=createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state)=>
        {
            state.isMenuOpen=!state.isMenuOpen
        }
    }
})
export const {toggleMenu} = Appslice.actions
export default Appslice.reducer