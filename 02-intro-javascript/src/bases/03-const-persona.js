

const persona = {
    nombre: 'Carlos',
    apellido: 'Torres',
    edad: 45,
    direccion: {
        ciudad: 'California',
        zip: 4254225,
        lat: 14.4556,
        lng: 24.5524,
    }
};

console.log( persona );

// obtener clone de persona
const persona2 = { ...persona };
persona2.nombre = 'Rodrigo';

console.log( persona2 )

