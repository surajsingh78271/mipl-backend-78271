// import getModel from "../db/schema/model.js"
const getModel = require('../db/schema/model.js')
const quoteController = async (req,res) => {
    const data = await getModel.find()

    const value = data.filter((item)=>{

        var flag_last_name = item.last_name[0]==="M"?true:false
        var flag_length = item.quote.length > 15 ?true:false
        var flag_email = item.email.includes(item.last_name.toLowerCase())?true:false
        return (flag_last_name && flag_length && flag_email)
    })

    // console.log(value)

    res.status(200).send(value)
  
}

// export default quoteController
module.exports = quoteController