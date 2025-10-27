import { Router } from "express";
import * as ComidasController from "../controllers/comidasControllers.js";

const router = Router();

router.get("/", ComidasController.listarTodos);




export default router