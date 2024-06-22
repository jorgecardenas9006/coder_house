alert(`
    *********************************
    *                           
    *  Aplicacion de productos  
    *                           
    *********************************

    Por favor digite su usuario y contraseña

    -------------------------------------------
    Nota:
    - El usuario no debe tener espacios o caracteres especiales
    - La contraseña debe tener al menos 8 caracteres y contener al menos un número
    -------------------------------------------
`);
const app = new usersView();
app.loginUser();


