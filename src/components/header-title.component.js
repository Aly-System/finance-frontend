import React from 'react'
function Header_title() {
    return (
        <div className='  grid__container__header'>
            <div className='container__header '>
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
    )
}
export default React.memo(Header_title)
