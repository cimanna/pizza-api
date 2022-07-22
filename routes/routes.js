import { Router } from "express";
import pizzaRoute from "./pizza.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Routed");
});

router.use("/", pizzaRoute);

export default router;
