import React, { useState } from "react";
import styles from "./CaloriesRecordEdit.module.css";

function CaloriesRecordEdit(props) {
  const DEFAULT_VALUE = {
    date: new Date().toISOString().split("T")[0],  // التاريخ الافتراضي
    meal: "Breakfast",
    content: "",
    calories: 0,
  };

  const [mealRecord, setMealRecord] = useState(DEFAULT_VALUE);

  const onDateChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      date: event.target.value,
    });
  };

  const onMealChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      meal: event.target.value,
    });
  };

  const onContentChangeHandler = (event) => {
    setMealRecord({
      ...mealRecord,
      content: event.target.value,
    });
  };

  const onCalorieChangeHandler = (event) => {
    const calories = Number(event.target.value);
    if (calories < 0) return;  // منع إدخال قيمة سلبية

    setMealRecord({
      ...mealRecord,
      calories: calories,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(mealRecord);
    setMealRecord(DEFAULT_VALUE);  // إعادة تعيين القيم الافتراضية
  };

  const onCancelHandler = () => {
    setMealRecord(DEFAULT_VALUE);
    props.onCancel();
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label htmlFor="date">Date: </label>
      <input value={mealRecord.date} type="date" id="date" onChange={onDateChangeHandler} />

      <label htmlFor="meal">Meal: </label>
      <select value={mealRecord.meal} id="meal" onChange={onMealChangeHandler}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>

      <label htmlFor="content">Content: </label>
      <input value={mealRecord.content} type="text" id="content" onChange={onContentChangeHandler} />

      <label htmlFor="calories">Calories: </label>
      <input
        value={mealRecord.calories}
        type="number"
        id="calories"
        placeholder="0"
        onChange={onCalorieChangeHandler}
        className={`${styles["calories-input"]}`}
      />

      <div className={styles.footer}>
        <button type="submit">Add Record</button>
        <button className={styles.secondary} type="button" onClick={onCancelHandler}>Cancel</button>
      </div>
    </form>
  );
}

export default CaloriesRecordEdit;
