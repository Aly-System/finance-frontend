import React from 'react'
import Logo from 'assets/img/logo.png'
import FieldSelect from 'components/field-select.component'
import Button from 'components/button.component'
import { useHistory } from 'react-router-dom'
import useGetCountries from 'hooks/useGetCountries.hook'

function Framework() {
    const history = useHistory()
    const { countries } = useGetCountries()

    function navigateToHome() {
        history.push('/')
    }
    return (
        <div className='framework'>
            <div className='framework-content'>
                <figure className='framework-logo-container'>
                    <img
                        className='framework-logo margin-bottom'
                        src={Logo}
                        alt='Logo de la compañia'
                    />
                </figure>
                <h1 className='title-2 center  color-white'>
                    Selecione donde desea trabajar
                </h1>
                <FieldSelect
                    label='Empresa'
                    name='empresa'
                    margin={'0 0 10px 0'}
                    options={[
                        { value: 1, title: 'AlySystem' },
                        { value: 2, title: 'AlyPay' },
                        { value: 3, title: 'Speedtradings' },
                    ]}
                />
                <FieldSelect
                    label='Pais'
                    name='pais'
                    margin={'0 0 10px 0'}
                    options={countries}
                />

                <FieldSelect
                    label='Sucursal'
                    name='sucursal'
                    margin={'0 0 10px 0'}
                    options={countries}
                />
                <FieldSelect
                    className='margin-bottom'
                    label='BranchOffice'
                    name='branchOffice'
                    margin={'0 0 10px 0'}
                    options={[
                        { value: 1, title: 'AlySystem' },
                        { value: 2, title: 'AlyPay' },
                        { value: 3, title: 'Speedtradings' },
                    ]}
                />
                <FieldSelect
                    className='margin-bottom'
                    label='Modulo'
                    name='modulo'
                    margin={'0 0 10px 0'}
                    options={[
                        { value: 1, title: 'AlySystem' },
                        { value: 2, title: 'AlyPay' },
                        { value: 3, title: 'Speedtradings' },
                    ]}
                />

                <Button
                    onClick={navigateToHome}
                    width={'370px'}
                    variant='filled'
                    width={'500px'}>
                    Siguiente
                </Button>
            </div>
        </div>
    )
}

export default React.memo(Framework)
