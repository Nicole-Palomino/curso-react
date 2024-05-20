
// funciones en js

// const saludar = function ( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;



// console.log( saludar('Pedro') )

console.log( saludar2('Paula') )

console.log( saludar3('Emilia') )


const getUser = () => ({
        uid: '12345',
        username: 'SoyYess'
})


console.log( getUser() )


// Tarea 
// 1. transformar a funcion de flecha
// 2. tiene que retornar un objeto
// 3. pruebas
const getUsuarioActive = ( nombre ) => ({
        uid: 'ABCD',
        username: nombre
})

const usuarioActivo = getUsuarioActive('Pocoyo');
console.log( usuarioActivo )


