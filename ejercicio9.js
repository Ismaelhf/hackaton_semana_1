// ● Ejercicio #9:
// - Teniendo una lista de números enteros, sumar todos los números pares e
// impares en dicha lista y mostrarlo en variables separadas.

let listaNumeros = [1,2,3,4,5,6,7,8,9];
function paresImpares(){
    let pares =0;
    let impares =0;
    for (let i = 0; i < listaNumeros.length; i++) {
        const element = listaNumeros[i];
        if (element % 2 == 0) {
            pares= pares+element;
        }else{
            impares= impares+element;
        }
    }
    
    console.log("suma de pares:",pares);
    console.log("suma de impares:",impares);

}
paresImpares();