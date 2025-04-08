import React, { useState } from "react";
import Display from "./components/Display/Display";
import TopExpensesCard from "./components/TopExpensesCard/TopExpensesCard";
import IncomeModal from "./components/IncomeModal/IncomeModal";
import ExpenseModal from "./components/ExpenseModal/ExpenseModal";
import "./App.css";
import RecentTransaction from "./components/RecentTransaction/RecentTransaction";

const App = () => {
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  // ---All hooks ---

  // ---All funct below---

  const pieChartData = [
    { name: "Food", value: 400 },
    { name: "Entertainment", value: 20 },
    { name: "Travel", value: 200 },
  ];

  // All the clicks declared here

  const handleAddIncomeClick = () => {
    console.log("click hua addincome");
    // Now on click of this button we want to open the modal
    setIsIncomeModalOpen(true);
  };

  const handleAddExpenseClick = () => {
    console.log("click hua balance");
    // Now on click of this button we want to open the modal
    setIsExpenseModalOpen(true);
  };

  // Ab modal ko return ke andar conditionally render karo —
  // kyunki state change ke baad hi UI me modal dikhega. AUR jo return ke andar hota hai whi ui me dikhta hai👆🏼👆🏼 👇🏼👇🏼👇🏼👇🏼👇🏼

  return (
    <>
      <div className="container">
        <div className="ExpenseTracker">
          <h1>Expense Tracker</h1>
          <Display
            pieChartData={pieChartData}
            onAddIncomeClick={handleAddIncomeClick}
            onAddExpenseClick={handleAddExpenseClick}
          ></Display>
        </div>

        {/* Lowe section of  Recent Transactions  and Top Expenses */}

        <div className="recentTransactionANDtopExpenses">
          <section className="recentTransaction">
            <h2>Recent Transaction</h2>

            <RecentTransaction></RecentTransaction>
          </section>

          {/* Top Expenses Section */}
          <section className="TopExpenses">
            <h2>Top Expenses</h2>
            <TopExpensesCard pieChartData={pieChartData}></TopExpensesCard>
          </section>
        </div>

        {/* 👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼ADDED MODAL below to render it onscreen 👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼*/}

        {/* {isIncomeModalOpen && (
          <Modal
            title="Add Balance"
            type="income"
            onClose={() => setIsIncomeModalOpen(false)}
          />
        )}

        {isExpenseModalOpen && (
          <Modal
            title="Add Expense"
            type="expense"
            onClose={() => setIsExpenseModalOpen(false)}
          />
        )} */}

        {/* Render Income Modal */}
        {isIncomeModalOpen && (
          <IncomeModal onClose={() => setIsIncomeModalOpen(false)} />
        )}

        {/* Render Expense Modal */}
        {isExpenseModalOpen && (
          <ExpenseModal onClose={() => setIsExpenseModalOpen(false)} />
        )}

        {/* 👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼 ADDED MODAL Above to render it onscreen 👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼👆🏼*/}
      </div>
    </>
  );
};

export default App;
