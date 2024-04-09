
const SelectMenu = ({props, name}) => {
    return (
        <select id={name} name={name} className="select-menu">
            <option value="">-- Pick an option --</option>
            {
                props.map((element, index) => {
                    return <option value={element} key={index}>{element}</option>
                })
            }
        </select>
    );
  };
  
  export default SelectMenu 