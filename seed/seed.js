import db from "../connection/db.js";
import Nutrition from "../models/pizza.js";
import pizzaData from "./data.json" assert { type: "json" };

const seedData = async () => {
  await Nutrition.deleteMany({});

  await Nutrition.insertMany(pizzaData);
  db.close();
};

seedData();
