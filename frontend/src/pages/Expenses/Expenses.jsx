import { MdDelete } from "react-icons/md";
const Expenses = ({ expenses, onRemoveExpenseHandler }) => {
  return (
    <div className="h-80 rounded-lg bg-gray-200 lg:col-span-2">
      <div>
        <h2 className="text-gray-400 flex justify-start p-4">All Tasks</h2>
      </div>
      <hr className="border border-gray-300" />
      <div className="flex flex-col  items-center gap-4 p-2 overflow-y-auto h-64  ">
        {expenses?.map((data) => (
          <div className="w-[90%] p-2 rounded-lg bg-white shadow-md flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800">{data.title}</h3>
              <p className="text-sm text-gray-600">{data.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold text-gray-800 p-2">
                ${data.amount}
              </span>
              <span
                onClick={() => onRemoveExpenseHandler(data.id)}
                className={`px-2  rounded-full  bg-red-300 text-red-800 text-sm font-semibold cursor-pointer`}
              >
                <MdDelete className="w-[25px] h-8" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
