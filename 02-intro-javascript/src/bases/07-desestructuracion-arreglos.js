const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log( personajes[0] )

const [ , , p3 ] = personajes;
console.log( p3 )


const retornaArreglo = () => {
    return ['ABC', 123]
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros)


// tarea
const user = ( valor ) => {
    return [ valor, ()=>{console.log('Hola mundo')}];
}

const [ nombre, setNombre ] = user( 'Goku' );
console.log( nombre )

setNombre();


