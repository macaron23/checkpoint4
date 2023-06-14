const AbstractManager = require("./AbstractManager");

class AssetsManager extends AbstractManager {
  constructor() {
    super({ table: "assets" });
  }

  insert(assets) {
    return this.database.query(
      `INSERT INTO ${this.table} (name, number, worth) VALUES (?, ?, ?)`,
      [assets.name, assets.number, assets.worth]
    );
  }

  update(assets) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ?, number = ?, worth = ? WHERE id = ?`,
      [assets.name, assets.number, assets.worth, assets.id]
    );
  }

  delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = AssetsManager;
