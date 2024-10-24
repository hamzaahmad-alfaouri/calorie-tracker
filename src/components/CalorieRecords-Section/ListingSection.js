import React, { useState } from 'react';
import RecordList from './RecordList';
import styles from "./ListingSection.module.css";
import { getDateFromString } from '../../utils';

const ListingSection = (props) => {
  const { allRecords } = props;
  const [currentDate, setCurrentDate] = useState(new Date());

  const dateChangeHandler = (event) => {
    const selectedDate = new Date(event.target.value);

    // تحقق من أن التاريخ صالح
    if (!isNaN(selectedDate.getTime())) {
      setCurrentDate(selectedDate);
    } else {
      console.error("Invalid date");
    }
  };

  const dateFilter = (record) => {
    const recordDate = new Date(record.date);

    // تحقق من أن التاريخ صالح قبل الفلترة
    if (isNaN(recordDate.getTime())) {
      console.error("Invalid record date:", record.date);
      return false;
    }

    return (
      recordDate.getDate() === currentDate.getDate() &&
      recordDate.getMonth() === currentDate.getMonth() &&
      recordDate.getFullYear() === currentDate.getFullYear()
    );
  };

  const formatDate = (date) => {
    const timezoneOffset = date.getTimezoneOffset() * 60000; 
    const adjustedDate = new Date(date.getTime() - timezoneOffset); 
    return adjustedDate.toISOString().split("T")[0]; 
  };

  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor="listingDate">
        Select date
      </label>
      <input
        id="listingDate"
        type="date"
        value={formatDate(currentDate)}
        className={styles["listing-picker-input"]}
        onChange={dateChangeHandler}
      />
      <RecordList records={allRecords.filter(dateFilter)} />
    </>
  );
};

export default ListingSection;
