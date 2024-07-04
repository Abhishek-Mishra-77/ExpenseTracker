import axios from "axios";

export const REACT_IP = "localhost";
export const SERVER_PORT = "5000";

export const allExpense = async () => {
  try {
    const response = await axios.get(
      `http://${REACT_IP}:${SERVER_PORT}/expense/allexpenses`
    );
    const { expenses } = response?.data;
    return expenses;
  } catch (error) {
    console.log(error);
  }
};
