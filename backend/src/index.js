import express from "express"
import userRouter from "./routes/user.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())
app.use("/user",userRouter);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
}


const start = async () => { 
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error(`Error on server startup: ${error}`);
    }
}

start();