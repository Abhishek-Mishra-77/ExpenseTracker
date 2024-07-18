import React, { useEffect, useState } from "react";
import {
  allUsers
} from "../../services/common";

const LeaderBoard = () => {
  const [leaderExpenses, setLeaderExpenses] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { users } = await allUsers();
        setLeaderExpenses(users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const sortedLeader = leaderExpenses.sort((a, b) => b.totalExpenses - a.totalExpenses);


  return (
    <div className="flex h-screen flex-col justify-between border-e bg-whitesmoke w-full p-24">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_120px] lg:gap-8">
        <div className="h-[80vh] relative rounded-lg bg-gray-200 overflow-y-auto">
          <div className="sticky top-0 bg-gray-200" style={{ zIndex: 1000 }}>
            <div className="h-12 flex justify-start p-4">
              <h2 className="text-gray-400">User leaderboards</h2>
            </div>
            <hr className="border border-gray-300" />
          </div>
          <div className="p-8 ">
            {sortedLeader?.map((data, i) => (
              <div key={i} className="rounded-lg mt-4">
                <div className="p-4 rounded-lg bg-white shadow-lg flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 transform transition-transform duration-300 hover:scale-105">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-purple-800">{data.userName}</h3>

                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-purple-800 p-2">
                      ${data.totalExpenses}
                    </span>
                    <span className={`px-4 py-1 rounded-full ${data.isPremiumUser ? "bg-green-300" : "bg-red-300"} text-green-800 text-sm font-semibold cursor-pointer ${data.isPremiumUser ? "hover:bg-green-400" : "hover:bg-green-400"} hover:text-white transition-colors duration-300`}>
                      {data.isPremiumUser ? "Premium" : "No Premium"}
                    </span>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
