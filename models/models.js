const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema ({
    
        
            "_id":{
                type: String,
            },
            "username":{
                type: String,
            },
            "password": {
                type: String,
            },
            "email":{
                type: String,
            },
            "hobbies":[],
            "sports":[],
            "occupations":[],
            "lastLogin":{
                type: String,
            }
        
});

const user = mongoose.model( "user", userSchema, "User");
module.exports = user;