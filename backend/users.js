import { Router } from 'express';

export function createUsersRouter(db) {
  const router = Router();

  router.get('/:email', (request, response) => {
    const email = request.params.email;
    const stmt = db.prepare('SELECT * FROM users WHERE email = :email');
    const results = stmt.getAsObject({ ':email': email });
    stmt.free();
    response.json(results);
  });

  return router;
}
