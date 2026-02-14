import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

// Create a pool to connect to MySQL
export const db = await mysql.createPool({
  host: process.env.DB_HOST,      // e.g., localhost
  user: process.env.DB_USER,      // e.g., root
  password: process.env.DB_PASSWORD,  // your MySQL password
  database: process.env.DB_NAME,      // your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
