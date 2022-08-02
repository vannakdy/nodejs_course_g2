const {validateToken} = require("../controller/auth.constroller")
const {
  getAll,
  getOne,
  create,
  update,
  remove
} = require('../controller/classroom.controller');
const classroom = (app) => {
  app.get('/api/classroom',validateToken, getAll);
  app.get('/api/classroom/:id',validateToken, getOne);
  app.post('/api/classroom',validateToken, create);
  app.put('/api/classroom',validateToken, update);
  app.delete('/api/classroom',validateToken, remove);
};

module.exports = classroom;
