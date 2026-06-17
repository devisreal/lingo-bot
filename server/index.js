import "dotenv/config";
import express from "express";
import cors from "cors";

import languageRoutes from "./routes/languageRoutes.js";
import settingsRoutes from "./routes/settingsRoute.js";
import phraseRoutes from "./routes/phraseRoutes.js";

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);

app.get("/", (_req, res) => {
  res.send("Running");
});

app.use("/languages", languageRoutes);
app.use("/settings", settingsRoutes);
app.use("/phrases", phraseRoutes);

app.listen(PORT, () => {
  console.log(`My Express app is listening on port ${PORT}`);
});
