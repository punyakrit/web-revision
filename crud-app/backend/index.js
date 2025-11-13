const express= require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const {z} = require('zod')
const { todo } = require('./db/db')


const todoSchema = z.object({
    title: z.string(),
    description : z.string(),
    isDone : z.boolean()
})

app.use(express.json())


app.post('/',async (req,res)=>{
    const {title, description, isDone} = req.body
    const validate = todoSchema.safeParse({title, description, isDone})

    if(!validate.success){
        return res.status(411).json({
            msg: "Wrong input sent"
        })
    }
    await todo.create({
        title,
        description,
        isDone
    })

    res.json({
        msg:"Todo Saved"
    })
})

app.get('/',async (req,res)=>{
    const all = await todo.find({})
    res.json({all})
})

app.put('/', async(req,res)=>{
    
})





app.listen(3000,async ()=>{

    await mongoose.connect('mongodb+srv://admin:wyWWjD7kVASGlKJh@cluster0.gt81chd.mongodb.net/crud-basics')
    console.log("server started")
})