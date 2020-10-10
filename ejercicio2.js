// Ejercicio #2: Añadiendo elementos a un array
// - Añadir elementos a un array con Javascript push(Ciclo for)
// - Crear un array de elementos que contenga nombres y posteriormente
// agregar más elementos por medio del método “push”

let persona = ['ismael', 'calos'];

function agregarPersona(persona, nuevaPersona) {
    for (let index = 0; index < nuevaPersona.length; index++) {
        persona.push(nuevaPersona[index]);
    }
}
let persona2 = ['maria']
agregarPersona(persona, persona2);
console.log(persona);