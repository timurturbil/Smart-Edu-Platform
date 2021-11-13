import { API_URL } from '../../helper/api_url';
import { store } from '../../redux/store';
import { addCoursesToUser } from '../../redux/features/course_user';
import getCourseById from '../course/getCourseById';
const axios = require('axios');

export default async function deleteCourseFromUser(user_id, course_id) {
    try {
        var response = await axios.post(API_URL + "deleteCourseFromUser", { userId: user_id, courseId: course_id })
        console.log(response)
    } catch (error) {
        console.log("heyy error catched in deleteCourseFromUser service " + error)
    }

};

