import dotenv from "dotenv"
dotenv.config();

import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import { connectToDB } from "./config/db.js";

import { app,server } from "./socket/socket.js";


const PORT = process.env.PORT
// const app = express();

app.use(cors(
    {
        origin: process.env.CLIENT_BASE_URL,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    }
))
app.use(cookieParser());
app.use(express.json());


// importing routes
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from  "./routes/userRoutes.js"

// using routes
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


server.listen(PORT,()=>{
    console.log("app is listening to PORT:",PORT);
    connectToDB();
})