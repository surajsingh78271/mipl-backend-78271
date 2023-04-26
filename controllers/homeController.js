// import getModel from "../db/schema/model.js"
const getModel = require('../db/schema/model.js')


 const HomeController = async (req,res) => {

    const data = await getModel.find()

    //   const value = data.filter((item)=>{
      
    //     return item.income.split("$")[1] < 5 && (item.car === "BMW" || item.car === "Mercedes")

    //   })
     
    // console.log("good boy helloooo")
    // console.log(value)

    res.status(200).send(data)
  
}
// export default HomeController
module.exports = HomeController
