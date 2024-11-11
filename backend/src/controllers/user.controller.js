import User from "../models/user.model.js";

export const addUser = async (req, res) => {
    const { name, age, email, membership } = req.body;
    try{
        const user = await User.create({name, age, email, membership});
        return res.status(201).json({user});
    }catch(error){
        console.error(`Error on user creation: ${error}`);
        return res.status(500).json({message: "Server error on user creation"});
    }
}