import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3001;
export const DB_USER = process.env.DB_USER || "dbpablo";
export const DB_PASSWORD = process.env.DB_PASSWORD || "sqlserver";
export const DB_SERVER = process.env.DB_SERVER || "localhost";
export const DB_DATABASE = process.env.DB_DATABASE || "VentasDB";

