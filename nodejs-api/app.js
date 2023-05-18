// (1)
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// (6) body-parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// (7) import routes mhs, dll
const mahasiswaRoutes = require('./routes/mahasiswa')
const authRoutes = require('./routes/auth')

// (8) apply to mahasiswaRoutes
app.use('/mahasiswa', mahasiswaRoutes)
app.use('/auth', authRoutes)

// (3) connect to mongoodb
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser : true, useUnifiedTopology: true})
let db = mongoose.connection

// if error
db.on('error', console.error.bind(console, 'Error establishing a database connection'))

// if success
db.once('open', () => {
    console.log('Database is connected');
})

// (2) listen port
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`);
    console.log(`Server is running on ${process.env.PORT}`);
})