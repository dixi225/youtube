import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice";
import CacheSlice from "./CacheSlice";
import Chatslice from "./Chatslice";

const store=configureStore(
    {
        reducer:
        {
            search:CacheSlice,
            name:Appslice,
            chat:Chatslice,
        }
    }
)
export default store