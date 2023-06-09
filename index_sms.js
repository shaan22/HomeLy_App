const express = require('express')

const twilio = require('twilio');

const dotenv = require("dotenv")

const cors = require('cors')

const app = express()




app.use(cors())

app.use(express.json());

app.use(express.urlencoded({extended:true}))

dotenv.config();




function sendSMS(name,type)

{

  const client  =  new twilio(process.env.TWILIO_SID,process.env.TWILIO_AUTH_TOKEN);

    if (type =="Residential")

    {

   return client.messages

   .create({

    body:"Congratulations "+name+" on registering for "+type+" insurance on our website! With our Residential insurance, you can protect your property against unforeseen events such as natural disasters, theft, or damage. For further process you need to submit these documents-                                                        1.Property Information                                                                2.Proof Of Ownership                                                                  3.Government-Issued Identification                                                     4.Prior Insurance Information Report                                                  5.Home-Inspection Report                                                            Soon one of our Agent will contact  you for further proceedings . So get your documents prepared for the smooth processing. Our team is here to provide you with exceptional support and assist you every step of the way.                              Welcome to Homely!",

   from:'+13204463166',

  to:'+919813084847'})

   .then(message =>{

      console.log(message,"Message Sent")

    })

   .catch(err=>{

    console.log(err,"Message not Sent")})

   }

   else

   {

    return client.messages

   .create({

    body:"Congratulations "+name+" on registering for "+type+"  insurance on our website! With our commercial insurance, you can protect your property against unforeseen events such as natural disasters, theft, or damage. For further process you need to submit these documents-                                                        1.Property Information                                                                2.Proof Of Ownership Or Lease Agreement                                               3.Property Valuation                                                                   4.Business Information                                                                 5.Government-Issued Identification                                                     6.Prior Insurance Information Report                                                  7.Site-Inspection Report                                                            Soon one of our Agent will contact  you for further proceedings . So get your documents prepared for the smooth processing. Our team is here to provide you with exceptional support and assist you every step of the way.                              Welcome to Homely!",




   from:'+13204463166',

  to:'+919813084847'})

   .then(message =>{

      console.log(message,"Message Sent")

    })

   .catch(err=>{

    console.log(err,"Message not Sent")})

   }

}




app.post("/sendsms",(req,res)=>{

  console.log(req.body)

    const {name,type} = req.body;

    sendSMS(name,type);

})

app.listen(5000,()=>{

  console.log("Listening at port 5000")

})