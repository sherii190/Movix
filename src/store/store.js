import { configureStore } from '@reduxjs/toolkit'
import homeSlice from "./homeSlics"

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
})