import mongoose from "mongoose";

const dbConnection = async (DATABASE_URL)=>{
       
    try {
        return await mongoose.connect(DATABASE_URL,{
            // dbName:"mipl-dataload"
            useNewUrlParser: true,
            useUnifiedTopology: true,

        }).then(()=>{
           console.log("connected succesfully database.")
        })
        
    } catch (error) {
        console.log(error)
    }


 
}

export default dbConnection