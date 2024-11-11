import axios from "axios";

export const addUser = async (name, age, email, membership) => {
    try {
        const user = await axios.post('http://localhost:3001/user', { name, age, email, membership });
        return user.data;
    } catch (error) {
        console.error(`Error on user creation: ${error.response?.data || error.message}`);
        return { message: "Server error on user creation" };
    }
};
