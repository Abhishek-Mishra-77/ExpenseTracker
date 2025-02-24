import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUserDetails } from "../../services/common";
import { useDispatch, useSelector } from "react-redux";
import { userDetails, removeToken } from "../../store/userSlice";
import { toast } from "react-toastify";
import ConfirmationModal from "../../components/ConfirmationModel";

const TabSection = () => {
  const [confirmationModal, setConfirmationModal] = useState(false);
  const location = useLocation()?.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.userInfo);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUserDetails();
      dispatch(userDetails(response));
    };
    fetchUser();
  }, []);

  const userNameInitial =
    user && user.userName ? user.userName.charAt(0).toUpperCase() : "";

  const onLogoutHandler = () => {
    toast.success("You are logged out.");
    localStorage.removeItem("user");
    navigate("/auth");
    setConfirmationModal(false);
    dispatch(removeToken());
  };

  return (
    <div className="h-screen flex-col justify-between border-e bg-white w-[20%] hidden md:block">
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <button
          onClick={() => setConfirmationModal(true)}
          className="flex items-center justify-center w-full gap-2 bg-white p-4 hover:bg-gray-50 sm:flex-col"
        >
          {user && user.userName ? (
            <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center object-cover">
              <span className="text-lg font-medium">{userNameInitial}</span>
            </div>
          ) : (
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="size-10 rounded-full object-cover"
            />
          )}

          <div>
            <p className="flex text-sm sm:flex sm:flex-col sm:items-center">
              <strong className="block font-medium">
                {user && user.userName?.toUpperCase()}
              </strong>
              <span>{user && user.email}</span>
            </p>
          </div>
        </button>
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
              to={"/leaderboard"}
              className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                location === "/setting" &&
                "bg-gray-100 text-sm font-medium text-gray-700"
              } text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
            >
              LeaderBoard
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
      <ConfirmationModal
        confirmationModal={confirmationModal}
        setConfirmationModal={setConfirmationModal}
        onSubmitHandler={onLogoutHandler}
        heading="Confirm Logout"
        message="Are you sure you want to log out? Any unsaved changes will be lost."
      />
    </div>
  );
};

export default TabSection;
