
import { store } from '../../redux/store';
import { addCourseToDetail } from '../../redux/features/course/courseSlice';
export default async function setCourseDetail(course_detail) {
    store.dispatch(addCourseToDetail(course_detail));
};