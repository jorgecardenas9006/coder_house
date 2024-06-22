
class UsersController {
  constructor() {
    this.model = new usersModel();
  }
  validateUser(user, password) {
    let users = this.model.getAllUsers();
    for (let i = 0; i < users.length; i++) {
      if (users[i].user === user && users[i].password === password) {
        return true;
      }
    }
    return false;
  }
}