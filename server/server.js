const express = require("express");
const { login } = require("./auth/index");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3005;
/**
 * Routes
 */
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
//Category Routes
const categoryRoutes = require("./routes/category");
/**
 * Middlewares
 */
const { verifyToken } = require("./middleware/auth");
app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

/**
 * Multer - file storage
 */
const multer = require("multer");
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });
// app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));
/**
 * Routes
 */

app.post("/single", upload.single("productPic1"), (req, res) => {
  // console.log(req.body);
  console.log(req.file.path);
  res.send("File uploaded successfully");
});
app.get("/productsImages/:theImageName", (req, res) => {
  let iname = "1674916852316--13182609_5176253.jpg";
  console.log(req.params.theImageName); //returns the imageOfApet.png
  let theName = req.params.theImageName; //imageOfApet.png
  // res.send(__dirname + "/uploads/" + theName); //Sending the user the file
  res.send(
    "uploads\\1674919951043--IMG_20210311_005504_279-removebg-preview (2).png"
  );
});

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);
app.post("/api/v1/auth/login", login);
app.get("/", verifyToken, (req, res) => {
  res.send("Home Page - hello world");
});
// Category Routes - clean
app.use("/api/v1/category", categoryRoutes);
/**
 * Connecting to database and then listening to server
 */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`CONNECTED TO DATABASE...`);
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
  })
  .catch((err) => console.log("Could not connect to database" + err));
