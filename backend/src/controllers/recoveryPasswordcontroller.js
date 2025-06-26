import employeesModel from "../models/Employees.js";
import custmerModel from "../models/Customers.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"
import {sendEmail, HTMLRecoveryEmail} from "../utils/mailPasswordRecovery.js"
import { verify } from "crypto";
import { log } from "console";

const passwordRecoveryController = {}

passwordRecoveryController.requestCode = async(req, res) => {
    const {email} = req.body

    try {
        
let userFound;
let userType;

userFound = await employeesModel.findOne({email})

if(userFound){
userType = "employee"

}else{
    userFound = await custmerModel.findOne({email})

if(userFound){
userType = "customer"

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

);
   console.log("se envio")

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
        console.error("Error in verifyCode: ", error);
        res.status(500).json({ message: "Internal server error" });
    }


    }

passwordRecoveryController.newPassword = async (req, res) => {
    const { newPassword } = req.body;

    try {
        // Extract token
        const token = req.cookies.tokenRecoveryCode;

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        // Extract info
        const decoded = jsonwebtoken.verify(token, config.jwt.secret);

        // Verify code was validated
        if (!decoded.verified) {
            return res.json({ message: "Code not verified" });
        }

        // Extract email and userType
        const { email, userType } = decoded;

        // Encrypt new password
        const hashedPassword = await bcryptjs.hash(newPassword, 10);

        // Update password in database
        let updateUser;

        if (userType === "customer") {
            updateUser = await custmerModel.findOneAndUpdate(
                { email },
                { password: hashedPassword },
                { new: true }
            );
        } else if (userType === "employee") {
            updateUser = await employeesModel.findOneAndUpdate(
                { email },
                { password: hashedPassword },
                { new: true }
            );
        }

        if (!updateUser) {
            return res.json({ message: "User not found or password not updated" });
        }

        // Clear token cookie after successful update
        res.clearCookie("tokenRecoveryCode");

        res.json({ message: "Password updated successfully" });
        
    } catch (error) {
        console.error("Error in newPassword: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default passwordRecoveryController;

