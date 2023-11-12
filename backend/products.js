import { Router } from 'express';

export function createProductsRouter(db) {
  const router = Router();

  router.get('/', (request, response) => {
    const name = request.query.name;

    let query =
      'SELECT id, name, description, price, size, weight, image FROM products';

    if (name) {
      const safeName = name.replace(/[^a-zA-Z0-9 ]/g, '');
      query += ` WHERE name LIKE '%${safeName}%'`;
    }

    const results = db.exec(query);

    const data = results[0]
      ? results[0].values.map((result) => {
          const product = {};
          results[0].columns.forEach((column, index) => {
            product[column] = result[index];
          });
          return product;
        })
      : [];

    response.json(data);
  });

  router.get('/:id', (request, response) => {
    const id = request.params.id;
    const stmt = db.prepare('SELECT * FROM products WHERE id = :id');
    const results = stmt.getAsObject({ ':id': id });
    stmt.free();
    response.json(results);
  });

  return router;
}
