//User Routes
import express from "express" ;
import userModel from "../database/models/userModel.js";
import UserRepository from "../repositories/userRepository.js";
import UserService from "../services/userService.js";
import UserController from "../controllers/userController.js";

const userRouter = express.Router();

// Instantiate repository, service and controller
const userRepository = new UserRepository(userModel);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// Route to register a new user
userRouter.post('/register', (req, res) => userController.register(req, res));

// Route to login
userRouter.post('/login', (req, res) => userController.login(req, res));

//Route to logout
userRouter.post('/logout', (req, res) => userController.logout(req, res));

//Route to show all users
userRouter.get('/all', (req, res) => userController.findAllUsers(req, res));

export default userRouter; 