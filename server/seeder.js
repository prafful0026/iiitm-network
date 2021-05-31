import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import User from './models/UserModel.js'
import connectDB from './config/connectDB.js'

dotenv.config()

connectDB()

const importData= async ()=>{
try{
    await User.deleteMany()

    const createdUsers=await User.insertMany(users)
    const adminUser=createdUsers[0]._id 
    console.log('data imported')
    process.exit()
     
}

catch(err){
     console.error(err)
     process.exit(1)
}
}
    importData()