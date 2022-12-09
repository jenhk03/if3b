// step 1
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// step 6
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// step 7
const uas = require('./routes/uas')

// step 8
app.use('/uas', uas)

// step 3
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
let db = mongoose.connection

// handle error
db.on('error', console.error.bind(console, 'Error establishing a database connection'))

// handle success
db.once('open', () => {
    console.log('Database is connected')
})

// step 2
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})