import React, { useEffect, useState } from "react";
import { allExpense } from "../../services/common";
const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const expense = await allExpense();
        setExpenses(expense);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExpense();
  }, []);

  console.log(expenses);

  return (
    <div className="h-80 rounded-lg bg-gray-200 lg:col-span-2">
      <div>
        <h2 className="text-gray-400 flex justify-start p-4">All Tasks</h2>
      </div>
      <hr className="border border-gray-300" />
      <div className="flex flex-col justify-center items-center gap-4 p-2 overflow-y-auto h-64 border-2 border-red-200 pt-20">
        {expenses?.map((data) => (
          <div className="w-[90%] p-2 rounded-lg bg-white shadow-md flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800">{data.title}</h3>
              <p className="text-sm text-gray-600">{data.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold text-gray-800">
                ${data.amount}
              </span>
              <span
                className={`px-2 py-1 rounded-full ${
                  data.isCompleted
                    ? "bg-green-200 text-green-800"
                    : "bg-yellow-200 text-yellow-800 "
                }  text-sm font-semibold`}
              >
                {data.isCompleted ? "Completed" : "Pending"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
