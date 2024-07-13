class LoginView{
    constructor(){
        this.controller = new LoginController;
    }
    validatePassword(password){
        const login_pass = document.getElementById('login-pass');
        let pass = this.controller.validatePassword(password);
        if(!pass){
            let loginError = document.createElement('div');
            loginError.classList.add('alert', 'alert-danger');
            loginError.id = 'login-alert';
            loginError.innerHTML = `La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial`;
            login_pass.appendChild(loginError);
            this.blockButtonSend();
            return 0;
        }
        let loginSuccess = document.createElement('div')
        loginSuccess.classList.add('alert', 'alert-success');
        loginSuccess.id = 'login-alert';
        loginSuccess.innerHTML = `Contraseña correcta`;
        login_pass.appendChild(loginSuccess);
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