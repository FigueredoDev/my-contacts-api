class ContactController {
  index(request, response) {
    response.send('Send from Contact Controller');
  }
}

module.exports = new ContactController();
