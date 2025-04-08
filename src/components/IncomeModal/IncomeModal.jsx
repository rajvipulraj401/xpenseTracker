import React from "react";
import styles from "./IncomeModal.module.css";

const IncomeModal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.incomeModalContent}>
        <h2>Add Balance</h2>

        <div className={styles.buttonRow}>
          <input
            type="number"
            placeholder="Income Amount"
            className={styles.inputField}
          />
          <button className={styles.addBtn}>Add Balance</button>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeModal;
