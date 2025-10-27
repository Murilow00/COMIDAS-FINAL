import { Router } from "express";
import * as ComidasController from "../controllers/comidasControllers.js";

const router = Router();

router.get("/", ComidasController.listarTodos);
router.get("/:id", ComidasController.listarUm);




export default router