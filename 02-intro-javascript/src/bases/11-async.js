// const getImagenPromesa = () => new Promise ( (resolve, reject) => resolve('') );

const getImagen = async() => {

    try {
        const apiKey = '5A5z74t8KxUExryeAHHgk7jlSYzLUijF'
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    
        const {data} = await respuesta.json()
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append( img )
    } catch (error) {
        console.error(error)
    }

}

getImagen()






// peticion
//     .then( resp => resp.json() )
//     .then( ({data}) => {
//         const { url } = data.images.original;
        
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img )
//     })
//     .catch( console.warn )