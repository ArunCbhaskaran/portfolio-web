import express from "express";
import mongoose from "mongoose";
const db = process.env.MONGODB_URL;
const port = process.env.PORT;
const app = express();
app.use(express.json());

mongoose
  .connect(db)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log("mongodb error", error);
  });

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
