import Modal from 'components/modal/modal.component'
import FieldSelect from 'components/field-select.component'
import FieldText from 'components/field-text.component'
import Button from 'components/button.component'
import SearchBar from 'components/search-bar.component'
import useGetContries from 'hooks/useGetCountries.hook'
import React from 'react'
import useGetCompanies from 'hooks/useGetCompanies.hook'
import '../../styles/components/modal-financial-state.scss'

export default function ModalFinancial({ closeModal }) {
    const { countries } = useGetContries()
    const { companies } = useGetCompanies()

    console.log(companies)
    return (
        <Modal closeModal={closeModal}>
            <div className='container__modal__Financial'>
                <h2 className='modal-title'>Estados Financieross</h2>
                {/* <SearchBar className='searchBar' width={500} /> */}
                <div className='modal__Financial__conten'>
                    <form>
                        <div className='container__date'>
                            <FieldText
                                className='margin'
                                label='Fecha inicial'
                                name='Fecha inicial'
                                type='date'
                                required
                            />

                            <FieldText
                                className='margin'
                                label='Fecha Final'
                                name='Fecha Final'
                                type='date'
                                required
                            />
                        </div>

                        <FieldSelect
                            className='margin'
                            label='Compañia'
                            name='Compañia'
                            options={companies}
                        />
                        <FieldSelect
                            className='margin'
                            label='Ruc'
                            name='Ruc'
                            options={[
                                { value: 1, title: '1' },
                                { value: 2, title: '2' },
                                { value: 3, title: '3' },
                            ]}
                        />
                        <FieldSelect
                            className='margin'
                            label='Pais'
                            name='Pais'
                            options={countries}
                        />

                        <FieldSelect
                            className='margin'
                            label='Region'
                            name='Region'
                            options={[
                                { value: 1, title: 'Pacifico' },
                                { value: 2, title: 'Centro' },
                                { value: 3, title: 'Atlantico Norte' },
                                { value: 4, title: 'Atlantico Sur' },
                            ]}
                        />
                        <FieldSelect
                            className='margin'
                            label='Ciudad'
                            name='Ciudad'
                            options={[
                                { value: 1, title: '1' },
                                { value: 2, title: '2' },
                                { value: 3, title: '3' },
                            ]}
                        />
                        <Button
                            className=' button-add '
                            variant='filled'
                            type='submit'
                            margin={'10px 0 0 0'}
                            width={500}>
                            Generar
                        </Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}
