import Modal from 'components/modal/modal.component'
import TableRegisterView from 'components/table/table-register-view.component'

export default function ModalRegisterViewdate({ closeModal, id }) {
    return (
        <Modal closeModal={closeModal}>
            <div className='container__modal__register__view'>
                <h2 className='modal__title'>Detalles de registro</h2>
                <TableRegisterView id={id} />
            </div>
        </Modal>
    )
}
