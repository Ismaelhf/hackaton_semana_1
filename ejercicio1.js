// Ejercicio #0: Dada una lista de números, añade una función que permita devolver el menor de los valores de una la lista
let listNumber = [1, 2, 3, 4, 5, 6];
let min = Math.min(listNumber);

const minNumber_1 = (array) => {
    return console.log("ejemplo 1:", Math.min.apply(null, array));
}
const minNumber_2 = (array) => {
    return console.log("ejemplo 2:", Math.min(...array));
}

// minNumber_1(listNumber);
// minNumber_2(listNumber);


// Ejercicio #1: Información Factura
console.log("------------------------- EJERCICIO 01-----------------------------------------------");

// Ejercicio #1: Información Factura
// - Definir la estructura de un objeto que almacena una factura
// - Las facturas están formadas por la información de la propia empresa
// (nombre de la empresa, dirección, teléfono, NIF), la información del cliente
// (similar a la de la empresa), una lista de elementos (cada uno de los cuales
// dispone de descripción, precio, cantidad) y otra información básica de la
// factura (importe total, tipo de IVA, forma de pago)
// - Una vez definidas las propiedades del objeto, añadir un método que
// calcule el importe total de la factura y actualice el valor de la propiedad
// correspondiente. Por último, añadir otro método que muestre por pantalla
// el importe total de la factura

function empresa(nombre, direccion, telefono, NIF) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.NIF = NIF;
}

function cliente(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
}

function item(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.total = precio * cantidad;
}

function factura(empresa, cliente, listItems) {
    this.empresa = empresa;
    this.cliente = cliente;
    this.listItems = listItems;
    this.subTotal = importeTotal(this.listItems);
    this.total = importeTotal(this.listItems)*1.18;
    this.IGV = importeTotal(this.listItems)*0.18;

}

function importeTotal(listItems) {
    let total=0;
    for (let i = 0; i < listItems.length; i++) {
        let subtotal = listItems[i].total;
        total = total+subtotal;
    }
    return total;
}

let plazaVea = new empresa('plaza vea', 'surco', '124578', 'NA');
let ismael = new cliente('Ismael Huamani Franco', 'VES', '555555');
let item1 = new item('manzana', 1, 5);
let item2 = new item('arroz', 5, 4);

let listItems = [];
listItems.push(item1, item2);
console.log(listItems);
let factura1 = new factura(plazaVea, ismael, listItems);
console.log("---------------------------------------------------")
console.log(factura1);
