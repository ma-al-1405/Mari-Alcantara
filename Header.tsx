import React from 'react'
import { NavLink,Link } from 'react-router-dom'
//Aplicacion de Reforzamiento
//Se crea la carpeta Src donde contiene la carpeta common y el archivo Header.tsx
//Se hace el Header y se hacer el llamando de cada navegacion de las cartas usando NavLink de acuerdo con Router
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className='navbar-brand text-success' to = {'/'} >Reforzamiento</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                        <NavLink to = {'/'} className={ ({ isActive }) => `nav-link text-danger ${ isActive ? 'active' :''}` } >
                            Home
                        </NavLink>
                        <NavLink to = {'/typescript'} className={ ({ isActive }) => `nav-link text-danger ${ isActive ? 'active' :''}` } >
                            TypeScript
                        </NavLink>
                        <NavLink to = {'/hooks'} className={ ({ isActive }) => `nav-link text-danger ${ isActive ? 'active' :''}` } >
                            Hooks
                        </NavLink>
                        <NavLink to = {'/default'} className={ ({ isActive }) => `nav-link text-danger ${ isActive ? 'active' :''}` } >
                            Default
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header