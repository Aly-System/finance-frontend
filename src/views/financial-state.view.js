import React, { useState } from 'react'
import Button from 'components/button.component'
import ModalFinance from 'components/modal/modal.financial-state.component'
// import useGetBalance from 'hooks/financial-state/useBalanceGeneral.hook'
import TableBalance from 'components/table/table-balance.component'
import { MdAccountBalance } from 'react-icons/md'
import { MdAttachMoney } from 'react-icons/md'
import { MdEqualizer } from 'react-icons/md'
import { MdAssessment } from 'react-icons/md'
import { MdPictureAsPdf } from 'react-icons/md'
import { MdInsertDriveFile } from 'react-icons/md'

function Financial_state() {
    // const { balance } = useGetBalance()
    const [info, setInfo] = useState(false)

    const tableBalances = () => {
        info ? setInfo(false) : setInfo(true)
    }
    const tableCambio = () => {
        info ? setInfo(false) : setInfo(true)
        console.log(tableCambio)
    }
    const tableConciliacion = () => {
        info ? setInfo(false) : setInfo(true)
        console.log(tableConciliacion)
    }
    const tableEstado = () => {
        info ? setInfo(false) : setInfo(true)
        console.log(tableEstado)
    }

    const [isModal, setModal] = useState(false)
    return (
        <div className='screen__content__container'>
            <div className='grid__container__header'>
                <div className='container__header'>
                    <h2 className='title__header'>Estados Financieros</h2>
                    <div className='container__button'>
                        <div className='container__button_add'>
                            <Button
                                className='button'
                                color='#226f54'
                                textColor='#fff'
                                variant='filled'
                                onClick={() => {
                                    setModal(true)
                                }}>
                                Agregar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container__button'>
                <Button
                    className='button-add'
                    width={'220px'}
                    onClick={tableBalances}
                    margin={'0 15px 0 0'}
                    variant='filled'>
                    <MdAccountBalance className='icon' />
                    Balance General
                </Button>
                <Button
                    className='button-add'
                    onClick={tableCambio}
                    width={'250px'}
                    margin={'0 15px 0 0'}
                    variant='filled'>
                    <MdAttachMoney className='icon' />
                    Cambio flujo efectivo
                </Button>
                <Button
                    className='button-add'
                    onClick={tableConciliacion}
                    width={'250px'}
                    margin={'0 15px 0 0'}
                    variant='filled'>
                    <MdEqualizer className='icon' />
                    conciliacion Bancaria
                </Button>
                <Button
                    className='button-add'
                    onClick={tableEstado}
                    width={'240px'}
                    variant='filled'>
                    <MdAssessment className='icon' />
                    Estado de Resultado
                </Button>
            </div>
            {info ? <TableBalance /> : <div className='info'></div>}
            <div className='footer-button'>
                <Button
                    className='button'
                    color='#a23e48'
                    textColor='#fff'
                    variant='filled'
                    width={'220px'}
                    margin={'20px'}>
                    <MdPictureAsPdf className='icon' />
                    Convertir a pdf
                </Button>
                <Button
                    className='button'
                    color='#226f54'
                    textColor='#fff'
                    variant='filled'
                    width={'220px'}
                    margin={'20px'}>
                    <MdInsertDriveFile className='icon' />
                    Convertir a Excel
                </Button>
            </div>
            {isModal && (
                <ModalFinance
                    closeModal={() => {
                        setModal(false)
                    }}
                />
            )}
        </div>
    )
}
export default React.memo(Financial_state)
