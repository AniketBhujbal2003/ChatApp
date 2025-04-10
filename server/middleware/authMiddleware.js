import jwt from "jsonwebtoken";
import User from "../models/userModel.js";


const checkauth = async (req, res, next) => {
    try {
        
        // const token = req.cookies.jwt;
        let authHeaders = req.headers['authorization'];
        const token = authHeaders && authHeaders.split(' ')[1];

        if (!token) {
            return res.status(401).json(
                { 
                    success:false,
                    message: "You Are Unauthorized - token not provided"
                }
            );
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: "You Are Unauthorized - invalid token"
            });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.log("Error in chekauth middleware: ", error.message);
        res.status(500).json({
            success: false,
            message: "You Are Not LoggedIn"
        });
    }
};

export default checkauth;