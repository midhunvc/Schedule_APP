const mongoose = require('mongoose')
require('dotenv').config({path:'../.env'});

mongoose.connect(process.env.DBLINK, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
