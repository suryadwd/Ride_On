import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({

  name:"vehicle",
  initialState:{
    vehicleImg:null,
  },
  reducers:{
    setVehicleImg:(state,action)=>{
      state.vehicleImg = action.payload
    }
  }
})

export const {setVehicleImg} = vehicleSlice.actions
export default vehicleSlice.reducer