import{configureStore}from '@reduxjs/toolkit'
import userSlice from './userSlice'
import captionSlice from './captionSlice'
import vehicleSlice from './vehicleSlice'
const store = configureStore({
  reducer: {
    user:userSlice,
    caption:captionSlice,
    vehicle:vehicleSlice
  }
})

export default store