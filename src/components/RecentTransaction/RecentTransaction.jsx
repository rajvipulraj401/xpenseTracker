import React from "react";
import styles from "./RecentTransaction.module.css";

const RecentTransaction = () => {
  return (
    <>
      <div className={styles.transactionsContainer}>
        <div className={styles.transactions}>No transactions!</div>
        {/* <div className={styles.transactions}>No transactions!</div> */}
        {/* <Transaction></Transaction> */}
      </div>
    </>
  );
};

export default RecentTransaction;
