import React from 'react'
import copy from 'utils/copy-clipboard.util'
import { randomKey } from 'utils'

function TableCell({
    label = null,
    value = '',
    align = 'left',
    copyClipboard = false,
}) {
    const style = {
        textAlign: align,
        alignItems:
            (align === 'left' && 'flex-start') ||
            (align === 'right' && 'flex-end') ||
            (align === 'center' && 'center'),
    }

    const handleClick = () => {
        if (!copyClipboard) return
        copy(value, 'Hash copiado al portapapeles')
    }

    return (
        <section
            className='table-component'
            style={style}
            onClick={handleClick}>
            <div className='table-content__title'>
                {label && <span className='table-cell__label'>{label}</span>}
            </div>
            <div className='table-content__row'>
                <p
                    className={`table-cell__value ${
                        copyClipboard ? ' copy' : ''
                    }`}>
                    {value}
                </p>
            </div>
        </section>
    )
}

export default React.memo(TableCell)
