import mongoose from ("mongoose")

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/insulterator9000',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    mongoose.loadModels(modelPaths[
        "./models/models"
    ]),
    mongoose.clearModels(['models']),
    mongoose.populateModels(data, function (err, done) {
        if (err) {
            return console.log("seed error", err);
        }
        if (done) {
            return console.log("seed done", done);
        }
        mongoose.disconnect();

    })

)

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Mongoose successfully connected!')
})

connection.on('error', err => {
    console.log('Mongoose connection error: ', err)
})

const data = [
    {
        'model': 'user',
        'userData': [
            {
                "_id": "",
                "username": "BillyBobBailey",
                "password": "billybob1",
                "email": "billybob@billy.com",
                "hobbies": [
                    "fishing",
                    "hiking",
                    "hunting"
                ],
                "sports": [
                    "football",
                    "baseball",
                    "basketball"
                ],
                "occupations": [
                    "welder",
                    "warehouse worker",
                    "mechanic"
                ],
                "lastLogin": "10/10/2020"
            },
            {
                "_id": "",
                "username": "JeremyJames",
                "password": "JeremyJames111",
                "email": "Jeremy@james.com",
                "hobbies": [
                    "wine tasting",
                    "art class",
                    "swimming"
                ],
                "sports": [
                    "soccer",
                    "lacrosse",
                    "polo"
                ],
                "occupations": [
                    "lawyer",
                    "doctor",
                    "attorney"
                ],
                "lastLogin": ""
            }
        ]
    }
]