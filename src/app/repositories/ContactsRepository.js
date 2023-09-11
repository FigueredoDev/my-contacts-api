const { v4: uuid } = require('uuid');
const db = require('../../database/connection');

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy === 'desc' ? 'DESC' : 'ASC';
    const contacts = db.query(`
      SELECT contacts.*, categories.name as category_name
      FROM contacts
      LEFT JOIN categories on categories.id = contacts.category_id
      ORDER BY contacts.name ${direction}
     `);
    return contacts;
  }

  async findById(id) {
    const [contact] = await db.query(`
    SELECT contacts.*, categories.name as category_name
    FROM contacts
    LEFT JOIN categories on categories.id = contacts.category_id
    WHERE contacts.id = $1
    ORDER BY contacts.name ASC
    `, [id]);

    return contact;
  }

  async findByEmail(email) {
    const [contact] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return contact;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
    INSERT INTO contacts (id, name, email, phone, category_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `, [uuid(), name, email, phone, category_id]);

    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $1
      RETURNING *
 `, [name, email, phone, category_id]);

    return row;
  }

  async delete(id) {
    const deleteOperation = await db.query('DELETE FROM contacts WHERE id = $1', [id]);
    return deleteOperation;
  }
}

module.exports = new ContactsRepository();
