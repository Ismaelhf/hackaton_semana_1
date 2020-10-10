// Ejercicio #7: Índice de masa corporal
// - Realizar un programa que nos permita calcular el índice de masa corporal
// de una persona por medio de su peso y altura solicitados

function masaCorporal(peso, altura) {
    this.peso = peso;
    this.altura = altura;
    this.calculo = this.peso / this.altura;
}

let ismael = new masaCorporal(76, 172);

console.log(ismael.calculo);