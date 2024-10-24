import React from 'react';
import CalorieRecord from "./CalorieRecord";
import styles from "./RecordList.module.css";
import PropTypes from 'prop-types';

const RecordList = (props) => {
  RecordList.propTypes = {
    records: PropTypes.array.isRequired,
  };

  const records = props.records || []; // إضافة قيمة افتراضية

  return props.records?.length? (
    <ul className={styles["record-list"]}>
      {
        records.map((record) =>
          record.calories >= 0 ? (
            <li className={styles["list-item"]} key={record.id}>
              <CalorieRecord
                date={new Date(record.date)}  // تأكد من تحويل التاريخ إلى كائن Date
                meal={record.meal}
                content={record.content}
                calories={record.calories}
              />
            </li>
          ) : null
        )
      }
    </ul>
  ):(<div className={styles.placeholder}>No records found for this date</div>);
}

export default RecordList;
