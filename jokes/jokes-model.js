const knex = require("knex");
const db = knex(require("../knexfile").development);

module.exports = {
  insert,
  getBy
};

async function insert(users) {
  const [id] = await db("users").insert(users);
  return db("users")
    .where({ id })
    .first();
}

function getBy(filter) {
  return db("users").where(filter);
}
