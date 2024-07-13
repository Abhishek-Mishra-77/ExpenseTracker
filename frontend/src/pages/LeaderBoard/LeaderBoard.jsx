import React from "react";

const LeaderBoard = () => {
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
          <div className="p-8">
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
            <div className="h-24 rounded-lg bg-gray-100 mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
