import React from 'react'
import Logo from '../../images/Logo.svg'
import Powered from '../../images/Powered.svg'
import './style.css'
import { Link } from 'react-router-dom'

const CountryPage = () => {
    return (
        <>

            <div className="container">
                <img src={Logo} alt="imagen de fondo" className="Logo" />
                <p className="title">Seleccione donde va trabajar</p>
                <div>
                    <label className="label">Empresa</label>
                    <div className="inputGroup">
                        <select className="input" name="select">
                            <option value="value1" selected>Aly Pay</option>
                            <option value="value2">Speed Trading</option>
                            <option value="value3">Aly Silv</option>
                        </select>
                    </div>
                    <label className="label">Pais</label>
                    <div className="inputGroup">
                        <select className="input" name="select">
                            <option value="value1" selected>Nicaragua</option>
                            <option value="value2">Costa Rica</option>
                            <option value="value3">Cuba</option>
                            <option value="value3">Estados Unidos</option>
                        </select>
                    </div>
                    <Link to="/Main" className="button">
                        Continuar
                    </Link>
                </div>
            </div>
            <div className="powered">
                <img src={Powered} alt="imagen de fondo" />
            </div>
        </>
    )
}

export default CountryPage