import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactrouter from "./router/contactrouter.js";
const db = process.env.MONGODB_URL;
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contact", contactrouter);

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
