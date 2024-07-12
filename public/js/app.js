window.addEventListener('load', ()=> {
  let menu = new MenuView();
  menu.showMenu();
});
const login_pass = document.getElementById('floatingPassword');
login_pass.addEventListener('change', () => {
  let login = new LoginView();
  login.deleteAlerts();
  login.validatePassword(login_pass.value);
});