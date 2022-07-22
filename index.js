import db from "./connection/db.js";
import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import logger from "morgan";

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.use(logger("dev"));

app.use("/", routes);

db.on("connected", () => {
  app.listen(PORT, () => {
    console.clear();
    console.log(
      `Express server running in development on: http://localhost:${PORT}`
    );
  });
});
