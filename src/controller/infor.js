const InforModel = require("../model/infor")


async function createInfor(request, response){
    
  const {infor} = request.body

  const create = await InforModel.create({
    infor: infor
  })

  return response.status(200).redirect("/index.html")


}

async function getInfor(request, response){

  try {

      const infor = await InforModel.find()

      response.status(200).json({
        infors: infor
      })
    
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  createInfor,
  getInfor,
}