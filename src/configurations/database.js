import * as sql from "expo-sqlite";

const db = sql.openDatabase("./database/database.sql");

export default db;
