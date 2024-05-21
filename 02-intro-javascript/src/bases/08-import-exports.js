
import heroes from "../data/heroes";
// import heroes, { owners } from "../data/heroes"



// const getHeroeById = (id) => {
//     return heroes.find((element) => {
//         if ( element.id === id ){
//             return true;
//         } else {
//             return false;
//         }
//     });
// }


export const getHeroeById = (id) => heroes.find( (element) => element.id === id );


// console.log( getHeroeById(1) );


export const getHeroesByOwner = ( owner ) => heroes.filter( (hero) => hero.owner === owner );

// console.log( getHeroesByOwner('Marvel') );

