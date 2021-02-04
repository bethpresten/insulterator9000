const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({

    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    hobby: {
        type: String,
    },
    sport: {
        type: String,
    },
    occupation: {
        type: String,
    },
    lastLogin: {
        type: Date, default: Date.now,
    }

});

const User = mongoose.model("User", userSchema);
module.exports = User;