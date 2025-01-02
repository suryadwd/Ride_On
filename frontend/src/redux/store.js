import{configureStore}from '@reduxjs/toolkit'
import userSlice from './userSlice'
import captionSlice from './captionSlice'
const store = configureStore({
  reducer: {
    user:userSlice,
    caption:captionSlice
  }
})

export default store