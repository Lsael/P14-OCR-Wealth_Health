import styles from './Datepicker.module.css'

const Datepicker = ({name, label}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input id={name} type="date" />
        </>
    );
  };
  
  export default Datepicker 