import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

/**
 * @param  {String} {align='center' //Sirve para centrar el botom
 * @param  {} color='#ffac41'
 * @param  {} textColor='#000'
 * @param  {} variant=''
 * @param  {} children
 * @param  {} type='button'
 * @param  {} onClick=(
 * @param  {} =>{}
 * @param  {} formRef
 * @param  {} }
 */
function Button({
    width = '250px',
    margin = '',
    align = '',
    color = '#ffac41',
    textColor = '#000',
    variant = '',
    children,
    type = 'button',
    onClick = () => {},
    formRef,
}) {
    const [style, setStyle] = useState({
        backgroundColor: 'transparent',
        color: textColor,
        border: 'none',
        textAlign: align,
    })

    const styleToUse = () => {
        if (variant === 'filled') {
            setStyle({
                backgroundColor: color,
                color: textColor,
                border: 'none',
                margin: '0px',
            })
        }
        if (variant === 'outline') {
            setStyle({
                backgroundColor: 'transparent',
                color: color,
                border: `1px solid ${color}`,
            })
        }

        if (variant === 'link') {
            setStyle({
                backgroundColor: 'transparent',
                color: color,
                border: `none`,
            })
        }
    }

    useEffect(() => {
        styleToUse()
    }, [variant])

    return (
        <>
            <div
                className='container__button__measure'
                style={{ margin, width }}>
                <button
                    type={type}
                    onClick={onClick}
                    className='button '
                    style={style}
                    form={formRef}>
                    {children}
                </button>
            </div>
        </>
    )
}

Button.propTypes = {
    align: PropTypes.string,
    children: PropTypes.any,
    color: PropTypes.string,
    formRef: PropTypes.any,
    onClick: PropTypes.func,
    textColor: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
}

export default React.memo(Button)
