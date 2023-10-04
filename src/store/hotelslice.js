import { createSlice } from "@reduxjs/toolkit";
import Paris from "../components/Paris";
const hotelSlice=createSlice({
    name:"hotel",
    initialState:{
        totaldata:{},
        showMore:false
    },
    reducers:{
        setData(state,action){
           const data=action.payload
           console.log(data)
           state.totaldata={...data}
        },
        setShowMore(state,action){
          state.showMore=!(state.showMore)
        }

    }
})
export const hotelActions=hotelSlice.actions;
export default hotelSlice