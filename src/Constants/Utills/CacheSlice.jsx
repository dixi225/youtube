import { createSlice } from "@reduxjs/toolkit";

const CacheSlice =createSlice({
    name: 'search',
    initialState:{

    },
    reducers:{
        loadInCache:(state, actions) =>{
            state=Object.assign(state,actions.payload)  
        },
    }
})
export const {loadInCache} = CacheSlice.actions
export default CacheSlice.reducer