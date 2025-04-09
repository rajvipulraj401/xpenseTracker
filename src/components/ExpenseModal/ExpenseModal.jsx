import React from "react";
import styles from "./ExpenseModal.module.css";

const ExpenseModal = ({ name, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.expenseModalContent}>
        <h2>{name}</h2>

        <form action="">
          <div className={styles.formRow}>
            <input
              type="text"
              placeholder="Title"
              required
              className={styles.inputField}
            />
            <input
              type="number"
              placeholder="Price"
              required
              className={styles.inputField}
            />
          </div>

          <div className={styles.formRow}>
            <select className={styles.inputField} required defaultValue="">
              <option
                value=""
                hidden
                style={{ color: "rgba(0, 255, 255, 0.2 )" }}
              >
                Select Option
              </option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Travel">Travel</option>
            </select>
            <input
              type="date"
              required
              defaultValue=""
              className={styles.inputField}
            />
          </div>

          <div className={styles.buttonRow}>
            <button type="submit" className={styles.addBtn}>
              Add Expense
            </button>
            <button className={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseModal;
