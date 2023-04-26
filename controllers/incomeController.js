import getModel from "../db/schema/model.js"
const incomeController = async (req,res) => {

    const data = await getModel.find()

      const value = data.filter((item)=>{
      
        return item.income.split("$")[1] < 5 && (item.car === "BMW" || item.car === "Mercedes")

      })
     
    
    // console.log(value)

    res.status(200).send(value)
  
}

export default incomeController