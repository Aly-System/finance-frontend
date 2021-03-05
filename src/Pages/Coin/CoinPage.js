import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const CoinPage = ({list}) =>{

    return(
        <>
            <Navbar/>
            <div className="pantalla">
                <div className="div-table">
                    Registros
                    <br />
                    <table className="table">
                        <thead className="cabecera">
                            <tr>
                                <th>Siglas</th>
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

export default CoinPage