import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
import Student from "./studentModel.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

app.post("/api/studentRegister", async (req, res) => {
  try {
    await Student.create(req.body);

    res.status(201).json({ msg: "Registration completed" });
  } catch (error) {
    console.log(error);
  }
});

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/client/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const port = process.env.PORT || 5000;
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => console.log("Server is listing"));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();
