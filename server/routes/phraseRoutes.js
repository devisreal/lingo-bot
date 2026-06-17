import express from "express";
import connection from "../utils/mysql.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const { languageId, settingsId } = req.query;

  // If both Query params are provided
  if (languageId && settingsId) {
    try {
      const sql = `SELECT * from phrases 
                   WHERE language_id = ? and setting_id = ?
      `;
      const [results] = await connection.query(sql, [languageId, settingsId]);

      if (!results.length) {
        res.status(404).json({ msg: "No phrases to match your query" });
        return;
      }

      res.json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (languageId) {
    // If only Language Id is provided
    try {
      const sql = `SELECT * from phrases WHERE language_id = ? `;
      const [results] = await connection.query(sql, [languageId]);

      if (!results.length) {
        res.status(404).json({ msg: "No phrases to match your query" });
        return;
      }

      res.json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (settingsId) {
    // if only settings Id is provided
    const sql = `SELECT * from phrases WHERE setting_id = ? `;
    const [results] = await connection.query(sql, [settingsId]);

    if (!results.length) {
      res.status(404).json({ msg: "No phrases to match your query" });
      return;
    }

    res.json(results);
  } else {
    // If just the default route is provided
    try {
      const sql = `SELECT * FROM phrases`;
      const [results] = await connection.query(sql);

      if (!results.length) {
        res.status(404).json({ msg: "No phrases in DB" });
        return;
      }

      res.json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

export default router;
