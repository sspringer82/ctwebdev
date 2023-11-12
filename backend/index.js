import express from 'express';

import { loadDatabase } from './db.js';
import { createProductsRouter } from './products.js';

const app = express();
app.use(express.json());

const db = await loadDatabase();

const productsRouter = createProductsRouter(db);
app.use('/products', productsRouter);

app.listen(8080, () => {
  console.log('server is listening to http://localhost:8080');
});
