// import getModel from "../db/schema/model.js"
const getModel = require('../db/schema/model.js')
const maleController = async  (req,res)=>{
    const data = await getModel.find()
    

      const value = data.filter((item)=>{
        return item.gender === "Male" && item.phone_price>10000
      })
      // console.log(value)

      res.status(200).send(value)
  
}

// export default maleController
module.exports = maleController