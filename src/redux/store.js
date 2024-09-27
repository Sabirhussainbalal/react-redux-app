import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/like'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
