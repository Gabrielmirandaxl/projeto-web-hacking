const router = require("express").Router()
const InforController = require("../controller/infor")


//middlawares
const validation = require("../middleware/erroValidation")
const inforValidation = require("../middleware/inforValidation")

router.post("/register-infor", inforValidation.inforValidation(), validation, InforController.createInfor)
router.get("/infor-all", InforController.getInfor)


module.exports = router