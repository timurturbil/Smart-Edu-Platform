import { API_URL } from '../../helper/api_url';
import { store } from '../../redux/store';
import { addCoursesToState } from '../../redux/features/course/courseSlice';
const axios = require('axios');
export default async function getAllCourses() {
    var response = axios.get(API_URL + "courses")
        .then(function (response){
            // handle success
            store.dispatch(addCoursesToState(response.data))
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(`error in getAllCourses service; ${error}`);
        });
    return response;    
};
