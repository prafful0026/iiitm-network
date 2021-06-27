import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import User from './models/UserModel.js'
import connectDB from './config/connectDB.js'
import Student from "./models/StudentModel.js"
import Alumni from "./models/AlumniModel.js"
import Admin from "./models/AdminModel.js"
import Faculty from "./models/FacultyModel.js"
import Post from "./models/PostModel.js"
import Chat from "./models/ChatModel.js"


dotenv.config()

connectDB()

const importData= async ()=>{
try{
    // await User.deleteMany()
    // await Post.deleteMany()
    // await Chat.deleteMany()
    // await Student.deleteMany()
    // await Alumni.deleteMany()
    // await Faculty.deleteMany()
    // await Admin.deleteMany()
    users.map(user=>console.log(JSON.stringify(user)))
    console.log('data imported')
    process.exit()
     
}

catch(err){
     console.error(err)
     process.exit(1)
}
}
    importData()