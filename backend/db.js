import fs from 'fs';
import initSqlJs from 'sql.js';

export const loadDatabase = async () => {
  const SQL = await initSqlJs();
  const dbFilePath = 'db.sqlite';
  const fileBuffer = fs.readFileSync(dbFilePath);
  const db = new SQL.Database(fileBuffer);
  return db;
};

export const saveDatabase = () => {
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(dbFilePath, buffer);
};
