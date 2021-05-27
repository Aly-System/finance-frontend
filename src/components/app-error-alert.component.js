import { GrClose } from 'react-icons/gr'

export default function AppErrorAlert({
    message = '',
    title = '',
    type = 'error',
    onClose = () => {},
}) {
    return (
        <p id='AppAlertComponent' className={`AppAlert ${type}`}>
            <span className='AppAlert-message'>
                {type === 'error' && <strong>{title} </strong>}
                {type === 'success' && <strong>{title} </strong>}
                {type === 'warning' && <strong>{title} </strong>} {'. '}
                {message}
            </span>

            {/* Clear error message on click */}
            <span className='AppAlert-close' onClick={onClose} title='Cerrar'>
                <GrClose size={20} />
            </span>
        </p>
    )
}
