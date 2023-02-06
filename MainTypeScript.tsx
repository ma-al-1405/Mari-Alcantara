import React from 'react'
import EverydayTypes from './EverydayTypes'
import FuncionSuma from './FuncionSuma'
//importamos las funciones de los achivos de EverydayTypes y la FucionSuma para deplegarlas en el Header con el nombre de la carpeta
const MainTypeScript = () => {
    return (
        <div>
            <h1>Welcome to TypeScript</h1>
            <hr />
            <EverydayTypes />
            <FuncionSuma />
            <br />
        </div>
    )
}

export default MainTypeScript