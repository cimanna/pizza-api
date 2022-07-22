import mongoose from "mongoose";

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectionStr =
  process.env.DB_URL || "mongodb://localhost:27017/pizzaDatabase";

mongoose.connect(connectionStr, mongooseConfig);

const db = mongoose.connection;

db.once("disconnected", () => {
  console.log("Disconnected from MongoDB!");
});
db.on("error", (err) => console.log(`connection error: ${err}`));

export default db;
