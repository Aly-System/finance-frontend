import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const ProviderPage = ({ list, onChange, handleSubmit }) => {
    return (
        <>
            <Navbar />
            <div className="pantalla">
                <div className="div-table">
                    <form onSubmit={handleSubmit} className="formulario">
                        <label className="label" for="FatherAccount">Cuenta Contable</label>
                        <input className="input" name="FatherAccount" type="text" onChange={onChange} />
                        <label className="label" for="Id">Ruc</label>
                        <input className="input" name="Id" type="text" onChange={onChange} />
                        <label className="label" for="Name">Nombre</label>
                        <input className="input" name="Name" type="text" onChange={onChange} />
                        <button className="button">Ingresar Proveedor</button>
                    </form>
                </div>
                <div className="div-table">
                    Proveedores
                    <br />
                    <table className="table">
                        <thead className="cabecera">
                            <tr>
                                <th>Cedula</th>
                                <th>Nombre</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                list.map((item, index) => {
                                    console.log(item)
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {item.id}
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                <Link to="/paymentrequest">Solicitud de pago</Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProviderPage