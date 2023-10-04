import { configureStore } from "@reduxjs/toolkit";
import hotelSlice from "./hotelslice";
const store=configureStore(
    {
        reducer:{
            hotel:hotelSlice.reducer,
            
        }
    }
)
export default store