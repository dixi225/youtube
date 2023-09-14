import { createSlice } from "@reduxjs/toolkit";

const Chatslice=createSlice(
{
    name:'chat',
    initialState:{
        messeges:[],
    },
    reducers:{
        addMessege:(state,action)=>{
            state.messeges.unshift(action.payload)
            state.messeges.splice(10,1)
        }
    }
})
export const {addMessege} =Chatslice.actions
export default Chatslice.reducer