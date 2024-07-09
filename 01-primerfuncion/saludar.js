function obtenerNumeroRandom(){
    const random = Math.random() //numero aleatorio
    const multiplicar = random * 10 //multiplica
    const redondear = Math.floor(multiplicar) //Redondea para abajo
    const resultado = redondear + 1 //suma 1 para que muestre entre 1 y 10
    return resultado
}


function diezRandom() {
    for (let i = 0; i < 10; i++) {
    let numeroRandom = obtenerNumeroRandom();
    console.log(numeroRandom);
    return numeroRandom
    }
}

alert(diezRandom())