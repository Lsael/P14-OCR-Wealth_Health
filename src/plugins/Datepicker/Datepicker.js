import styles from './Datepicker.module.css'

const Datepicker = ({name, label, value, callback}) => {
    return (
        <div className={styles.datepicker}>
            <label htmlFor={name}>{label}</label>
            <input id={name} type="date" name={name} value={value} onChange={callback}/>
        </div>
    );
  };
  
  export default Datepicker