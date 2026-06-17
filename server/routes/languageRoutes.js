import express from "express";
import connection from "../utils/mysql.js";
const router = express.Router();

router.get("/", async (_req, res) => {
  const sql = `SELECT * FROM languages`;

  try {
    const [results] = await connection.query(sql);

    if (!results.length) {
      res.status(404).json({ msg: "No languages in DB" });
      return;
    }

    res.json(results);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const sql = `SELECT * FROM languages WHERE id = ?`;

  try {
    const [results] = await connection.query(sql, [req.params.id]);

    if (!results.length) {
      res.status(404).json({ msg: "No languages in DB" });
      return;
    }

    res.json(results[0]);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
