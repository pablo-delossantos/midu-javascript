function verificarEdad() {
    const edadInput = document.getElementById('edadInput').value;
    const resultadoMensaje = document.getElementById('resultadoMensaje');
    
    if (edadInput === '') {
        resultadoMensaje.textContent = 'Por favor, ingrese su edad.';
    } else if (isNaN(edadInput)) {
        resultadoMensaje.textContent = 'Por favor, ingrese un número válido.';
    } else if (edadInput >= 18) {
        resultadoMensaje.textContent = 'Usted es mayor de 18 años.';
    } else {
        resultadoMensaje.textContent = 'Usted es menor de 18 años.';
    }
}