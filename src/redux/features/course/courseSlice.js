import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  courses: [],
  courseDetail: {},
}

export const counterSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    addCourseToDetail: (state, action) => {
      state.courseDetail = action.payload
    },
    addCoursesToState: (state, action) => {
      state.courses = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCoursesToState, addCourseToDetail } = counterSlice.actions

export default counterSlice.reducer