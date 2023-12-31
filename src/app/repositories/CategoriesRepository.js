const { v4: uuid } = require('uuid');
const db = require('../../database/connection');

class CategoriesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories ORDER BY name');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM categories WHERE id = $1', [id]);
    return row;
  }

  async findByName(name) {
    const [row] = await db.query('SELECT * FROM categories WHERE name = $1', [name]);
    return row;
  }

  async create({ name }) {
    const [row] = await db.query(`
    INSERT INTO categories (id, name)
    VALUES (
      $1, $2
    )

    RETURNING *
    `, [uuid(), name]);

    return row;
  }

  async update(id, { name }) {
    const [row] = await db.query(`
    UPDATE categories
    SET name = $1
    WHERE id = $2
    RETURNING *
    `, [name, id]);

    return row;
  }

  async delete(id) {
    const deleteOperation = await db.query('DELETE FROM categories WHERE id = $1', [id]);
    return deleteOperation;
  }
}

module.exports = new CategoriesRepository();
