import React from "react";

const HeaderItem = ({ Icon, name }) => {
  return (
    <div className="text-white flex items-center gap-2 text-[18px] font-semibold cursor-pointer hover:underline hover:underline-offset-8">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
};

export default HeaderItem;
