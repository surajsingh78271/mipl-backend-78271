// import getModel from "../db/schema/model.js"
const getModel = require('../db/schema/model.js')

const citiController = async (req,res) => {
    const data = await getModel.find().sort("-income")

    const value = []
    for (let index = 0; index < 10; index++) {
        value[index] = data[index]; 
    }
    // console.log(value)

    res.status(200).send(value)
  
}

// export default citiController
module.exports = citiController