const db = require("../database/dbConfig");
const Users = require("../jokes/jokes-model");

beforeEach(async () => {
  await db("users").truncate();
});

describe("Users Model", () => {
  describe("insert()", () => {
    it("inserts the users without breaking them", async () => {
      const users = await Users.insert({
        username: "Ikpo",
        password: "relay"
      });
      expect(users).toMatchObject({ username: "Ikpo", password: "relay" });
    });
  });
});
