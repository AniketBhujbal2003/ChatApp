import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

const signupUser = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords don't match"
            });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({
                success: false,
                message: "Username already exists"
            });
        }

        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        if (newUser) {
            // Generate JWT token here
            let token = generateTokenAndSetCookie(newUser._id);
            await newUser.save();

            res.status(201).json({
                success: true,
                message: "User created Succesfully",
                token,
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });

        } else {
            res.status(400).json(
                {
                    success: false,
                    message: "Invalid user data"
                }
            );
        }


    }
    catch (err) {
        console.log("Error From Signup controler:", err.message);
        res.status(500).json(
            {
                success: false,
                message: 'Internal Server Error',
            }
        )
    }
}

const loginUser = async (req, res) => {
    try {

        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Invalid Credentials"
                }
            )
        }

        let hashedPassword = user.password;

        const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

        if (!isPasswordCorrect) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Invalid Credentials"
                }
            );
        }

        let token = generateTokenAndSetCookie(user._id);

        res.status(200).json({
            token,
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    }
    catch (err) {
        console.log("Error From Login controler:", err.message);
        res.status(500).json(
            {
                success: false,
                message: 'Internal Server Error',
            }
        )
    }
}


const logoutUser = async (req, res) => {
    try {
        // res.cookie("jwt", "", { maxAge: 0 });

        res.status(200).json(
            {
                success: true,
                message: "Logout Succesfully"
            }
        );
        
    }
    catch (err) {
        console.log("Error From Logout controler:", err.message);
        res.status(500).json(
            {
                success: false,
                message: 'Internal Server Error',
            }
        )
    }
}


export { signupUser, loginUser, logoutUser }