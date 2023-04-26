import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import dbConnection from './db/dbconnection.js';
import getModel from './db/schema/model.js';
import router from './route/webRoutes.js';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;


dbConnection(process.env.DATABASE_URL);


app.use(cors())
app.use("/",router)




app.listen(PORT,()=>{
    console.log(`server at http://localhost:${PORT}`)
})