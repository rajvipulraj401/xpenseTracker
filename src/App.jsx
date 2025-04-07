import React, { useState } from "react";
import Display from "./components/Display/Display";
import TopExpensesCard from "./components/TopExpensesCard/TopExpensesCard";

import "./App.css";
import RecentTransaction from "./components/RecentTransaction/RecentTransaction";

const App = () => {
  // ---All hooks ---

  // ---All funct below---

  return (
    <>
      <div className="container">
        <div className="ExpenseTracker">
          <h1>Expense Tracker</h1>
          <Display></Display>
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
            <TopExpensesCard></TopExpensesCard>
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
