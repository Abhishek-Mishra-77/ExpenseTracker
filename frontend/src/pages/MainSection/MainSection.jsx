import React, { useState, useEffect } from "react";
import Expenses from "../Expenses/Expenses";
import ExpenseGraph from "../ExpenseChart/ExpenseChart";
import QuickAccess from "../QuickAccess/QuickAccess";
import ExpensePiChart from "../ExpenseChart/ExpensePiChart";
import { allExpense, REACT_IP, SERVER_PORT } from "../../services/common";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";

const MainSection = () => {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    description: "",
    category: "",
  });
  const [newExpenseModal, setNewExpenseModal] = useState(false);
  const { userInfo, isLogin } = useSelector((state) => state?.user);

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
  }, [isLogin, userInfo]);

  const onExpenseSubmitHandler = async (e) => {
    e.preventDefault();

    if (!expense) {
      toast.warning("Please add expense.");
      return;
    }

    try {
      await axios.post(
        `http://${REACT_IP}:${SERVER_PORT}/expense/addexpense`,
        {
          expense,
        },
        {
          headers: {
            token: isLogin,
          },
        }
      );
      setExpenses((prev) => (prev ? [...prev, expense] : [expense]));

      toast.success("Expense added successfully.");
      setNewExpenseModal(false);
      setExpense((prev) => ({
        ...prev,
        title: "",
        amount: "",
        description: "",
        category: "",
      }));
    } catch (error) {
      console.log(error);
      toast.error("Some");
    }
  };

  const onRemoveExpenseHandler = async (id) => {
    try {
      await axios.post(
        `http://${REACT_IP}:${SERVER_PORT}/expense/removeexpense/${id}`,
        {},
        {
          headers: {
            token: isLogin,
          },
        }
      );
      const updatedExpenses = expenses.filter((data) => data.id != id);
      setExpenses(updatedExpenses);
      toast.success("Expense removed successfully");
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="flex h-screen flex-col justify-between border-e bg-whitesmoke w-full p-24">
      <div className="grid grid-cols-1 gap-4 lg:grid lg:grid-cols-3 lg:gap-8">
        <Expenses
          expenses={expenses}
          onRemoveExpenseHandler={onRemoveExpenseHandler}
        />
        <QuickAccess
          setNewExpenseModal={setNewExpenseModal}
          newExpenseModal={newExpenseModal}
          setExpense={setExpense}
          expense={expense}
          onExpenseSubmitHandler={onExpenseSubmitHandler}
        />
        <ExpenseGraph />
        <ExpensePiChart />
      </div>
    </div>
  );
};

export default MainSection;
