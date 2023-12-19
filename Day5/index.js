import express from 'express';
import cors from 'cors';
let app = express();
app.use(cors())
app.use(express.json())
let port = 5000;
let data = [{
 name: "neeraj karyakarta",
 salary: 500
},
{
 name: "bhusan bhai",
 salary: 800
},
{
 name: "golu",
 salary: 501
},
{
 name: "ajay kalmodia",
 salary: 801
},
]
///////GET API///////////////
app.get("/employee", (req, res)=>{
  res.send(data)
})
//////////////POST//////////
app.post("/employee", (req, res)=>{
 let data = req.body;
 res.json(data)
})
///////////////////////////
app.listen(port,()=>{
 console.log(`server is running on ${port}`)
})