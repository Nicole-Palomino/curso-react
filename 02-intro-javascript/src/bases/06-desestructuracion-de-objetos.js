
// desestructuracion de objetos

const persona = {
    nombre: 'Pepe',
    edad: 30,
    clave: 'pepe12345'
};

// const { nombre, edad, clave } = persona;


// console.log( nombre )
// console.log( edad )
// console.log( clave )

const retornaPersona = ({ nombre, clave, edad, rango = 'capitán' }) => {

    // console.log( nombre, edad, rango )

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 13.343,
            lng: -12.933
        }
    }


}


const { nombreClave, anios, latlng:{ lat, lng } } = retornaPersona( persona )


console.log(nombreClave, anios)
console.log(lat, lng)


