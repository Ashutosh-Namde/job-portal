const jwt = require("jsonwebtoken");

const isAuth = async (req,res,next) => {
   try {
     const token = req.cookie.token;
    if(!token){
        res.status(400).json({message:"user not authenticated" , success:false})
    }
    const decode = await jwt.verify(token , process.env.SECRETE_KEY)
    if(!decode){
        res.status(400).json({message:"Invalid token" , success:false})

    }
    req.id = decode.user.Id;
    next()
   } catch (error) {
    res.status(400).json({message:"error in middleware" , error})
   }
}

module.exports = isAuth