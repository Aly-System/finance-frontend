import React from 'react'
import Logo from '../../images/Logo.svg'
import Powered from '../../images/Powered.svg'
import PasswordInput from '../../Components/PasswordInput/PasswordInput'
import './style.css'
import { Link } from 'react-router-dom'


const LoginPage = ({ handleSubmit, onChange, state }) => {
    return (
        <>
            <div className="container">
                <img src={Logo} alt="imagen de fondo" className="Logo" />
                <p className="title">Bienvenido</p>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="inputGroup">
                        <label htmlFor="email" className="label">Correo electrónico:</label><br />
                        <input
                            id="Email"
                            className="input"
                            type="text"
                            name="Email"
                            placeholder="Email"
                            onChange={onChange}
                            value={state.Email}
                        />
                    </div>
                    <PasswordInput
                        onChange={onChange}
                        Password={state.Password}
                    />
                    <button type="submit" className="button">
                        Iniciar sesión
                    </button>
                </form>
                <Link to="#" className="tecnicalSupport">Soporte Tecnico</Link>
            </div>
            <div className="powered">
                <img src={Powered} alt="imagen de fondo" />
            </div>
        </>
    )
}

export default LoginPage