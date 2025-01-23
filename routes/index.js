import express from "express";
import { Index, Store, getId, Destroy, Update } from "../controllers/usersController.js";
import { validateUserInput } from "../middleware/validateInput.js";
import { logger } from "../middleware/logger.js";

const route = express.Router();

// Middleware
route.use(logger);
///Users
route.get('/users', Index);
route.get('/users/:id', getId);
route.post('/users', validateUserInput, Store);
route.put('/users/:id', validateUserInput, Update);
route.delete('/users/:id', Destroy);


export default route;