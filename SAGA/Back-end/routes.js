import { Router } from "express";
import { UserController } from "./src/controller/userController.js";
import { LoginController } from "./src/controller/loginController.js";
import { InfoController } from "./src/controller/infoController.js";
import { tokenAuthenticate } from "./src/middlewares/authenticate.js";

export const router = new Router();

const userController = new UserController();
const loginController = new LoginController();
const infoController = new InfoController();

router.post('/cad', userController.create);
router.post('/login', loginController.auth);
router.post('/info/:matri',tokenAuthenticate , infoController.info);