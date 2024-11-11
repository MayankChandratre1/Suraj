import express from 'express';
import { addUser } from '../controllers/user.controller.js';
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('Hello from user route');
} );

userRouter.post('/', addUser);

export default userRouter;
