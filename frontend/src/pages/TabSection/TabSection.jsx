import React from "react";
import { Link, useLocation } from "react-router-dom";

const TabSection = () => {
  const location = useLocation()?.pathname;

  return (
    <div className="h-screen flex-col justify-between border-e bg-white w-[20%] hidden md:block">
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 sm:flex-col"
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="size-10 rounded-full object-cover"
          />

          <div>
            <p className="flex text-sm sm:flex sm:flex-col sm:items-center">
              <strong className="block font-medium">Abhishek Mishra</strong>
              <span>abhishek@gmail.com </span>
            </p>
          </div>
        </a>
      </div>
      <div className="px-4 py-6">
        <h1 className="grid h-10 w-[100%] place-content-center rounded-lg bg-gray-200 font-bold  text-gray-600 md:text-sm">
          Expense Tracker
        </h1>
        <ul className="mt-6 space-y-1">
          <li>
            <Link
              to={"/home"}
              className={`block rounded-lg ${
                location === "/home" &&
                "bg-gray-100 text-sm font-medium text-gray-700"
              } px-4 py-2 `}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to={"/expense"}
              className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                location === "/expense" &&
                "bg-gray-100 text-sm font-medium text-gray-700"
              } text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
            >
              Expenses
            </Link>
          </li>

          <li>
            <Link
              to={"/setting"}
              className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                location === "/setting" &&
                "bg-gray-100 text-sm font-medium text-gray-700"
              } text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabSection;
