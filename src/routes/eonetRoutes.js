// routes/eonetRoutes.js
import express from "express" ;
import apiClient from "../config/apiClient.js";
import EONETRepository from "../repositories/eonetRepository.js";
import EONETService from "../services/eonetService.js";
import EONETController from "../controllers/eonetController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const eonetRouter = express.Router();

// Instantiate the controller
const eonetRepository = new EONETRepository(apiClient);
const eonetService = new EONETService(eonetRepository);
const eonetController = new EONETController(eonetService)

// Route to get events by category
eonetRouter.get('/events',authMiddleware, (req, res) => eonetController.getEventsByCategory(req, res));

// Route to get all event categories
eonetRouter.get('/categories', authMiddleware, (req, res) => eonetController.getCategories(req, res));

export default eonetRouter; 