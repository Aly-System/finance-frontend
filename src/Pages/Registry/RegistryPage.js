import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { BsCircleFill } from "react-icons/bs";
import './style.css'


const RegistryPage = () => {
    return (
        <>
            <Navbar />
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
                <div className="div-table">
                    Registros
                    <br />
                    <table className="table">
                        <thead className="cabecera">
                            <tr>
                                <th>Nombre</th>
                                <th>Moneda</th>
                                <th>Monto</th>
                                <th>Estado</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="fila">
                                <td>Roy Roger</td>
                                <td>Btc</td>
                                <td>175</td>
                                <td><BsCircleFill className="estado" /></td>
                                <td>Editar,Eliminar</td>
                            </tr>
                            <tr className="fila">
                                <td>Orlando Baltodano</td>
                                <td>Btc</td>
                                <td>175</td>
                                <td><BsCircleFill className="estado" /></td>
                                <td>Editar,Eliminar</td>
                            </tr>
                            <tr className="fila">
                                <td>Carlango</td>
                                <td>Btc</td>
                                <td>175</td>
                                <td><BsCircleFill className="estado" /></td>
                                <td>Editar,Eliminar</td>
                            </tr>
                            <tr className="fila">
                                <td>Jarold Gi</td>
                                <td>Btc</td>
                                <td>175</td>
                                <td><BsCircleFill className="estado" /></td>
                                <td>Editar,Eliminar</td>
                            </tr>
                            <tr className="fila">
                                <td>Rayito</td>
                                <td>Btc</td>
                                <td>175</td>
                                <td><BsCircleFill className="estado" /></td>
                                <td>Editar,Eliminar</td>
                            </tr>
                            <tr className="fila">
                                <td>Monaka</td>
                                <td>Btc</td>
                                <td>175</td>
                                <td><BsCircleFill className="estado" /></td>
                                <td>Editar,Eliminar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default RegistryPage