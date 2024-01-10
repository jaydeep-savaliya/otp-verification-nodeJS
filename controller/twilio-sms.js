require('dotenv').config()
const {Service_SID,Auth_Token,Account_SID} = process.env
const client = require('twilio')(Account_SID,Auth_Token);

const sendOTP = async(req,res)=>{
    const {phone} = req.body;
    try {
        const otp = await client.verify.v2.services(Service_SID).verifications.create({
            to:`+91${phone}`,
            channel:"sms"
        });
        return res.status(200).json(`otp send successfully--!:${JSON.stringify(otp)}`);
    } catch (error) {
        return res.status(400).json("something went wrong")
    }
}
const verifyOTP = async(req,res)=>{
    const {phone,otp} = req.body;
    console.log(phone,otp)
    try {
        const response = await client.verify.v2.services(Service_SID).verificationChecks.create({
            to:`+91${phone}`,
            code:otp,
        });
        return res.status(200).json(`otp successfully checked:${JSON.stringify(response)}`);
    } catch (error) {
        return res.status(400).json("otp is wrong")
    }
}
module.exports = {sendOTP,verifyOTP}