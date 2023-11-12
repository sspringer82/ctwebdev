import { Router } from 'express';

export function createProductsRouter(db) {
  const router = Router();

  router.get('/', (request, response) => {
    const results = db.exec('SELECT * FROM products');
    response.json(results[0] ? results[0].values : []);
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
