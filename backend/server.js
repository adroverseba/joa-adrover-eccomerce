import express from "express";
import { products } from "./data/products.js";
import cors from "cors";
import { config } from "./config/config.js";
import { connectDB } from "./db/db.js";
import colors from "colors";

connectDB();

const app = express();

const whitelist = ["http://localhost:5173", "http://localhost:3000"];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("no permitido"));
    }
  },
};

app.use(cors(options));

app.get("/", (req, res) => {
  res.send("Api is running... ");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = config.port;
const connectedServer = app.listen(PORT, () => {
  console.log(
    `Server running in ${config.env} mode on port: ${PORT}`.yellow.bold
  );
});

connectedServer.on("error", (err) => {
  console.log(`ocurrio un error en el servidor: ${err.message}`);
});
