const { v4: uuid } = require('uuid');
const db = require('../../database/connection');

// let contacts = [
//   {
//     id: uuid(),
//     name: 'John Doe',
//     email: 'john@example.com',
//     phone: '555-555-5555',
//     category_id: uuid(),
//   },
//   {
//     id: uuid(),
//     name: 'Jane Doe',
//     email: 'jane@example.com',
//     phone: '111-222-5555',
//     category_id: uuid(),
//   },
// ];

class ContactsRepository {
  async findAll() {
    const contacts = db.query('SELECT * FROM contacts');
    return contacts;
  }

  findById(id) {
    const contact = contacts.find((item) => item.id === id);
    return Promise.resolve(contact);
  }

  findByEmail(email) {
    const contact = contacts.find((item) => item.email === email);
    return Promise.resolve(contact);
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

  update(id, {
    name, email, phone, category_id,
  }) {
    const updateContact = {
      id, name, email, phone, category_id,
    };

    contacts = contacts.map((contact) => (contact.id === id ? updateContact : contact));
    return Promise.resolve(updateContact);
  }

  delete(id) {
    contacts = contacts.filter((item) => item.id !== id);
    return Promise.resolve();
  }
}

module.exports = new ContactsRepository();
