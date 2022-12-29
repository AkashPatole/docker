var express=require("express");
const app=express();

app.use(express.static("public"))

app.get("/",(req,resp)=>{
    resp.sendFile("./public/index.html",{root:__dirname});
})

app.listen(9000);
console.log("server is listening at port 9000");