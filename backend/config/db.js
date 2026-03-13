import mongoose from "mongoose";
export const connectDB= async () => {
    await mongoose.connect('mongodb+srv://shashankpratap14122003_db_user:Shashank1412@cluster0.s07qkbp.mongodb.net/InvoGenAI')
        .then(() => {console.log('DB CONNECTED')})
}