// Ejercicio #6: Identificar llamada
// - Un teléfono celular cuenta con una funcionalidad de identificación de
// llamadas permitiendo no solo ver qué número nos intenta contactar sino
// también conocer qué contacto dado de alta en nuestro dispositivo, nos
// llama

let contactos = [{
        nombre: 'ismael',
        numero: 987654321,
    },
    {
        nombre: 'sara',
        numero: 123456789,
    }
];

let llamada = {
    numero: 987654321,
};

function identificarLlamada(llamada, contactos) {
    let reconocida = 0;
    for (let i = 0; i < contactos.length; i++) {

        if (llamada.numero == contactos[i].numero) {
            return console.log('llamada de', contactos[i].nombre);

        } else {
            return console.log('llamda desconocida', llamada.numero);
        }
    }
}
// console.log(llamada.numero);
// console.log(contactos[0].numero);
identificarLlamada(llamada, contactos);
llamada.numero = 15874698;
identificarLlamada(llamada, contactos);