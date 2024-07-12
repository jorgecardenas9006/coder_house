class LoginController {
    constructor() {
        this.regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-/])[a-zA-Z\d!@#$%^&*-/]{1,15}$/

    }
    validatePassword(password) {
        return this.regex.test(password);
    }
}