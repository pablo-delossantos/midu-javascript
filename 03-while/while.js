function verificarClave() {
    const correctPasword = "Marcialhdp"
    const claveIngresada = document.getElementById('password').value;


    while(claveIngresada != correctPasword) {
        alert("Contraseña incorrecta. Intente nuevamente");
        document.getElementById("password").value = ""; //limpia la entrada

        return;
    }

    alert("Contraseña correcta. Paga las expensas");

}