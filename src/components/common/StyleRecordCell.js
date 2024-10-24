import React from 'react';
import styles from "./StyleRecordCell.module.css";

export default function StyleRecordCell(props) {
  // التحقق من وجود children وتقديم قيمة افتراضية إذا لم يوجد
  return (
    <div className={styles['style-record-cell']}>
      {props.children || 'No content provided'}
    </div>
  );
}