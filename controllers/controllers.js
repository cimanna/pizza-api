import Nutrition from "../models/pizza.js";

export const getAllPizzas = async (req, res) => {
  try {
    let pizzas = await Nutrition.find();
    if (!pizzas) return res.json({ message: "No pizzas found" });
    res.json(pizzas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getPizza = async (req, res) => {
  try {
    const { id } = req.params;
    const pizza = await Nutrition.findById(id);
    if (!pizza) return res.status(404).json({ message: "Pizza not found" });
    res.json(pizza);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createPizza = async (req, res) => {
  try {
    const pizza = new Nutrition(req.body);
    await pizza.save();
    res.status(201).json(pizza);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePizza = async (req, res) => {
  const { id } = req.params;
  try {
    const pizza = await Nutrition.findByIdAndUpdate(id, req.body,{returnOriginal : false});
    if (!pizza) return res.status(404).json({ message: "Pizza not found" });
    res.json(pizza);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePizza = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Nutrition.findByIdAndDelete(id);
    res.status(200).json(deleted);
  } catch (error) {
    return res.status(200).send({ message: "Pizza not found", err: error });
  }
};
