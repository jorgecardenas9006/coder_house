class LoginView{
    constructor(){
        this.controller = new LoginController;
    }
    validatePassword(password){
        const login_pass = document.getElementById('login-pass');
        let pass = this.controller.validatePassword(password);
        let login = document.createElement('div')
        login.id = 'login-alert';
        if(!pass){
            login.classList.add('alert', 'alert-danger');
            login.innerHTML = `La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial`;
            login_pass.appendChild(login);
            this.blockButtonSend();
            return 0;
        }
        login.classList.add('alert', 'alert-success');
        login.innerHTML = `Contraseña correcta`;
        login_pass.appendChild(login);
        this.activeButtonSend();
    }
    deleteAlerts(){
        const alert = document.getElementById('login-alert');
        if(alert){
            alert.remove();
        }
    }
    blockButtonSend(){
        const loginButton = document.getElementById('login-send-button');
        loginButton.disabled = true;
    }
    activeButtonSend(){
        const loginButton = document.getElementById('login-send-button');
        loginButton.disabled = false;
    }
}