import employeesModel from "../models/Employees.js";
import custmerModel from "../models/Customers.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"
import {sendEmail, HTMLRecoveryEmail} from "../utils/mailPasswordRecovery.js"
import { verify } from "crypto";

const passwordRecoveryController = {}

passwordRecoveryController.requestCode = async(req, res) => {
    const {email} = req.body

    try {
        
let userFound;
let userType;

userFound = await employeesModel.findOne({email})

if(userFound){
userType = "cutomer"

}else{
    userFound = await custmerModel.findOne({email})

if(userFound){
userType = "employee"

}
}

if (!userFound){
    res.json({message: "user not found"})
}

const code = Math.floor(1000+Math.random()*9000).toString()

const token = jsonwebtoken.sign(
    {email, code, userType, verified: false},
    config.jwt.secret,
    {expiresIn: "20m"}
)


res.cookie("tokenRecoveryCode", token, {maxAge: 20*60*1000})

await sendEmail (

    email,
    "your verification code",
    "hi, remember ur password pls",
    HTMLRecoveryEmail(code)
)

res.json({message:"email sent"})
    } catch (error) {
        console.log("error" + error)
    }
}

passwordRecoveryController.verifyCode = async (req, res) => {
    const {code} = req.body

    try {
        const token = req.cookies.tokenRecoveryCode
        
        // extraer info token

        const decoded = jsonwebtoken.verify(token, config.jwt.secret)
        if (decoded.code !==code) {

             return res.json({message: "invalid code"})
   
        }

        //marcar token 

        const newToken = jsonwebtoken.sign (


        {email: decoded.email, 
            code:decoded.code, 
            userType: decoded.userType,
            verified: true},

            config.jwt.secret,
            {expiresIn:"20m"}
        )

res.cookie("tokenRecoveryCode", newToken, {maxAge: 20*60*1000})
res.json ({message:"verification code successfull"})


    } catch (error) {
        console.log("error" + error)
    }


    }

export default passwordRecoveryController;