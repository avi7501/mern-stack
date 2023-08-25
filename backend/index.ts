import { PrismaClient } from "@prisma/client";
import express from 'express';
import dotenv from 'dotenv'

const prisma = new PrismaClient();

const app = express()

app.get('/api/users',async (req,res)=>{
    // const createUser = await prisma.user.create(data:{
    //     username:"avi",
    //     email:"avinashmuralidharan2@gmail.com",
    //     password:"1234""

    // })
    res.json(prisma.user.findMany())
})

app.listen(process.env.PORT,()=>console.log("server is running"))
