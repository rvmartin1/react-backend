import axios from 'axios';

import React from 'react';

const USERS_REST_API_URL="http://localhost:8080/api/users";

const users = [{
    id:"1",
    nom:"monnom",
    prenom:"mon prenom",
    email:"@email"
},
{
    id:"2",
    nom:"monnom2",
    prenom:"mon prenom2",
    email:"@email2"
}]

class UserService{

    getUsers(){
        //return users;
        return axios.get(USERS_REST_API_URL)

    }
}

export default new UserService();