import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './features/course/courseSlice';
import courseUserReducer from './features/course_user';
export const store = configureStore({
  reducer: {
    course: courseReducer,
    course_user: courseUserReducer
  },
})