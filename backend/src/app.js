const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const corsOption = {
    origin:"http//localhost:5173",
    Credentials:true
}
app.use(cors(corsOption))



module.exports=app