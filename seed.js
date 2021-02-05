const mongoose = require("mongoose");
const users = require("./models/user")

const data = [
    {
        // "_id": "",
        "firstname": "Billy",
        "lastname": "Bailey",

        "password": "billybob1",
        "email": "billybob@billy.com",
        "hobby": "fishing",
        "sport": "football",
        "occupation": "welder",
        "lastLogin": "10/10/2020"
    },
    {
        // "_id": "",
        "firstname": "Jeremy",
        "lastname": "James",

        "password": "JeremyJames111",
        "email": "Jeremy@james.com",
        "hobby": "wine tasting",
        "sport": "soccer",
        "occupation": "lawyer",
        "lastLogin": "12/05/2020"
    }
]
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/insulterator9000',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);

users.deleteMany({}).then(() => {
    users.collection.insertMany(data).then(result => {
        console.log(result);
        console.log(result.result.n + " records inserted!");
        process.exit(0);
    }).catch(err => {
        console.log(err);
        process.exit(1);
    })
})