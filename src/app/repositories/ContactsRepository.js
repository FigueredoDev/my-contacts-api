const { v4: uuid } = require('uuid');

let contacts = [
  {
    id: uuid(),
    name: 'John Doe',
    email: 'john@example.com',
    phone: '555-555-5555',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '111-222-5555',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return Promise.resolve(contacts);
  }

  findById(id) {
    const contact = contacts.find((item) => item.id === id);
    return Promise.resolve(contact);
  }

  findByEmail(email) {
    const contact = contacts.find((item) => item.email === email);
    return Promise.resolve(contact);
  }

  create({
    name, email, phone, category_id,
  }) {
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
      category_id,
    };

    contacts.push(newContact);
    return Promise.resolve(newContact);
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
