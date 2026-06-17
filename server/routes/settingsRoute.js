import express from "express";
import connection from "../utils/mysql.js";
const router = express.Router();

router.get("/", async (_req, res) => {
  const sql = `SELECT * FROM settings`;

  try {
    const [results] = await connection.query(sql);

    if (!results.length) {
      res.status(404).json({ msg: "No settings in DB" });
      return;
    }

    res.json(results);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
