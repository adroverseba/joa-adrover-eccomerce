import express from "express";
import cors from "cors";
import { config } from "./config/config.js";
import { connectDB } from "./db/db.js";
import colors from "colors";
import { routerApi } from "./routes/index.js";
import {
  errorHandler,
  boomErrorHandler,
  logErrors,
  odmErrorHandler,
  notFound,
} from "./middlewares/error.handler.js";

// connection DB
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

// cors
app.use(cors(options));

//router
app.get("/", (req, res) => {
  res.send("Api is running... ");
});
routerApi(app);

//error handlers
app.use(notFound);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(odmErrorHandler);
app.use(errorHandler);

//server connection
const PORT = config.port;
const connectedServer = app.listen(PORT, () => {
  console.log(
    `Server running in ${config.env} mode on port: ${PORT}`.yellow.bold
  );
});

connectedServer.on("error", (err) => {
  console.log(`ocurrio un error en el servidor: ${err.message}`);
});
