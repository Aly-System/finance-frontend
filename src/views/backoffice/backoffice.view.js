import { Button } from 'components'
import React, { useContext } from 'react'
import { BackOfficeContext } from 'store/backOffice.store'

function BackOffice() {
    // const history = useHistory()

    // function navigateToBackOffice() {
    //     history.push('/back/office')
    // }

    const backoffice = useContext(BackOfficeContext)

    console.log(backoffice)

    return (
        <div className='screen__content__container'>
            <div className='  grid__container__header'>
                <div className='container__header'>
                    <h2 className='title__header'>BackOffice</h2>
                    <div className='container__button'>
                        <div className='container__button_add'>
                            <Button onClick={backoffice.hide} variant='filled'>
                                Home
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(BackOffice)
