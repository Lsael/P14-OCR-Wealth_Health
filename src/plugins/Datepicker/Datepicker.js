import styles from './Datepicker.module.css'

const Datepicker = ({name, label}) => {
    return (
        <div className={styles.datepicker}>
            <label htmlFor={name}>{label}</label>
            <input id={name} type="date" />
        </div>
    );
  };
  
  export default Datepicker