import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/Logo.svg'
import BackOffice from '../../images/BackOffice.svg'

const NavbarPage = ({ handleModal, handleSesion, show }) => {
    return (
        <>
            <nav>
                <div className="bloque izquierda">
                    <Link to="/Main">
                        <img src={Logo} alt="not found to show" className="logo" />
                    </Link>
                </div>
                <div className="bloque">                
                    <Link to="/">Pais: Managua Nicaragua | 14/01/2020 | 04:10 pm</Link>
                </div>
                <div className="bloque derecha">
                    {
                        show ? (
                            <div className="MiniModal" onClick={handleModal}>
                                <ul>
                                    <li><img className="Icono-Menu" src={BackOffice} alt="not found to show" />Back Office</li>
                                    <br />
                                    <li>Gestion de usuarios</li>
                                    <br />
                                    <Link to="/" onClick={handleSesion}>Cerrar Sesión</Link>
                                </ul>
                            </div>

                        ) : (
                                <div className="sesion" onClick={handleModal}>
                                    <img className="usuario" src={Logo} alt="not found to show" />
                                </div>
                            )
                    }
                </div>
            </nav>
        </>
    )
}

export default NavbarPage