import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './style.css'

const VoucherPage = () =>
{
    return(
        <>
            <Navbar/>
            <div className="pantalla">
                <div className="div-table">
                    <form className="formulario">
                        <label className="label" for="Reference">Referencia</label>
                        <input className="input" name="Reference" type ="text"/>
                        <label className="label" for="Condition">Estado</label>
                        <input className="input" name="Condition" type ="text"/>
                        <label className="label" for="Value">Cantidad</label>
                        <input className="input" name="Value" type ="text"/>
                        <label className="label" for="DolarValue">Valor Dolar</label>
                        <input className="input" name="DolarValue" type ="text"/>
                        <label className="label" for="Consecutive">Consecutivo</label>
                        <input className="input" name="Consecutive" type ="text"/>
                        <button className="button">Ingresar Registro</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default VoucherPage