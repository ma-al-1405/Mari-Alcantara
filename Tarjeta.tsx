import React from 'react'
import { ICharacter } from '../interfaces/IReqRestApiCharacters';
//importamos donde se encuentras las funcione de las interfacees de la carpeta con el archivo IReqRestApiCharacters
//Recibira un personaje de tipo ICharacter
const Tarjeta = (character: ICharacter) => {
//si hay respuestas de los personajes en consola del navegador
    console.log(character);

    //agregamos el nombre y la imagen de los personajes con un espaciado entre cada uno con algunos estilos
    return (
        <div className='card m-2 rounded-4 bg-dark border border-5 border-success' style={{ width: '19rem' }} >
            <img src={character.image} className='card-img-top rounded-circle' alt={character.name} />
                <div className='card-body border-success'>
                    <p className='card-text text-center text-white border border-2 border-white'>
                        {character.name}
                    </p>
                </div>
        </div>
    );
}

export default Tarjeta