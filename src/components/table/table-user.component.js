import React, { useState } from 'react'
import TableCell from 'components/table/table-cell.component'
import useAccounts from 'hooks/accounts/useAccounts.hook'
import Button from 'components/button.component'
import { randomKey } from 'utils'
import ModalEditarUsuario from 'components/modal/modal-edit-user.component'

export default function Table_user({
    tableTitleKey = randomKey(),
    tableContentKey = randomKey(),
}) {
    const { filteredAccount } = useAccounts()
    const [isModal, setModal] = useState(false)

    return (
        <main className='container__table'>
            {/* Titulos de la tabla */}
            <section
                key={tableTitleKey}
                className='container__of__catalog__table__titles'>
                <TableCell label={'Correo electronico'}></TableCell>
            </section>

            {/* Lista de contenido de la tabla */}
            <section className='container__for__catalog__table__rows'>
                {Array.isArray(filteredAccount) &&
                    filteredAccount.map((_accounts, index) => (
                        <section
                            key={`${tableContentKey}${index}`}
                            className='table__of__accounts__row__catalog'>
                            <TableCell value={index + 1}></TableCell>
                            <TableCell value={_accounts.account}></TableCell>
                            <TableCell value={_accounts.name}></TableCell>

                            <TableCell
                                value={
                                    _accounts.fatherAccount?.name || 'N/D'
                                }></TableCell>

                            <TableCell
                                align={'center'}
                                value={_accounts.heading}></TableCell>
                            <Button
                                color={'#226f54'}
                                variant='link'
                                width={'150px'}
                                onClick={() => {
                                    setModal(true)
                                }}>
                                Editar
                            </Button>
                        </section>
                    ))}
            </section>
            {isModal && (
                <ModalEditarUsuario
                    closeModal={() => {
                        setModal(false)
                    }}
                />
            )}
        </main>
    )
}
