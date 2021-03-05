import React from 'react'
import './style.css'
import Powered from '../../images/Powered.svg'
import Registros from '../../images/Registros.svg'
import ContraPartida from '../../images/ContraPartida.svg'
import CatalogoContable from '../../images/CatalogoContable.svg'
import Documentos from '../../images/Documentos.svg'
import Clientes from '../../images/Clientes.svg'
import Proveedores from '../../images/Proveedores.svg'
import Moneda from '../../images/Moneda.svg'
import EstadosFinancieros from '../../images/EstadosFinancieros.svg'
import { Link } from 'react-router-dom'

const MainMenuPage = () => {
    return (
        <>
            <div className="Menu">
                <div className="Elemento-Menu">
                    <Link to="/voucher">
                        <img className="Icono-Menu" src={Registros} alt="not found to show" />
                        <p>Registros</p>
                    </Link>
                </div>
                <div className="Elemento-Menu">
                    <Link to="/counterpart">
                        <img className="Icono-Menu" src={ContraPartida} alt="not found to show" />
                        <p>Contra Partida</p>
                    </Link>
                </div>
                <div className="Elemento-Menu">
                    <Link to="/accountingcatalog">
                        <img className="Icono-Menu" src={CatalogoContable} alt="not found to show" />
                        <p>Catalogo Contable</p>
                    </Link>
                </div>
                <div className="Elemento-Menu">
                    <Link to="/document">
                        <img className="Icono-Menu" src={Documentos} alt="not found to show" />
                        <p>Documentos</p>
                    </Link>
                </div>
            </div>
            <div className="Menu">
                <div className="Elemento-Menu">
                    <Link to="/client">
                        <img className="Icono-Menu" src={Clientes} alt="not found to show" />
                        <p>Clientes</p>
                    </Link>
                </div>
                <div className="Elemento-Menu">
                    <Link to="/provider">
                        <img className="Icono-Menu" src={Proveedores} alt="not found to show" />
                        <p>Proveedores</p>
                    </Link>
                </div>
                <div className="Elemento-Menu">
                    <Link to="/coin">
                        <img className="Icono-Menu" src={Moneda} alt="not found to show" />
                        <p>Moneda</p>
                    </Link>
                </div>
                <div className="Elemento-Menu">
                    <Link to="/state">
                        <img className="Icono-Menu" src={EstadosFinancieros} alt="not found to show" />
                        <p>Estados Financieros</p>
                    </Link>
                </div>
            </div>
            <div className="powered">
                <img src={Powered} alt="imagen de fondo" />
            </div>
        </>
    )
}

export default MainMenuPage