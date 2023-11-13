import { Router } from 'express';
import { saveDatabase } from './db.js';

export function createCartsRouter(db) {
  const router = Router();

  router.post('/', (request, response) => {
    const query = `INSERT INTO carts (status) VALUES ('pending')`;

    db.exec(query);

    const idQuery = "SELECT seq FROM sqlite_sequence WHERE name='carts'";
    const result = db.exec(idQuery);

    const lastInsertId = result[0].values[0][0];

    saveDatabase(db);

    response.json({ id: lastInsertId });
  });

  router.post('/items/:id', (request, response) => {
    const cartId = parseInt(request.params.id, 10);
    const { productId, amount } = request.body;

    const query =
      'INSERT INTO cart_products (cart_id, product_id, amount) VALUES (?, ?, ?)';
    const stmt = db.prepare(query);
    stmt.bind([cartId, productId, amount]);
    stmt.run();
    stmt.free();

    console.log('xxx');

    saveDatabase(db);
    response.send();
  });

  return router;
}
