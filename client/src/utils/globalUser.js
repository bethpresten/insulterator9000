import React from "react";

const globalUser = React.createContext({
    _id: '',
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    hobby: '',
    sport: '',
    occupation: '',
    lastLogin: ''
});

export default globalUser;