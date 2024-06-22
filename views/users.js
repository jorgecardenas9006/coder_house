class usersView {
  constructor() {
    this.controller = new UsersController();
  }
  loginUser() {
    const user = prompt('Ingrese su usuario');
    const password = prompt('Ingrese su contraseña');
    if (!this.controller.validateUser(user, password)){
      alert('Usuario no valido');
    }
    alert('Usuario valido');
    return 0;
  }
}