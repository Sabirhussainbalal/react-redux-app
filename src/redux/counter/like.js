import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    likes: 0,
    dislikes: 0, // Add dislike count to the state
  },
  reducers: {
    incrementLike: (state) => {
      state.likes += 1; // Increment likes
    },
    incrementDislike: (state) => {
      state.dislikes += 1; // Increment dislikes
    },
  },
})

// Action creators
export const { incrementLike, incrementDislike } = counterSlice.actions;

export default counterSlice.reducer;
