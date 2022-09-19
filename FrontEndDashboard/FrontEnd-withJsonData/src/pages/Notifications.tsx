import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import NotificationCard from "../components/NotificationCard";
import TopBar from "../components/TopBar";
//import SearchData from "../data-db/search.json";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Notifications = () => {
  // const [query, setQuery] = useState("");
  localStorage.setItem("notificationsCount", "4");
  const [HameburgerMenuOpen, setHameburgerMenuOpen] = useState(false);

  return (
    <div className="flex justify-center font-lato whitespace-nowrap">
      {HameburgerMenuOpen && (
        <div className="sm:hidden left-0 absolute h-screen bg-white shadow-lg w-1/2">
          <div className="px-[15px] text-md">
            <div className="flex my-2 w-full justify-between items-center">
              <img
                alt="NotificationsLogo-NotificationsPage"
                width="50px"
                height="22px"
                src="/imgs/NotificationsLogo.png"
                className="mr-[-0.48px] place-items-end"
              />
              <VscClose
                onClick={() => setHameburgerMenuOpen(!HameburgerMenuOpen)}
                className="w-[25px] h-[25px]"
              />
            </div>
            <Link to="/">
              <h1 className="py-3 border-t border-slate200">Applications</h1>
            </Link>
            <Link to="/notifications">
              <h1 className="py-3 border-t border-slate200">
                Notifications & Alerts
              </h1>
            </Link>
            <h1 className="py-3 border-t border-slate200">Favorites</h1>

            <h3 className="text-right px-[15px] mb-[10px] text-[#1773cf] underline">
              Clear
            </h3>

            <div className="px-[15px] pb-[20px] border-b border-slate200 mb-[5px] flex items-center text-md text-sideColor">
              <input type="checkbox" className="mr-[10px] w-[24px] h-[24px]" />
              <h3>Cleared Alerts</h3>
            </div>
          </div>
        </div>
      )}
      <div className="overslate700-x-clip lg:w-[1280px] sm:w-[640px] w-full h-[900px]">
        <TopBar
          HamburgerMenuOpen={HameburgerMenuOpen}
          setHamburgerMenuOpen={setHameburgerMenuOpen}
          currentTab={2}
        />

        <div className="flex h-full w-full px-3">
          <div className="hidden sm:flex flex-start flex-col h-full w-1/2 sm:basis-1/4 top-[95px] border-r-2 bg-[#fafafa] border-slate200">
            <h3 className="text-right px-[15px] mt-[40px] mb-[40px] text-[#1773cf] underline">
              Clear
            </h3>

            <div className="px-[15px] pb-[60px] border-b border-slate200 mb-[5px] flex items-center text-md text-sideColor">
              <input type="checkbox" className="mr-[10px] w-[24px] h-[24px]" />
              <h3>Cleared Alerts</h3>
            </div>
          </div>
          <div className="basis-full flex flex-col items-center h-full">
            <div className="mt-[25px] w-full sm:px-20">
              <div className="flex items-center justify-between mb-[10px] mt-[18px] p-[7px] w-full h-[56px] border border-[#dedfdf] rounded-[8px]">
                <input
                
                  onChange={(event) => console.log(event.target.value)}
                  className="outline-none bg-right w-full h-full rounded-[8px] text-slate700 text-sm"
                  placeholder="Search by Customer Name, Date, Stock Number, or Associate Name"
                />
                <BsSearch className="w-[20px] h-[20px] text-blue900"></BsSearch>
              </div>

              <h2 className="font-heading text-blue900 text-[24px] mt-[20px] mb-[20px]">
                Notifications & Alerts
              </h2>
            </div>

            <div className="mt-[50px] w-full sm:px-20 space-y-[25px]">
              <NotificationCard
                heading="Server Issues 05/12/2022"
                message="Supporting copy"
                color="green"
              />
              <NotificationCard
                heading="Headline"
                message="Supporting copy"
                color="grey"
              />
              <NotificationCard
                heading="Headline"
                message="Supporting copy"
                color="yellow"
              />
              <NotificationCard
                heading="DNDB"
                message="Supporting copy"
                color="red"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
