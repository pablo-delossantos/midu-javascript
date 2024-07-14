// Hacer una función que pida género: masculino o femenino
// Edad. Si es masculino y mayor de 18: puede pedir falopa. Sino, no
// Si es femenino y mayor de 22, puede tomar extasis.
function pedirFalopa() {

    const genero = document.getElementById("genero").value;
    const edad = document.getElementById("edad").value;

    if (genero === "masculino" && edad >= 18) {
        window.alert("Puede pedir falopa")
    } else if (genero === "femenino" && edad >= 22) {
        window.alert("Puede pedir éxtasis")
    } else {
        window.alert("Puede irse a mimir viendo Netflix")
    }
    return
}