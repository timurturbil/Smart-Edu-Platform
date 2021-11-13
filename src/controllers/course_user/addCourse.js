import { API_URL } from '../../helper/api_url';
import { store } from '../../redux/store';
import { addCoursesToUser } from '../../redux/features/course_user';
const axios = require('axios');
export default async function addCourseToUser (user_id, course_id)  {
    axios.post(API_URL + "addCourses", { userId: user_id, courseId: course_id })
        .then(function (response) {
            // handle success
            store.dispatch(addCoursesToUser(response.data))
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
};