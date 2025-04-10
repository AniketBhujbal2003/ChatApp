import mongoose from "mongoose";

let connectToDB = ()=>{
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Database Connected");
        })
        .catch((err) => {
            console.log("Database Connection Error: ", err);
        })
}

export {connectToDB};