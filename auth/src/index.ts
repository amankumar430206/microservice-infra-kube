import express from "express";
import {json} from "body-parser"

const app = express();

app.use(json());

const BASE_URL = "/api/users"

app.get("/",(req,res)=>{
    res.json({
        msg : "welcome to KubeCtl Env"
    })
})

app.get(BASE_URL + "/currentuser",(req,res)=>{
    res.json({
        name : "Aman Test"
    })
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Auth Service Started On The PORT :: ", PORT)
})


