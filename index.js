const express=require("express");
const app=express();
const port=3000;
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
 app.get("/register",(request,response)=>{
    response.sendFile(__dirname+"/index.html")
 })
 app.post("/register",(request,response)=>{
    const fullname=request.body.fullname;
    const age=request.body.age;
    response.send( `Your Name is ${fullname} and Age is ${age}`);
 })

app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})