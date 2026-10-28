// express = require("express");
// const app = express();

// app.get("/",(req,res)=>{
//     res.json([
//         {id:1, name:"Joie", department:"IT"},
//         {id:2,name:"EVA",department:"HR"},
//     ]);
// });
// const PORT=process.env.PORT || 4000;
// app.listen(PORT,()=>{
//     console.log("Server running on POrt 4000");
// });
const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.json([
        {id:1,name:"Sachin",department:"HR"},
        {id:2,name:"Rahul",department:"IT"},
    ]);
});
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log("server running on the port 4000");
});