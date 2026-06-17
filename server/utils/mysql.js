import mysql from "mysql2/promise";
import "dotenv/config";

export default await mysql
  .createConnection({
    uri: String(process.env.DATABASE_URL),
    multipleStatements: true,
  })
  .catch((err) => {
    console.log(err);
  });
