import React from "react";
import styles from "./TopExpensesCard.module.css";

const TopExpensesCard = () => {
  return (
    <div className={styles.TopExpensesCard}>
      {/* Left Side */}
      <div className={styles.left}>
        <div>Food</div>
        <div>Entertainment</div>
        <div>Travel</div>
      </div>

      {/* Right Side */}
      <div className={styles.right}>
        <div className={styles.bar1} style={{ width: "60%" }}></div>
        <div className={styles.bar2} style={{ width: "30%" }}></div>
        <div className={styles.bar3} style={{ width: "10%" }}></div>
      </div>
    </div>
  );
};

export default TopExpensesCard;
