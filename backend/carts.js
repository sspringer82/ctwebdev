import { Router } from 'express';
import { saveDatabase } from './db.js';

export function createCartsRouter(db) {
  const router = Router();

  router.get('/:id', (request, response) => {
    const cartId = parseInt(request.params.id, 10);

    const query = `
    SELECT 
    p.name AS name,
    cp.amount AS amount,
    p.price AS pricePerUnit,
    (cp.amount * p.price) AS totalPrice
FROM 
    cart_products AS cp
INNER JOIN 
    products AS p ON cp.product_id = p.id
WHERE 
    cp.cart_id = ?
    `;
    const results = [];

    const stmt = db.prepare(query);
    stmt.bind([cartId]);
    while (stmt.step()) {
      const row = stmt.getAsObject();
      console.log(row);
      results.push(row);
    }
    stmt.free();

    saveDatabase(db);
    response.json(results);
  });

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

    saveDatabase(db);
    response.send();
  });

  router.put('/:id', (request, response) => {
    const cartId = request.params.id;
    const data = request.body;

    const query = `
UPDATE carts SET status = 'completed', firstname = ?, lastname = ?, street = ?, zip = ?, city = ?, country = ? WHERE id = ?
    `;

    const stmt = db.prepare(query);

    stmt.bind([
      data.firstname,
      data.lastname,
      data.street,
      data.zip,
      data.city,
      data.country,
      cartId,
    ]);
    stmt.run();
    stmt.free();

    saveDatabase(db);

    response.send();
  });

  return router;
}
