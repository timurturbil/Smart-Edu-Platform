import { API_URL } from '../../helper/api_url';
const axios = require('axios');


export default async function loginUser(user) {
    console.log(`login user'a girdi ${user.email} ${user.password}`)
    var isLoggedIn = axios.post(API_URL + "authuser", {
        "email": user.email,
        "password": user.password
    })
        .then(function (res) {
            console.log(res.data)
            localStorage.setItem("user", JSON.stringify(res.data.user));
            if (res.data.userLoggedIn) {
                return true;
            } else {
                return false;
            }
        })
        .catch(function (error) {
            // handle error
            console.log(`error in create Users; ${error}`);
        })
    return isLoggedIn
};