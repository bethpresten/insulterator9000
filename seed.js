import mongoose from ("mongoose")

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/insulterator9000',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    },
    mongoose.loadModels ( modelPaths [
        "./models/models" 
    ]

    )
  )
  
  const connection = mongoose.connection
  
  connection.on('connected', () => {
    console.log('Mongoose successfully connected!')
  })
  
  connection.on('error', err => {
    console.log('Mongoose connection error: ', err)
  })

const data =  [
    {
        
    },
    {
       
    }
]