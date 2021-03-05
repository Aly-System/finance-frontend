import React, { useState } from 'react'
import PasswordInputHtml from './PasswordInputHtml'

const PasswordInput = ({onChange,password}) => {
    
    const [show, setShow] = useState(false)

    const switchShow = _ => {
        setShow(!(show))
    }
    return (
        <PasswordInputHtml
            switchShow={switchShow}
            show = {show}
            onChange={onChange}
            password= {password}
        />
    )
}

export default PasswordInput