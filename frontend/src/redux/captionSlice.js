import { createSlice } from "@reduxjs/toolkit";



const captionSlice = createSlice({

  name:"caption",
  initialState:{
    caption:null,
  },

  reducers:{
    setCaption:(state,action)=>{
      state.caption = action.payload
    }
  }

})


export const {setCaption} = captionSlice.actions

export default captionSlice.reducer