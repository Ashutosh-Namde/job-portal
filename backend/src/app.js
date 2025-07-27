const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const router = require("./routes/user.route")


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const corsOption = {
    origin:"http//localhost:5173",
    Credentials:true
}
app.use(cors(corsOption))

app.use("/user",router)



module.exports=app