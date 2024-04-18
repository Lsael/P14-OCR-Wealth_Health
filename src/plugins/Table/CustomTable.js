import { useState } from "react";
import styles from "./CustomTable.module.css";

const EntryLine = ({ datas }) => {
  return (
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
  );
};

const Entries = ({ datas, entriesPerPage, startIndex }) => {
  let entries = [];
  for (let i = 0; i < entriesPerPage; i++) {
    if (datas[i + startIndex]) {
      entries.push(
        <EntryLine
          datas={datas[i + startIndex]}
          key={"entry" + (i + startIndex)}
        />
      );
    } else break;
  }
  return entries;
};

const CustomTable = ({ id, title, labels, datas }) => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <div className={styles.customTable}>
      <h1>{title}</h1>
      <div className={styles.tableHeader}>
        <div className={styles.showEntries}>
          <span>Show</span>
          <select onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}>
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
          {datas.length > 0 ? (
            <Entries
              datas={datas}
              entriesPerPage={entriesPerPage}
              startIndex={startIndex}
            />
          ) : (
            <tr>
              <td colSpan={9} className={styles.emptyEntry}>
                No data available in table
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={styles.tableFooter}>
        <span>
          Showing {startIndex + 1} to{" "}
          {startIndex + entriesPerPage < datas.length
            ? startIndex + entriesPerPage
            : datas.length}{" "}
          of {datas.length} entries
        </span>
        <div className={styles.paging}>
          <span
            onClick={() => {
              if ((startIndex - entriesPerPage) >= 0) {
                setStartIndex(startIndex - entriesPerPage);
              }
            }}
          >
            Previous
          </span>
          <span
            onClick={() => {
              if ((startIndex + entriesPerPage) < (datas.length)) {
                setStartIndex(startIndex + entriesPerPage);
              }
            }}
          >
            Next
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
