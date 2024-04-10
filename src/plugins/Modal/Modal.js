import styles from './Modal.module.css'

export const OpenModal = (id) => {
    document.querySelector(`#${id}`).showModal()
}

export const CloseModal = (id) => {
    document.querySelector(`#${id}`).close()
}

export const OpenFadingModal = (id, duration) => {
    document.querySelector(`#${id}`).showModal()

    setTimeout(() => {
        document.querySelector(`#${id}`).close()
    }, duration)
}

const Modal = ({id, message}) => {
    return (
        <dialog className={styles.modal} id={id} >
            <span>{message}</span>
        </dialog>
    );
  };
  
export default Modal 