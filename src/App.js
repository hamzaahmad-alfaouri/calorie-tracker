import React, { useState } from 'react';
import ListingSection from './components/CalorieRecords-Section/ListingSection';
import CaloriesRecordEdit from './components/edit/CaloriesRecordEdit';
import Modal from 'react-modal';  
import styles from './App.module.css';
import { getDateFromString } from './utils';

// بيانات افتراضية
const INITIAL_RECORDS = [
  { id: 1, date: new Date(2023, 2, 1).toISOString().split('T')[0], meal: "Breakfast", content: 'Eggs', calories: 111 },
  { id: 2, date: new Date(2023, 2, 2).toISOString().split('T')[0], meal: "Lunch", content: 'Fish', calories: 200 },
  { id: 3, date: new Date(2023, 2, 3).toISOString().split('T')[0], meal: "Dinner", content: 'Chicken', calories: 300 },
];

function App() {
  const [records, setRecords] = useState(INITIAL_RECORDS);
  const [nextId, setNextId] = useState(4);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formSubmitHandler = (record) => {
    // تأكد من أن البيانات التي يتم إرسالها صحيحة قبل الإضافة
    const formattedRecord = {
      ...record,
      date: getDateFromString(record.date),
      id: nextId,
    };

    // تحديث الـ ID للسجل التالي
    setNextId((lastVal) => lastVal + 1);

    // إضافة السجل الجديد
    setRecords((prevRecords) => [formattedRecord, ...prevRecords]);
    
    // إغلاق الـ Modal
    handleCloseModal();
  };

  return (
    <div>
      <h1 className={styles.title}>Calorie Tracker</h1>
      <Modal
        isOpen={isModalOpen}  
        onRequestClose={handleCloseModal}
        contentLabel="Add Calorie Record"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: '0',
            border: 'none',
            borderRadius: "var(--theme-border-radius-smooth)",
          },
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
        }}
      >
        <CaloriesRecordEdit onFormSubmit={formSubmitHandler} onCancel={handleCloseModal} />
      </Modal>
      <ListingSection allRecords={records} />
      <button className={styles["open-modal-btn"]} onClick={handleOpenModal}>
        Track food
      </button>
    </div>
  );
}

export default App;
