import React from "react";
import Card from "../Card/Card";
import ExpenseSection from "../ExpenseSection/ExpenseSection";
import styles from "./Display.module.css";
import PieChartDisplay from "../PieChar/PieChartDisplay";

const pieChartData = [
  { name: "Food", value: 400 },
  { name: "Entertainment", value: 0 },
  { name: "Travel", value: 200 },
];

const Display = () => {
  return (
    <div className={styles.displayContainer}>
      {/* The main cards here */}
      <div className={styles.cardContainer}>
        <Card
          name="Wallet Balance"
          balance={4500}
          buttonName="+ Add Income"
          color="green"
        ></Card>
        <Card
          name="Expenses"
          balance={500}
          buttonName="+ Add Expense"
          color="orange"
        ></Card>
      </div>
      {/* Below is the chart */}

      <div className={styles.chartContainer}>
        <div className={styles.pie}>
          <PieChartDisplay data={pieChartData} />
        </div>
        <div className={styles.expenseContainer}>
          <ExpenseSection
            color="rgba(160, 0, 255, 1)"
            name="Food"
          ></ExpenseSection>
          <ExpenseSection
            color="rgba(255, 147, 4, 1)"
            name="Entertainment"
          ></ExpenseSection>
          <ExpenseSection
            color=" rgba(253, 224, 6, 1)"
            name="Travel"
          ></ExpenseSection>
        </div>
      </div>
    </div>
  );
};

export default Display;
