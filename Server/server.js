const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { consumers } = require('nodemailer/lib/xoauth2');
const fs=require('fs/promises')
const path=require('path');
const {generateOTP,getOTP,verifyOTP} = require('./OTPver'); 
const {sendemail} =require('./OTPsend');
const internships = require('./fetch-jobs');


const port = 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

app.post('/generateOTP', (req, res) => {
    try{
        generateOTP();
        console.log("Generated OTP:", getOTP()); 
  res.json({ otp: getOTP() });
}catch(err){
    console.log('some error caught',err)
    res.status(500).json({err:'Internal server error'})
}
});

app.post('/sendmail',async(req,res)=>{
    const {userEmail,otp}=req.body
    try{
        await sendemail(userEmail,otp)
        res.status(200).json({success:true,message:'email sent successfully'})
    }catch(error){
        console.error('Error sending OTP email ',error)
        res.status(500).json({success:false,message:'Error sending email'})
    }
})

app.post('/verifyOTP',(req,res)=>{
    const userOTP=req.body.userOTP
    console.log('Recieved data in server ',userOTP)

    // call the function
     let verificationstatus=verifyOTP(userOTP)
     temp=verificationstatus
    res.json({message:`${verificationstatus}`})
})


// saving data
app.post('/userInfo',async(req,res)=>{
    const {fname,lname,id,password}=req.body;
    const data={
        fname,
        lname,
        id
    }

    try{
        const filePath=path.join(__dirname,'userInfo.json')
        let existingInfo=[]
        try{
            const existingDataBuffer=await fs.readFile(filePath)
            existingInfo=JSON.parse(existingDataBuffer.toString())
        }catch(readError){

        }
        existingInfo.push(data)
        await fs.writeFile(filePath,JSON.stringify(existingInfo,null,2))
        res.status(200).json({success:true,message:'Data saved Successfully'})
    }catch(error){
        console.error("Error saving data : ",error)
        res.status(500).json({success:false,message:'Error saving data'})
    }
})

app.post('/post_save',async(req,res)=>{
    const data =req.body
    let newData
    if(data.Mobile)
    {
         newData={
            Mobile:data.Mobile,
            coinadd:data.coinadd
        }
    }
    if(data.LinkedIn)
    {
         newData={
            LinkedIn:data.LinkedIn,
            coinadd:data.coinadd
        }
    }
    if(data.GitHub)
    {
         newData={
            GitHub:data.GitHub,
            coinadd:data.coinadd
        }
    }
    if(data.College)
    {
         newData={
            College:data.College,
            coinadd:data.coinadd
        }
    }
    if(data.StartDate)
    {
         newData={
            StartDate:data.StartDate,
            coinadd:data.coinadd
        }
    }
    if(data.EndDate)
    {
         newData={
            EndDate:data.EndDate,
            coinadd:data.coinadd
        }
    }

    console.log(newData)
    try{
        let filePath=path.join(__dirname,'userInfo.json')
        const content=await fs.readFile(filePath,'utf8')
         const jsonData=JSON.parse(content)
        //  console.log(jsonData)
        const objectToUpdate=jsonData.findIndex(obj=>obj.id===data.id)
                if(objectToUpdate!==-1){
                   Object.assign(jsonData[objectToUpdate],newData) 
                   await fs.writeFile(filePath,JSON.stringify(jsonData,null,2),'utf-8')
                   console.log('data has been updated successfully')
                   res.status(200).json({message:'data updated '})
                }else{
                    console.error('ID not found ',data.id)
                    res.status(404).json({error:'Id Not found'})
                }
    }catch(error){
        console.error("error in adding file : ",error)
        res.status(500).json({error:'Internal Server Error'})
    }
})

app.get('/internship/fetch/', (req, res) => {
    res.json(internships.fetchInternships());
});

app.get('/internship/apply/:internshipId', (req,res) => {
    var userId = req.query.userId;
    var internshipId = req.params.internshipId;
    users.applyInternship(userId, internshipId);
    res.send("Applied to internship");
});

app.get('/internship/applied', (req,res) => {
    var userId = req.query.userId;
    var appliedInternshipIds = users.fetchAppliedInternships(userId);
    var appliedInternships = appliedInternshipIds.map(appliedInternshipId => {
        return internships.fetchInternshipInformation(appliedInternshipId);
    });
    res.json(appliedInternships);
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });