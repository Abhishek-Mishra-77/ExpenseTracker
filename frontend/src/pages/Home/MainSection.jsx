import React from "react";
import Expenses from "./Expenses";

const MainSection = () => {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-whitesmoke w-[80%] p-24">
      <Expenses />
    </div>
  );
};

export default MainSection;
