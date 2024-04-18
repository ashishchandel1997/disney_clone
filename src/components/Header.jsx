import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const menu = [
  {
    name: "HOME",
    icon: HiHome,
  },
  {
    name: "SEARCH",
    icon: HiMagnifyingGlass,
  },
  {
    name: "WATCH LIST",
    icon: HiPlus,
  },
  {
    name: "ORIGINALS",
    icon: HiStar,
  },
  {
    name: "MOVIES",
    icon: HiPlayCircle,
  },
  {
    name: "SERIES",
    icon: HiTv,
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  return (
    <div className="flex items-center justify-between ">
      <div className=" flex items-center gap-8">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover text-white "
        />
        <div className="md:flex gap-8 hidden">
          {menu.map((ele) => {
            return (
              <React.Fragment key={ele.name}>
                <HeaderItem Icon={ele.icon} name={ele.name} />
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex gap-8 md:hidden">
          {menu.map((ele, index) => {
            return (
              <React.Fragment key={ele.name}>
                {index < 3 && <HeaderItem Icon={ele.icon} name="" />}
              </React.Fragment>
            );
          })}
        </div>
        <div className="md:hidden">
            <div onClick={handleToggle}>
          <HeaderItem Icon={HiDotsVertical} name="" />
          </div>
          {toggle && (
            <div className="absolute mt-4 bg-black p-3 right-3 border border-gray-300 rounded-sm">
              {menu.map((ele, index) => {
                return (
                  <React.Fragment key={ele.name}>
                    {index > 2 && (
                      <HeaderItem Icon={ele.icon} name={ele.name} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?reverse"
          className="w-[50px] md:w-[60px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
