const knex = require("knex");
const db = knex(require("../knexfile").development);

module.exports = {
  add,
  getBy
};

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function getBy(filter) {
  return db("users").where(filter);
}
