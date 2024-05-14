import styles from "./SelectMenu.module.css";

const SelectMenu = ({ name, list, value, callback }) => {
  return (
    <select
      id={name}
      name={name}
      value={value}
      onChange={callback}
      className={styles.selectMenu}
    >
      <option value="">-- Pick an option --</option>
      {list.map((element, index) => {
        return (
          <option value={element} key={index}>
            {element}
          </option>
        );
      })}
    </select>
  );
};

export default SelectMenu;
