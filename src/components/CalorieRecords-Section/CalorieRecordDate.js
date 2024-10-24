import React from 'react';
import styles from "./CalorieRecordDate.module.css";
import StyleRecordCell from '../common/StyleRecordCell';

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export default function CalorieRecordDate(props) {
  if (!props.date || isNaN(new Date(props.date))) return null; // معالجة التواريخ غير الصالحة
  
  const month = MONTHS[props.date.getUTCMonth()];
  const day = props.date.getUTCDate();
  const year = props.date.getUTCFullYear();
  
  return (
    <StyleRecordCell>
      <div className={styles["record-date-month"]}>{month}</div>
      <div className={styles["record-date-day"]}>{day}</div>
      <div className={styles["record-date-year"]}>{year}</div>
    </StyleRecordCell>
  );
}
