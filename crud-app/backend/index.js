const express= require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.MONGO_DB)






app.listen(3000)