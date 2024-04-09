import styles from './Modal.module.css'

const Modal = ({display}) => {
    return (
        <dialog className={styles.modal} open>
            <span>Employee Created!</span>
        </dialog>
    );
  };
  
export default Modal 