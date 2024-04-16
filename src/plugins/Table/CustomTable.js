import { useState } from "react";
import styles from "./CustomTable.module.css";

const EntryLine = ({datas}) => {
  return(
    <tr className={styles.entryLine}>
      <td>{datas.firstName}</td>
      <td>{datas.lastName}</td>
      <td>{datas.startDate}</td>
      <td>{datas.department}</td>
      <td>{datas.dateOfBirth}</td>
      <td>{datas.street}</td>
      <td>{datas.city}</td>
      <td>{datas.state}</td>
      <td>{datas.zipcode}</td>
    </tr>
  )
}

const Entries = ({datas, entriesMax}) => {
  let entries = []
  for(let i=0; i < entriesMax; i++) {
    if(datas[i]) {
      entries.push(<EntryLine datas={datas[i]} key={"entry" + i} />) 
    } else break;
  }
  return entries
}

const CustomTable = ({ id, title, labels, datas }) => {
  const [entriesMax, setEntriesMax] = useState("10")
  
  return (
    <div className={styles.customTable}>
      <h1>{title}</h1>
      <div className={styles.tableHeader}>
        <div className={styles.showEntries}>
          <span>Show</span>
          <select onChange={(e) => setEntriesMax(e.target.value)}>
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
        <tbody>
          {
            datas.length > 0 ?
            <Entries datas={datas} entriesMax={entriesMax}/> : 
            <tr>
              <td colSpan={9} className={styles.emptyEntry}>No data available in table</td>
            </tr>
          }
        </tbody>
      </table>
      <div className={styles.tableFooter}>
          <span>Showing 0 to 0 of 0 entries</span>
          <div className={styles.paging}>
            <span>Previous</span>
            <span>Next</span>
          </div>
      </div>
    </div>
  );
};

export default CustomTable;
