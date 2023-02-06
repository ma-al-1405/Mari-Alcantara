import Tarjeta from './Tarjeta';
import useCharacter from './useCharacter';
///Importamos las funciones del archivo Tarjeta.tsx y useCharacter para importar en el MainHook y poder tener organizado
//los personajes de RickandMorty
const Personajes = () => {
    //Invoca al customhooks para recibir informacion de los personajes
    const {characters, next, before } = useCharacter();
    //si se llamo corretamente se deplega un arreglo de los personajes en consola del navegador
    console.log(characters);
    //Itere sobre la variable de “characters” para pintar la tarjeta de cada personaje.
    return (
        <>
        <div className='row bg-dark'>
            {
                characters.map(character => <div className='col-sm-3' key={character.id}>
                        <Tarjeta key={character.id} {...character} /> </div>
                    )
            }
        </div>
        {/* Agregamos los botones que usan las constantes del customhook */}
            <button className='btn btn-outline-primary text-dark text-center' onClick={() => next()}>Siguiente</button>
            <button className='btn btn-outline-danger text-dark m-2 text-center' onClick={() => before()}>Anterior</button>
        </>
    );
}

export default Personajes