import { Router } from "express";
import { UserController } from "./src/controller/userController.js";
import { LoginController } from "./src/controller/loginController.js";
import { InfoController } from "./src/controller/infoController.js";
import { tokenAuthenticate } from "./src/middlewares/authenticate.js";
import { SecController } from "./src/controller/secController.js";

export const router = new Router();

const secController = new SecController()
const userController = new UserController();
const loginController = new LoginController();
const infoController = new InfoController();

router.post('/cad', userController.create);
router.post('/login', loginController.auth);
router.post('/info/:matri', tokenAuthenticate , infoController.info);
router.post('/sec/curso', tokenAuthenticate, secController.cadCurso);
router.post('/sec/materia/:id_curso', tokenAuthenticate, secController.cadMateria);
