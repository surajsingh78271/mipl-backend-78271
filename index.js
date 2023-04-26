// import express from 'express'
const express = require('express')


const cors = require('cors')
// import cors from 'cors';


const dotenv = require('dotenv')
// import dotenv from 'dotenv'

const dbConnection = require('./db/dbconnection.js')
// import dbConnection from './db/dbconnection.js';

const getModel = require('./db/schema/model.js')
// import getModel from './db/schema/model.js';

const router = require('./route/webRoutes.js')
// import router from './route/webRoutes.js';




const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;


dbConnection(process.env.DATABASE_URL);


app.use(cors())
app.use("/",router)




app.listen(PORT,()=>{
    console.log(`server at http://localhost:${PORT}`)
})