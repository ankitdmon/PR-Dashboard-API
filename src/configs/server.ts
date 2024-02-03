import express from "express";
import { PORT } from ".";
import routes from "../routes/index";

const app = express();

app.listen(PORT, async () => {
  console.log(`Server is running on: ${PORT}`);
});

app.use("/", routes);

export default app;
