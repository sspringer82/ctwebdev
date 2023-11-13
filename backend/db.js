import fs from 'fs';
import initSqlJs from 'sql.js';
const dbFilePath = 'db.sqlite';

export const loadDatabase = async () => {
  const SQL = await initSqlJs();
  const fileBuffer = fs.readFileSync(dbFilePath);
  const db = new SQL.Database(fileBuffer);
  return db;
};

export const saveDatabase = (db) => {
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(dbFilePath, buffer);
};
