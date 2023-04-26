import getModel from "../db/schema/model.js"


const carController = async (req,res) => {
    const data  = await getModel.find()
    const value = data.filter((item)=>{
        const email = item.email
        const isdigit = email.match(/\d+/g)
        var flag;
        if(isdigit === null){
            flag = true;
        }else{
            flag = false;
        }
        return ((item.car === "BMW" || item.car==="Mercedes" || item.car === "Audi") && flag)
    })
    // console.log(value)
    res.status(200).send(value)
}
export default carController