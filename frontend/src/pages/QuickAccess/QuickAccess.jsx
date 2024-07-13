import { FaPlus } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import AddExpense from "../AddExpenses/AddExpense";
import { REACT_IP, SERVER_PORT } from "../../services/common";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { userDetails } from "../../store/userSlice";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

const QuickAccess = ({
  setNewExpenseModal,
  newExpenseModal,
  setExpense,
  expense,
  onExpenseSubmitHandler,
}) => {
  const { userInfo, isLogin } = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const onToken = async (token) => {
    try {
      await axios.post(
        `http://${REACT_IP}:${SERVER_PORT}/premium/create-checkout-session`,
        {
          details: token,
        }
      );
      const updatedUser = { ...userInfo, isPremiumUser: true };
      dispatch(userDetails(updatedUser));
      toast.success("Now you are premium user.");
    } catch (error) {
      toast.error("Something went wrong please make another try for payment.");
    }
  };
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
          {userInfo?.isPremiumUser ? (
            <div className="h-16 w-[80%] rounded-lg bg-green-400 flex justify-center items-center cursor-pointer">
              <div className="flex justify-center items-center text-white">
                <FaCheckCircle className="text-3xl mr-2" />
                <h1 className="text-xl">Premium User</h1>
              </div>
            </div>
          ) : (
            <div className="h-16 w-[80%] rounded-lg bg-gray-300 flex justify-center items-center cursor-pointer">
              <StripeCheckout
                name="Three Common Co."
                description="Big Data Stuff"
                image="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/Blog/Graphic/payment-terms-header-image-us-en.jpg"
                ComponentClass="div"
                panelLabel="Give Money"
                amount={1000}
                currency="INR"
                stripeKey="pk_test_51OKItmSIeTa6z5FVc03TQk2ilyBGtK9EYPds8a3rq2SEFpQ0kRS7BwoL4BQn69OF86a2XkULaReKTlsE1PrLJwqq007edzU8ao"
                locale="en"
                email={userInfo?.email}
                shippingAddress
                billingAddress={false}
                zipCode={false}
                alipay
                bitcoin
                allowRememberMe
                token={onToken}
                reconfigureOnUpdate={false}
              >
                <button className="btn btn-primary">
                  <div className="flex justify-center items-center">
                    <FaMoneyBillTrendUp />
                    <h1 className="ml-2"> Buy Premium</h1>
                  </div>
                </button>
              </StripeCheckout>
            </div>
          )}
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
