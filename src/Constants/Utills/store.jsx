import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice";

const store=configureStore(
    {
        reducer:
        {
            name:Appslice,
        }
    }
)
export default store