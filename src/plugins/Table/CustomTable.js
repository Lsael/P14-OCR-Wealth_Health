import styles from "./CustomTable.module.css";

const CustomTable = ({ id, title, labels, datas }) => {
  return (
    <div className={styles.customTable}>
      <h1>{title}</h1>
      <div className={styles.tableHeader}>
        <div className={styles.showEntries}>
          <span>Show</span>
          <select>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span>Entries</span>
        </div>
        <div className={styles.search}>
          <label htmlFor="table-search">Search:</label>
          <input id="table-search" type={"text"}></input>
        </div>
      </div>
      <table id={id}>
        <thead>
          <tr>
            {labels.map((e, index) => {
              return (
                <th scope="col" key={e + index}>
                  {e}
                </th>
              );
            })}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CustomTable;
