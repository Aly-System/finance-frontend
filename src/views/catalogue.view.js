import React, { useState } from 'react'
import Button from 'components/button.component'
import Modal_catalogue from 'components/modal/modal-catalogue.component'
import Table_catalog from 'components/table/table-catalog.component'
import useAccounts from 'hooks/accounts/useAccounts.hook'

const Catalogue = () => {
    //hook que gestiona el estado del modal
    const [isModal, setModal] = useState(false)
    //destructuracion que permite pasar props del hook
    const tableProps = useAccounts()
    //funcion que permite actualizar los datos una vez enviado
    const updateAccountInTheInterface = ({ newAccount }) => {
        const { accounts, setAccounts } = tableProps

        const updateAccounts = [...accounts, newAccount]
        //actualizacion del estado
        setAccounts(updateAccounts)
    }

    return (
        <div className='screen__content__container'>
            <div className='grid__container__header'>
                <div className='container__header'>
                    <h2 className='title__header'>Catalogo contable</h2>

                    <Button
                        variant='filled'
                        onClick={() => {
                            setModal(true)
                        }}>
                        + Agregar nueva cuenta
                    </Button>
                </div>
            </div>
            {/* implementacion de la tabla  */}
            <Table_catalog {...tableProps} />
            {/* implementacion del modal */}
            {isModal && (
                <Modal_catalogue
                    updateAccountInTheInterface={updateAccountInTheInterface}
                    closeModal={() => {
                        setModal(false)
                    }}
                />
            )}
        </div>
    )
}
export default React.memo(Catalogue)
