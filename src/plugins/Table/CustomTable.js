import { useState } from "react";
import styles from "./CustomTable.module.css";

const EntryLine = ({ datas, labels }) => {
  return (
    <tr className={styles.entryLine}>
      {
        labels.map((e) => {
          return <td>{datas[e.id]}</td> 
        })
      }
    </tr>
  );
};

const Entries = ({ datas, labels, entriesPerPage, startIndex }) => {
  let entries = [];
  for (let i = 0; i < entriesPerPage; i++) {
    if (datas[i + startIndex]) {
      entries.push(
        <EntryLine
          datas={datas[i + startIndex]}
          labels={labels}
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
  const [tableDatas, setTableDatas] = useState(datas)

  const handleSearch = (e) => {
    const filteredEntries = datas.filter((element) => {
      for (let key in element) {
        if(element[key].toUpperCase().match(e.target.value.toUpperCase())) {
          return true;
        };
      }
    })
    setTableDatas(filteredEntries)
  }

  const handleSort = (e) => {
    const name = e.target.getAttribute("name")
    const sortedEntries = [...tableDatas].sort((a, b) => {
      if (a[name] < b[name]) return -1;
      if (a[name] > b[name]) return 1;
      return 0;
    })
    setTableDatas(sortedEntries)
  }

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
          <input id="table-search" type={"text"} onChange={handleSearch}></input>
        </div>
      </div>
      <table id={id}>
        <thead>
          <tr>
            {labels.map((e, index) => {
              return (
                <th scope="col" key={e.label + index} name={e.id} className={styles.labels} onClick={handleSort}>
                  {e.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableDatas.length > 0 ? (
            <Entries
              datas={tableDatas}
              labels={labels}
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
          {startIndex + entriesPerPage < tableDatas.length
            ? startIndex + entriesPerPage
            : tableDatas.length}{" "}
          of {tableDatas.length} entries
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
              if ((startIndex + entriesPerPage) < (tableDatas.length)) {
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
