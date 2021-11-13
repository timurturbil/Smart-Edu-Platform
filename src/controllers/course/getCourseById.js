import { API_URL } from '../../helper/api_url';
import { store } from '../../redux/store';
import { addCoursesToState } from '../../redux/features/course/courseSlice';
const axios = require('axios');
export default async function getCourseById(course_id) {
    var response = await axios.post(API_URL + "getCourseById", { id: course_id });
    return response.data;
};
