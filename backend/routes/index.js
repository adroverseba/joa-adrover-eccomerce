import express from "express";
import productsRouter from "./products.router.js";

const router = express.Router();

export const routerApi = (app) => {
  app.use("/api", router);
  router.use("/products", productsRouter);
};
