import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const ClientPage = ({ list,onChange,handleSubmit }) => {
    return (
        <>
            <Navbar />
            <div className="pantalla">
                <div className="div-table">
                    <form onSubmit={handleSubmit} className="formulario">
                        <label className="label" for="FatherAccount">Cuenta Contable</label>
                        <input className="input" name="FatherAccount" type="text" onChange={onChange}/>
                        <label className="label" for="Id">Cedula</label>
                        <input className="input" name="Id" type="text" onChange={onChange}/>
                        <label className="label" for="Name">Nombre</label>
                        <input className="input" name="Name" type="text" onChange={onChange}/>
                        <button className="button">Ingresar Cliente</button>
                    </form>
                </div>
                <div className="div-table">
                    Clientes
                    <br />
                    <table className="table">
                        <thead className="cabecera">
                            <tr>
                                <th>Cedula</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                list.map((item, index) => {
                                    console.log(item)
                                    return (
                                        <tr key={index}>
                                            <td >
                                                {item.id}
                                            </td>
                                            <td>
                                                {item.name}
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

export default ClientPage