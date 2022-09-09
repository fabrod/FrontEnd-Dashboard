import React from "react";

import { useState } from "react";
import { MdNotifications } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
//import '@horizon/card/hzn-card';
//<hzn-card tone="brand">Brand</hzn-card>   HORIZON IS WORKING
//<button className="kmx-button kmx-button--primary">   LEGOS IS WORKING
//flat button
//</button>

type PropsTypes = {
  currentTab: number;
  HameburgerMenuOpen?: boolean;
  setHameburgerMenuOpen?: (bool:boolean)=>void;
};

const TopBar: React.FC<PropsTypes> = (props:PropsTypes) => {
  // const [associTopBarate, setAssociate] = useState("Associate");

  // function nameChange() {
  //   setAssociate("Mike");
  // }
  const [currentTab, setCurrentTab] = useState(props.currentTab);

  return (
    <nav className="z-50 w-full flex items-center justify-center flex-col shadow-lg h-fit">
      <div className="w-full h-[50px] px-[30px] flex flex-row justify-between mt-[1px]">
        <div className="flex sm:w-[214px] items-center">
          <div className="w-[101px] h-[20px] flex flex-row items-center">
            <GiHamburgerMenu
              onClick={() =>
                props.setHameburgerMenuOpen(!props.HameburgerMenuOpen)
              }
              className="sm:hidden text-blue900 w-[20px] h-[20px] mr-4"
            ></GiHamburgerMenu>
            <img
              alt="NotificationsLogo-NotificationsPage"
              width="50px"
              height="22px"
              src="/imgs/NotificationsLogo.png"
              className="mr-[-0.48px] place-items-end"
            />
            <h2 className="hidden sm:inline text-blue900 text-[18px] ml-[15px]">
              Sales Manager Workbench
            </h2>
          </div>
        </div>
        <div className="flex w-fit items-center space-x-[5px] sm:space-x-[15px] mr-2 sm:mr-0">
          <div className="text-sm text-center bg-decisionDetailColorText font-bold rounded-full w-[25px] h-[25px] border-2 border-decisionDetailColorText text-blue100">
            CL
          </div>
          <select
            name="addr"
            id="addr"
            className="outline-none text-decisionDetailColorText bg-transparent"
          >
            <option value="#7101 West Broad">#7101 West Broad</option>
          </select>
          <div className="flex relative">
            <Link to="/notifications">
              <MdNotifications className="w-[30px] h-[30px] text-decisionDetailColorText"></MdNotifications>
            </Link>
            {parseInt(localStorage.getItem("notificationsCount")) !== 0 ? (
              <div className="text-center absolute left-4 text-[13px] bg-red-500 text-white w-[19px] rounded-full">
                {localStorage.getItem("notificationsCount")}
              </div>
            ) : (
              ""
            )}
          </div>
          <HiOutlineDotsVertical className="text-blue900 h-[20px] w-[20px]"></HiOutlineDotsVertical>
        </div>
      </div>

      {!props.HameburgerMenuOpen &&
        <div className="hidden sm:flex w-full h-[40px] sm:px-[30px] flex-row justify-between mt-[1px] bg-[#0559ad]">
          <div className="flex w-fit items-center">
            <Link
              to="/"
              onClick={() => setCurrentTab(1)}
              className={
                currentTab === 1
                  ? "flex justify-center items-center w-full h-full cursor-pointer px-[15px] sm:px-[20px] border-b-[3px] border-white text-white"
                  : "cursor-pointer px-[15px] sm:px-[20px] text-white"
              }
            >
              <h2>Applications</h2>
            </Link>
            <Link
              to="/notifications"
              onClick={() => setCurrentTab(2)}
              className={
                currentTab === 2
                  ? "flex justify-center items-center w-full h-full cursor-pointer px-[15px] sm:px-[20px] border-b-[3px] border-white text-white"
                  : "cursor-pointer px-[15px] sm:px-[20px] text-white"
              }
            >
              <h2>Notifications & Alerts</h2>
            </Link>
            <div
              onClick={() => setCurrentTab(3)}
              className={
                currentTab === 3
                  ? "flex justify-center items-center w-full h-full cursor-pointer px-[15px] sm:px-[20px] border-b-[3px] border-white text-white"
                  : "cursor-pointer px-[15px] sm:px-[20px] text-white"
              }
            >
              <h2>Favorites</h2>
            </div>
          </div>
        </div>
      }
    </nav>
  );
};

export default TopBar;
