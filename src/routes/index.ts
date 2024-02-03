import express from "express";
import noAuth from "../routes/noAuth"
const app = express();

app.use("/public", noAuth);

export default app;