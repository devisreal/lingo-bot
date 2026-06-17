import fs from "fs";
import "dotenv/config";
import connection from "./mysql.js";

try {
  const sql = fs.readFileSync("./db/setup.sql", "utf8");
  await connection.query(sql);
  console.log("Database imported successfully");
} catch (error) {
  console.error(`Database import failed: ${error}`);
} finally {
  await connection.end();
}
process.exit();
