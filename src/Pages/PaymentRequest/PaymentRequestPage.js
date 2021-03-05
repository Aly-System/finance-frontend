import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const PaymentRequestPage = ({onChange,list,handleSubmit}) => {
    return (
        <>
            <Navbar />
            <div className="pantalla">
                <div className="div-table">
                    <form onSubmit={handleSubmit} className="formulario">
                        <label className="label" for="FatherAccount">Concepto</label>
                        <input className="input" name="FatherAccount" type="text" onChange={onChange} />
                        <label className="label" for="Id">Ruc</label>
                        <input className="input" name="Id" type="text" onChange={onChange} />
                        <label className="label" for="Name">Cantidad</label>
                        <input className="input" name="Name" type="text" onChange={onChange} />
                        <button className="button">Ingresar pago</button>
                    </form>
                </div>
                <div className="div-table">
                    historial de pagos
                <br />
                    <table className="table">
                        <thead className="cabecera">
                            <tr>
                                <th>Fecha</th>
                                <th>Concepto</th>
                                <th>Estado</th>
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
                                                Realizado
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

export default PaymentRequestPage