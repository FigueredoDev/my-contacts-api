const { v4: uuid } = require('uuid');

const contacts = [
  {
    id: uuid(),
    name: 'John Doe',
    email: 'john@example.com',
    phone: '555-555-5555',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return Promise.resolve(contacts);
  }
}

module.exports = new ContactsRepository();
