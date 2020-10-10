// Ejercicio #5: Creando un objeto círculo
// - Realizar un programa que permita crear un molde para objetos de tipo
// círculo al que le pasamos el radio cuando lo inicialicemos, y que tenga una
// función que nos calcule su área, otra su longitud, y estos valores sean
// mostrados por pantalla

let circulo = {
    type: 'circulo',
    radio: 0,
    pi: 3.1415,
    area: function() {

        console.log(this.pi * Math.pow(this.radio, 2));
    },
    longitud: function() {
        console.log(2 * this.pi * this.radio);
    }

};

let circulo1 = Object.create(circulo);

circulo1.radio = 3;
circulo1.area();
circulo1.longitud();