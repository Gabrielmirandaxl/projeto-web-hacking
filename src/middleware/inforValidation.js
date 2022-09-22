const {body} = require("express-validator")

const inforValidation = () =>{
  return [
    body("infor")
    .isString()
    .withMessage("É obrigatório preencher esse campo")
    .escape()
    

  ]
}

module.exports = {
  inforValidation,
}