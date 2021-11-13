import { API_URL } from '../../helper/api_url';
import { store } from '../../redux/store';
import { addCoursesToUser } from '../../redux/features/course_user';
import getCourseById from '../course/getCourseById';
const axios = require('axios');

export default async function getAllCoursesOfUser(user_id) {
    var courses = [];
    async function getAllCourses(response) {
        for (var i = 0; i < response.data.length; i++) {
            var course = await getCourseById(response.data[i].courseId)
            console.log("here course" + JSON.stringify(course))
            courses.push(course)
        }
    }
    var response = await axios.post(API_URL + "getAllCoursesOfUser", { userId: user_id })
    // handle success
    await getAllCourses(response)
    return courses
};

