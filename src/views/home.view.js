import { Button } from 'components'
import React, { useContext } from 'react'
import { BackOfficeContext } from 'store/backOffice.store'

const Home = () => {
    // const history = useHistory()

    // function navigateToBackOffice() {
    //     history.push('/back/office')
    // }

    const backoffice = useContext(BackOfficeContext)

    return (
        <div className='screen__content__container'>
            <div className='grid__container__header'>
                <div className='container__header'>
                    <h2 className='title__header'>Bienvenido a AlyFinances</h2>
                    <Button onClick={backoffice.show} variant='filled'>
                        BackOffice
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default React.memo(Home)
