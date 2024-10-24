import styles from "./CalorieRecord.module.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyleRecordCell from "../common/StyleRecordCell";

function CalorieRecord(props) {
  return (
    <ul className={styles.record}>
      <li>
        <CalorieRecordDate date={props.date} />
      </li>
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <li className={styles["record-calories"]}>
        <StyleRecordCell>{props.calories}</StyleRecordCell>
      </li>
    </ul>
  );
}

export default CalorieRecord;
