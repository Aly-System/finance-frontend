import React, { useState } from 'react'
import Button from 'components/button.component'
import Modal_coins from 'components/modal/modal-coins.component'
import Currency from 'components/currency.component'
import { ValidationAlert } from 'utils/alerts.utils'
import useLocalStorage from 'hooks/useLocalStorage.hook'

const Coins = () => {
    const [isModal, setModal] = useState(false)
    //guardamos el valor de la moneda en el localStorage usando el hook de useLocalStorage
    const [defaultCoins, setDefaultCoins] = useLocalStorage('defaultCoins', [])
    // seleccion de la moneda
    const onSelectCurrency = selectedCoin => {
        if (typeof selectedCoin !== 'object') return

        const existCoin = defaultCoins.some(_coin => {
            return (
                _coin.title === selectedCoin.title &&
                _coin.symbol === selectedCoin.symbol
            )
        })
        // validación de la existencia de la monena
        if (existCoin)
            return ValidationAlert({
                title: 'La moneda ya existe',
                message: 'Ya tienes agredada esta moneda',
            })

        setDefaultCoins([...defaultCoins, selectedCoin])
    }

    return (
        <div className='screen__content__container'>
            <div className='  grid__container__header'>
                <div className='container__header'>
                    <h2 className='title__header'>Lista de moneda</h2>
                    <div className='container__button'>
                        <div className='container__button_add'>
                            <Button
                                className='button-add'
                                variant='filled'
                                onClick={() => {
                                    setModal(true)
                                }}>
                                + Agregar nueva moneda
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='coin-list grid__container__header'>
                {defaultCoins.map((coin, index) => (
                    <Currency onClick={() => {}} key={index} coin={coin} />
                ))}
            </div>
            {isModal && (
                <Modal_coins
                    onSelectCurrency={onSelectCurrency}
                    closeModal={() => {
                        setModal(false)
                    }}
                />
            )}
        </div>
    )
}
export default React.memo(Coins)
