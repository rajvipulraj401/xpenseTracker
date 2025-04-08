import React from "react";
import styles from "./TopExpensesCard.module.css";

const TopExpensesCard = ({ pieChartData }) => {
  // So we get array of objects

  // console.log(pieChartData);

  const total = pieChartData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className={styles.TopExpensesCard}>
      {/* Left Side */}
      <div className={styles.left}>
        {pieChartData.map((curr, i) => {
          return <div key={i}> {curr.name}</div>;
        })}
        {/* 
        <div>Food</div>
        <div>Entertainment</div>
        <div>Travel</div> */}
      </div>

      {/* Right Side */}
      <div className={styles.right}>
        {pieChartData.map((curr, i) => {
          // Now we need to convert each value  into the %width using the total we calculated outside
          const percent =
            total === 0 ? 0 : Math.floor((curr.value / total) * 100);

          return (
            <div
              key={i}
              // className={styles.bar}
              className={`${styles.bar} ${styles["bar" + i]}`} // Dynamically creating another className
              style={{ width: `${percent}%` }}
            ></div>
          );
        })}

        {/* <div className={styles.bar1} style={{ width: "60%" }}></div> */}

        {/* <div className={styles.bar2} style={{ width: "30%" }}></div>
        <div className={styles.bar3} style={{ width: "10%" }}></div> */}
      </div>
    </div>
  );
};

export default TopExpensesCard;
