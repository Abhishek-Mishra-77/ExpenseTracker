import React from "react";
import Expenses from "../Expenses/Expenses";
import ExpenseGraph from "../ExpenseChart/ExpenseChart";
import QuickAccess from "../QuickAccess/QuickAccess";
import ExpensePiChart from "../ExpenseChart/ExpensePiChart";

const MainSection = () => {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-whitesmoke w-full p-24">
      <div className="grid grid-cols-1 gap-4 lg:grid lg:grid-cols-3 lg:gap-8">
        <Expenses />
        <QuickAccess />
        <ExpenseGraph />
        <ExpensePiChart />
      </div>
    </div>
  );
};

export default MainSection;
