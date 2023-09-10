import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice";
import CacheSlice from "./CacheSlice";

const store=configureStore(
    {
        reducer:
        {
            search:CacheSlice,
            name:Appslice,
        }
    }
)
export default store