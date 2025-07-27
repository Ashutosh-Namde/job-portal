const express = require("express")
const { registrationController, loginController, updateProfileController } = require("../controllers/user.controller")
const isAuth = require("../middleware/auth")

const router = express.Router()

router.post("/register" , registrationController)
router.post("/login" , loginController)
router.post("/profile/update" , isAuth , updateProfileController)

module.exports = router