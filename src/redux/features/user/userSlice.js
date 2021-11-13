import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /*decrement: (state) => {
      state.value -= 1
    }, */
    addUsersToState: (state, action) => {
      state.courses = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUsersToState } = counterSlice.actions

export default counterSlice.reducer