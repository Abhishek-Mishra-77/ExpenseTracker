import axios from "axios";
export const REACT_IP = "localhost";
export const SERVER_PORT = "5000";

const token = JSON.parse(localStorage.getItem("user"));
export const allExpense = async () => {
  try {
    const response = await axios.post(
      `http://${REACT_IP}:${SERVER_PORT}/expense/allexpenses`,
      {},
      {
        headers: {
          token: token,
        },
      }
    );
    const { expenses } = response?.data;
    console.log(response)
    return expenses;
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = async () => {
  try {
    const response = await axios.post(
      `http://${REACT_IP}:${SERVER_PORT}/auth/getUser`,
      {},
      {
        headers: {
          token: token,
        },
      }
    );
    return response?.data?.user;
  } catch (error) {
    console.log(error);
  }
};

export const allUsers = async () => {
  try {
    const response = await axios.post(
      `http://${REACT_IP}:${SERVER_PORT}/auth`,
      {},
      {
        headers: {
          token: token,
        },
      }
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const allUserExpenses = async () => {
  try {
    const response = await axios.post(
      `http://${REACT_IP}:${SERVER_PORT}/expense`,
      {},
      {
        headers: {
          token: token,
        },
      }
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

allUserExpenses()