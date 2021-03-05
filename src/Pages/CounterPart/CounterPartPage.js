import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { BsCircleFill } from "react-icons/bs";
import './style.css'

const CounterPartPage = () =>{
    return(
        <>
            <Navbar/>
            <div className="pantalla">
                <div className="div-table">
                    <form className="formulario">
                        <label className="label" htmlFor="Monto">Nombre</label>
                        <input className="input" name="Nombre" type ="text"/>
                        <label className="label" htmlFor="Monto">Moneda</label>
                        <input className="input" name="Moneda" type ="text"/>
                        <label className="label" htmlFor="Monto">Monto</label>
                        <input className="input" name="Monto" type ="text"/>
                        <button className="button">Ingresar Registro</button>
                    </form>
                </div>
                <div className="div-table">
                    Catalogo Contable
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

export default CounterPartPage