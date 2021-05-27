import Modal from 'components/modal/modal.component'
import SearchBar from 'components/search-bar.component'
import Currency from 'components/currency.component'
import useCoins from 'hooks/coins/useCoins.hook'
import useGetCountriesCoins from 'hooks/useGetCountryCoin.hook'

export default function ModalCoins({ closeModal, onSelectCurrency }) {
    const {
        checkActiveStep,
        filteredCoins,
        updateKeyword,
        keyword,
        toStepOne,
        toStepTwo,
        Steps,
    } = useCoins()

    return (
        <Modal closeModal={closeModal}>
            <div className='container-modal-coin'>
                <div className='modal-coin-conten'>
                    <h2 className='modal-title'>Agregar una moneda</h2>
                    <div className='modal-action-container'>
                        <div
                            onClick={toStepOne}
                            className={`stepper__circle ${
                                checkActiveStep(Steps.STEP_ONE) && 'selected'
                            }`}>
                            1
                        </div>
                        <div className='line'></div>
                        <div
                            onClick={toStepTwo}
                            className={`stepper__circle stepper__circle--last ${
                                checkActiveStep(Steps.STEP_TWO) && 'selected'
                            }`}>
                            2
                        </div>
                    </div>
                    <div className='modal-action-container-title'>
                        <p>Seleccionar una moneda</p>
                        <p>Personalice una moneda</p>
                    </div>
                </div>

                {checkActiveStep(Steps.STEP_ONE) && (
                    <div className='modal-main'>
                        <SearchBar
                            className='search-coin'
                            placeholder='Buscar pais, simbolo o una moneda'
                            value={keyword}
                            onChange={updateKeyword}
                        />
                        <h3 className='title-selection'>
                            Seleccione una moneda
                        </h3>

                        <div className='list-coins'>
                            {filteredCoins.map((coin, index) => (
                                <Currency
                                    onClick={() => {
                                        if (onSelectCurrency) {
                                            onSelectCurrency(coin)
                                        }

                                        if (closeModal) closeModal()
                                    }}
                                    key={index}
                                    coin={coin}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {checkActiveStep(Steps.STEP_TWO) && <section>PASO 2</section>}
            </div>
        </Modal>
    )
}
