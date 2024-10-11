const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Card } = require("./Card");
const { Attack } = require("./Attack");
const { db } = require("../db/config");

// define in global scope
let card;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true });
  card = await Card.create({
    name: "gandalf-card",
    mojo: 20,
    stamina: 8,
    imgUrl: "https://picsum.photos/200",
  });
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe("Card", () => {
  it("has an id set correctly", async () => {
    expect(card).toHaveProperty("id");
  });
  it("has an name set correctly", async () => {
    expect(card.name).toBe("gandalf-card");
  });
  it("has an mojo set correctly", async () => {
    expect(card.mojo).toBe(20);
  });
  it("has an stamina set correctly", async () => {
    expect(card.stamina).toBe(8);
  });
  it("has an imaeurl set correctly", async () => {
    expect(card.imgUrl).toBe("https://picsum.photos/200");
  }),
    it("has the correct types of data", async () => {
      expect(typeof card.id).toBe("number");
      expect(typeof card.name).toBe("string");
      expect(typeof card.mojo).toBe("number");
      expect(typeof card.stamina).toBe("number");
      expect(typeof card.imgUrl).toBe("string");
    });
}),
  // STRETCH - addd test - cards can be loaded with attacks many to many
  describe("Card - Stretch", () => {
    Card.belongsToMany(Attack, { through: "card-attack" });
    Attack.belongsToMany(Card, { through: "card-attack" });

    it("cards can be loaded with attacks", async () => {});
  });
