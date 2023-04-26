import mongoose from "mongoose";

const schemaData = new mongoose.Schema({
    id:Number,
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    income:String,
    city:String,
    car:String,
    quote:String,
    phone_price:String

})


const getModel = mongoose.model("sample_data",schemaData);





export default getModel