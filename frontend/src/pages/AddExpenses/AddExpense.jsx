import React from "react";

const AddExpense = ({
  newExpenseModal,
  setNewExpenseModal,
  setExpense,
  expense,
  onExpenseSubmitHandler,
}) => {
  return (
    <div>
      {newExpenseModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <form
            onSubmit={onExpenseSubmitHandler}
            className="bg-white shadow rounded-lg p-6 w-full max-w-lg mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4">Add Expense</h2>

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                required
                value={expense.title}
                onChange={(e) =>
                  setExpense((prev) => ({ ...prev, title: e.target.value }))
                }
                name="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                required
                value={expense.amount}
                onChange={(e) =>
                  setExpense((prev) => ({ ...prev, amount: e.target.value }))
                }
                name="amount"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                required
                value={expense.description}
                onChange={(e) =>
                  setExpense((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                name="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                onChange={(e) =>
                  setExpense((prev) => ({
                    ...prev,
                    category: e.target.value,
                  }))
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="food">Food</option>
                <option value="petrol">Petrol</option>
                <option value="salary">Salary</option>
                <option value="entertainment">Entertainment</option>
                <option value="etc">etc</option>
              </select>
            </div>

            <div className="flex items-center justify-start gap-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
              <button
                onClick={() => setNewExpenseModal(false)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddExpense;
