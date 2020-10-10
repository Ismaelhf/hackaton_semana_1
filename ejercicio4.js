// Ejercicio #4: Creando arrays
// - Crear un array llamado *meses* y que almacene el nombre de los doce
// meses del año
// - Mostrar por pantalla los doce nombres utilizando la función *alert()*

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'setiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function llamarMes() {
    for (const mes of meses) {
        console.log("Mes:", mes);
        // alert(mes);
    }
}

llamarMes();