import React from "react";
import styles from "./ExpenseModal.module.css";

const ExpenseModal = ({ name, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.expenseModalContent}>
        <h2>{name}</h2>

        <div className={styles.formRow}>
          <input
            type="text"
            placeholder="Title"
            className={styles.inputField}
          />
          <input
            type="number"
            placeholder="Price"
            className={styles.inputField}
          />
        </div>

        <div className={styles.formRow}>
          <input
            type="text"
            placeholder="Select Category"
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            className={styles.inputField}
          />
        </div>

        <div className={styles.buttonRow}>
          <button className={styles.addBtn}>Add Expense</button>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal;
