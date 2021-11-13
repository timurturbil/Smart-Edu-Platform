import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCourseOfUser: [],
}

export const counterSlice = createSlice({
    name: 'course_user',
    initialState,
    reducers: {
        addCoursesToUser: (state, action) => {
            state.allCourseOfUser = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCoursesToUser } = counterSlice.actions

export default counterSlice.reducer