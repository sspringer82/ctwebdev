import { Router } from 'express';

export function createProductsRouter(db) {
  const router = Router();

  router.get('/', (request, response) => {
    const results = db.exec(
      'SELECT id, name, description, price, size, weight, image FROM products'
    );

    const data = results[0].values.map((result) => {
      const product = {};
      results[0].columns.forEach((column, index) => {
        product[column] = result[index];
      });
      return product;
    });

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
