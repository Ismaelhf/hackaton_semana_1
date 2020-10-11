// Ejercicio #8:
// - Teniendo una lista de objetos en distintos idiomas, idiomas usados.
// - Elabora un traductor e identificador de idioma con los datos dados, de
// manera sencilla.

let listaIdiomas = [{
    espanol: 'casa',
    ingles: 'home'
}]

function palabra(espanol, ingles, italiano){
    this.espanol =espanol;
    this.ingles=ingles;
    this.italiano = italiano;
}

let palabra1 = new palabra('hombre','man','uomo');
let palabra2 = new palabra('mujer','woman','donna');

let diccionario =[];
diccionario.push(palabra1,palabra2);
console.log(diccionario);
console.log("------------------------");
let a = [];
// a=Object.keys(diccionario[0]);
// console.log("a",a[0]);
// console.log(a.findIndex(palabra => palabra ==='man'));

function traductor(palabra,idiomaTraduccion, diccionario){
    for (let i = 0; i < diccionario.length; i++) {
        let palabras = [];
        let posicion;
        palabras=Object.values(diccionario[i]);
        posicion = palabras.findIndex(datos => datos === palabra)

        let idiomas = [];
        let posicionIdioma;
        idiomas=Object.keys(diccionario[i]);
        posicionIdioma = idiomas.findIndex(datos => datos === idiomaTraduccion)

        if (posicion != -1) {
            let idioma =[];                    
            idioma = Object.keys(diccionario[i]);
            return console.log(`el idioma es: ${idioma[posicion]} y su traduccion de ${idiomaTraduccion} es ${palabras[posicionIdioma]}`);
        }
    }
}

traductor('donna','espanol',diccionario);