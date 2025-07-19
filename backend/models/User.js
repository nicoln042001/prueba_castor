// Modelo User

/*
- id: string (UUID)
- name: string
- email: string (único)
- password: string (hasheado)
- createdAt: date
- updatedAt: date
*/

const { v4: uuidv4 } = require('uuid');

class User {
  constructor({ id = uuidv4(), name, email, password, createdAt = new Date(), updatedAt = new Date() }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = User; 