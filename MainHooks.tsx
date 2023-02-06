import React from 'react'
import Contador from './Contador'
import ContadorConCustomHook from './ContadorConCustomHook'
import Personajes from './Personajes'
//Aplicacion de Reforzamiento
//Se crea la carpeta Src donde contiene la carpeta hooks y el arhivo MainHooks.tsx
//Importamos las funciones de cada archivos de la carpeta hooks
const MainHooks = () => {
    return (
        <>
            <h1>Welcome to Hook</h1>
            <hr />
            <Contador />
            <ContadorConCustomHook />
            <Personajes />
        </>
    )
}

export default MainHooks