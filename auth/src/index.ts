import express from "express";
import { json } from "body-parser";
import { BASE_URL } from "./const";
import { AppRoutes } from "./routes/appRoutes";
import { errorHandler } from "./middlewares/error-handler";

const app = express();

const APP_BASE = BASE_URL;
app.use(json());

// router init
app.use(APP_BASE, AppRoutes);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Auth Service Started On The PORT :: ", PORT);
});
