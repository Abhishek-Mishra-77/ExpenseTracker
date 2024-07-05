import { FaPlus } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import AddExpense from "../AddExpenses/AddExpense";

const QuickAccess = ({
  setNewExpenseModal,
  newExpenseModal,
  setExpense,
  expense,
  onExpenseSubmitHandler,
}) => {
  return (
    <div>
      <div className="h-80 rounded-lg bg-gray-200 ">
        <div className="h-12">
          <h2 className="text-gray-400 flex justify-start p-4">Quick Access</h2>
        </div>
        <hr className="border border-gray-300" />
        <div className="flex flex-col justify-center items-center mt-4 gap-4">
          <div
            onClick={() => setNewExpenseModal(true)}
            className="h-16 w-[80%] rounded-lg bg-gray-300 flex justify-center items-center cursor-pointer"
          >
            <div className="flex justify-center items-center">
              <FaPlus />
              <h1 className=" ml-2">New Expense</h1>
            </div>
          </div>
          <div className="h-16 w-[80%] rounded-lg bg-gray-300 flex justify-center items-center cursor-pointer">
            <div className="flex justify-center items-center">
              <FaDownload />
              <h1 className="w-24 ml-2">Download</h1>
            </div>
          </div>
          <div className="h-16  w-[80%] rounded-lg bg-gray-300 flex justify-center items-center cursor-pointer">
            <div className="flex justify-center items-center">
              <FaPlus />
              <h1 className=" ml-2">Daily Expense</h1>
            </div>
          </div>
        </div>
      </div>
      {/* ADD EXPENSE MODAL */}
      <AddExpense
        newExpenseModal={newExpenseModal}
        setNewExpenseModal={setNewExpenseModal}
        setExpense={setExpense}
        expense={expense}
        onExpenseSubmitHandler={onExpenseSubmitHandler}
      />
    </div>
  );
};

export default QuickAccess;
