// Ejercicio #3: Valor futuro de una inversión
// - Realice un programa para calcular el valor futuro de una inversión; la
// fórmula para obtener este valor es la siguiente:
// valor_futuro =valor*Math.pow (1+tasa/100,periodo)


function valorFuturo(valor, tasa, periodo) {
    this.valor = valor;
    this.tasa = tasa;
    this.periodo = periodo;
    this.valorF = this.valor * Math.pow(1 + this.tasa / 100, this.periodo);
    // return valorFut;
}

let valorFuturo1 = new valorFuturo(100, 1, 2);
console.log('El valor futuro es:', valorFuturo1.valorF);