import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './style.css'

const AccountingAccountPage = ({ list, error, useEffect, onChange, handleSubmit }) => {

    return (
        <>
            <Navbar />
            <div className="pantalla">

                <div className="div-table">
                    <form onSubmit={handleSubmit} className="formulario">
                        <label className="label" for="Account">Nombre</label>
                        <input className="input" name="Account" type="text" onChange={onChange} />
                        <label className="label" for="Notes">Notas</label>
                        <input className="input" name="Notes" type="text" onChange={onChange} />

                        <label className="label" for="FatherAccountId">Cuenta Superior</label>
                        <select className="input" name="FatherAccountId" onChange={onChange}>
                            {
                                list.map((item, index) => {
                                    console.log(item)
                                    return (
                                        <option value={item.account}>
                                            {item.account.slice(0, 4) + "." + item.account.slice(4, 8) + "." + item.account.slice(8, 12)} , {item.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <button className="button">Ingresar Cuenta Contable</button>
                    </form>
                </div>
                <div className="div-table">
                    Catalogo Contable
                    <br />
                    <table className="table">
                        <thead className="cabecera">
                            <tr>
                                <th>Cuenta</th>
                                <th>Rubro</th>
                                <th>Descripcion</th>
                                <th>Nivel</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                list.map((item, index) => {
                                    console.log(item)
                                    return (
                                        <tr key={index}>
                                            <td >
                                                {item.account.slice(0, 4) + "." + item.account.slice(4, 8) + "." + item.account.slice(8, 12)}
                                            </td>
                                            <td>
                                                {item.heading}
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.level}
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

export default AccountingAccountPage