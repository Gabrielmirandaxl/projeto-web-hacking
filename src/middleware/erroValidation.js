const {validationResult} = require("express-validator")

const validation = (request, response, next) =>{

  const error = validationResult(request)

  if(error.isEmpty()){
    return next()
  }

  const extractedError = []

  error.array().map( (err) => extractedError.push(err.msg))

  return response.status(400).json({
    error: extractedError,
  })

}

module.exports = validation