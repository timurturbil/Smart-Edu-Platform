import { API_URL } from '../../helper/api_url';
import { store } from '../../redux/store';
import { addCoursesToState } from '../../redux/features/course/courseSlice';
import addCourseToUser from '../course_user/addCourse';
const axios = require('axios');
export default async function createCourse(user_id, name, description, type, image, teacher_name) {
    try {
        var response = await axios.post(API_URL + "course", { name: name, description: description, type: type, image: image, teacher_name: teacher_name })
        console.log("course response  " + JSON.stringify(response))
        await addCourseToUser(user_id, response.data._id)
    } catch (error) {
        console.log("error in createcourse; " + error)
    }
};