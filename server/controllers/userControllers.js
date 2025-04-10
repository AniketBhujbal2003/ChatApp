import User from "../models/userModel.js";


const getAllUserExceptSelf = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(
            {
                success:true,
                message:"Fetched Users Succesfully",
                filteredUsers,
            }
        );
    } catch (error) {
        console.error("Error in getAllUserExceptSelf : ", error.message);
        res.status(500).json(
            {
                success: false,
                message: "Internal server error"
            }
        );
    }
};

export {getAllUserExceptSelf}