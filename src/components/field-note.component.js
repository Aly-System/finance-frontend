import React from 'react'

// import util
import { randomKey } from 'utils'

/**
 * Component with input+label reusability
 *
 * @param {String} label
 * @param {String} type
 * @param {String} className
 * @param {Object} rest
 * */
function FieldNote({
    label = null,
    type = 'text',
    color = 'red',
    className = '',
    errorMessage = '',
    inputRef = null,
    name = '',
    ...rest
}) {
    // random id to assing to input field & make reference from label
    const idFieldNote = randomKey()
    return (
        <>
            <fieldset className='container-input_description'>
                {
                    // if label property is passed, render the label
                    label ? (
                        <label htmlFor={idFieldNote} className='textarea-label'>
                            {label}
                        </label>
                    ) : null
                }
                <textarea
                    ref={inputRef}
                    id={idFieldNote}
                    color={color}
                    className='style-textarea'
                    row='5'
                    col='6'
                    name={name}
                    {...rest}
                />
            </fieldset>
        </>
    )
}

export default React.memo(FieldNote)
