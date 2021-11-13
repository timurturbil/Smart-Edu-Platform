import { API_URL } from '../../helper/api_url';
import { store } from '../../redux/store';
import { addCoursesToState } from '../../redux/features/course/courseSlice';
const axios = require('axios');
export default async function createUser(user) {
    axios.post(API_URL + "user", {
        "name": user.name,
        "email": user.email,
        "type": user.type,
        "password": user.password
    })
        .then(function (response) {
            console.log(response)
            // handle success
            /* store.dispatch(addCoursesToState(response.data)) */
        })
        .catch(function (error) {
            // handle error
            console.log(`error in create Users; ${error}`);
        })
        .then(function () {
            // always executed
        });
};