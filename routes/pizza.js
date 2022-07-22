import { Router } from "express";
import * as controllers from "../controllers/controllers.js"

const router = Router();


router.get("/all", controllers.getAllPizzas)
router.get("/:id", controllers.getPizza)
router.post("/", controllers.createPizza)
router.put("/:id", controllers.updatePizza)
router.delete("/:id", controllers.deletePizza) 


 
export default router;