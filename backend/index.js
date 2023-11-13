import express from 'express';

import { loadDatabase } from './db.js';
import { createProductsRouter } from './products.js';
import { createCartsRouter } from './carts.js';
import { createUsersRouter } from './users.js';

const app = express();
app.use(express.json());

const db = await loadDatabase();

app.use((request, response, next) => {
  console.log(request.url);
  next();
});

const productsRouter = createProductsRouter(db);
app.use('/products', productsRouter);
const cartsRouter = createCartsRouter(db);
app.use('/carts', cartsRouter);
const usersRouter = createUsersRouter(db);
app.use('/users', usersRouter);

app.listen(8080, () => {
  console.log('server is listening to http://localhost:8080');
});
