import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
import Student from "./studentModel.js";
import fs from "fs";
import cors from "cors";
import path from "path";

dotenv.config();
const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

app.use(cors());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

app.post("/api/documentUpload", async (req, res) => {
  try {
    const imageLinks = [];
    if (req.files) {
      let images = [];
      if (req.files.images.length > 0) images = req.files.images;
      else images.push(req.files.images);

      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.uploader.upload(
          images[i].tempFilePath,
          {
            use_filename: true,
            folder: "IPM",
            quality: 50,
            resource_type: "auto",
          }
        );
        imageLinks.push(result.secure_url);
        fs.unlinkSync(images[i].tempFilePath);
      }
    }
    return res.status(200).json({ imageLinks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
});

app.post("/api/studentRegister", async (req, res) => {
  try {
    await Student.create({ details: req.body });

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
