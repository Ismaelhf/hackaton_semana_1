// Ejercicio #0: Dada una lista de números, añade una función que permita devolver el menor de los valores de una la lista
let listNumber = [1, 2, 3, 4, 5, 6];
let min = Math.min(listNumber);

const minNumber_1 = (array) => {
    return console.log("ejemplo 1:", Math.min.apply(null, array));
}
const minNumber_2 = (array) => {
    return console.log("ejemplo 2:", Math.min(...array));
}

minNumber_1(listNumber);
minNumber_2(listNumber);


// Ejercicio #1: Información Factura
console.log("------------------------- EJERCICIO 01-----------------------------------------------");

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

function factura(empresa, cliente, listItems, total) {
    this.empresa = empresa;
    this.cliente = cliente;
    this.listItems = listItems;
    this.total = total;
    // this.importeTotal = importeTotal(listItems)

}

function importeTotal(listItems) {
    let total;
    // var arr = JSON.parse(listItems);
    total = listItems.reduce((total, totalxItem) => (total + totalxItem.total));
    return total;
}

let plazaVea = new empresa('plaza vea', 'surco', '124578', 'NA');
let ismael = new cliente('Ismael Huamani Franco', 'VES', '555555');
let item1 = new item('manzana', 1, 5);
let item2 = new item('arroz', 5, 3);



let listItems = [];
// let factura = [];
listItems.push(item1, item2);
let total1 = new importeTotal(listItems);
console.log(listItems);

// crea factura con los otros objetos
let factura1 = new factura(plazaVea, ismael, listItems, total1);

console.log("---------------------------------------------------")
    // FALTA TERMINAR
    // console.log(factura);
    // console.log(factura1);
    // console.log(listItems);