import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Nutrition = new Schema({
  image: String,
  label: String,
  totalNutrients: {
    Calories: String,
    Fat: String,
    Carbs: String,
    Protein: String,
    Sugar: String,
  },
  healthLabels: [String]
})



export default mongoose.model("Nutrition", Nutrition);