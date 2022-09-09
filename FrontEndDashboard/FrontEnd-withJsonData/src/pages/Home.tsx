import React from "react";
import TopBar from "../components/TopBar";
import Cards from "../components/Cards";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { VscCalendar, VscClose } from "react-icons/vsc";
import PreQualified from "../components/PreQualified";
import OrderEntries from "../components/OrderEntries";
import CreditSearch from "./CreditSearch";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [currentTab, setCurrentTab] = useState(1);
  const [HamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  let [ApiResults, setApiResults] = useState([]);
  const [showCards, setShowCards] = useState(false);

  return (
    <div className="flex justify-center font-lato whitespace-nowrap">
      <CreditSearch
        ApiResults={ApiResults}
        setApiResults={(e) => setApiResults(e)}
        setShowCards={(e) => setShowCards(e)}
      />

      {HamburgerMenuOpen && (
        <div className="sm:hidden left-0 absolute h-screen bg-white shadow-lg w-2/3">
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
                onClick={() => setHamburgerMenuOpen(!HamburgerMenuOpen)}
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

            <div className="sm:px-[20px] py-[10px] mb-[10px]">
              <h5 className="pl-[4px] text-sm text-blue900">Show from</h5>
              <input
                type="date"
                className="bg-white focus:text-slate700 outline-none px-2 placeholder:text-slate600 text-slate600 font-medium w-full border-b-[1px] focus:border-slate700 border-slate600"
              />
            </div>
          </div>
        </div>
      )}
      <div className="lg:w-[1280px] sm:w-[640px] w-full h-[900px]">
        <TopBar
          HamburgerMenuOpen={HamburgerMenuOpen}
          setHamburgerMenuOpen={setHamburgerMenuOpen}
          currentTab={1}
        />

        <CreditSearch />

        <div className="w-full flex justify-center px-3 lg:px-0">
          <div className="top-[25px] lg:mx-52 w-full">
            <div className="flex items-center justify-between mb-[10px] mt-[18px] p-[7px] w-full h-10 sm:h-14 border border-[#dedfdf] rounded-[8px]">
              <input
                onChange={(event) => setQuery(event.target.value)}
                className="outline-none bg-right w-full h-full rounded-[8px] text-slate700 text-sm"
                // placeholder="Search by Customer Name, Date, Stock Number, or Associate Name"
                placeholder="Search by Make, Model, or Type"
              />
              <BsSearch className="w-[20px] h-[20px] text-blue900"></BsSearch>
            </div>

            <div className="mb-5 hidden sm:block">
              <h2>{Math.floor(Math.random() * 125)} Results</h2>
            </div>

            <div>
              <h2 className="font-heading text-blue900 text-lg">
                Applications
              </h2>
            </div>

            <div className="flex justify-between items-center text-md w-full mb-[40px]">
              <div className="hidden sm:flex text-center flex-row w-full">
                <div
                  onClick={() => setCurrentTab(1)}
                  className={
                    currentTab === 1
                      ? "cursor-pointer sm:text-base text-sm basis-1/3 px-2 sm:px-1 lg:px-6 py-2.5 border-b-[3px] border-decisionDetailColorText"
                      : "cursor-pointer sm:text-base text-sm basis-1/3 px-2 sm:px-1 lg:px-6 py-2.5 text-slate600"
                  }
                >
                  Applications (8)
                </div>
                <div
                  onClick={() => setCurrentTab(2)}
                  className={
                    currentTab === 2
                      ? "cursor-pointer sm:text-base text-sm basis-1/3 px-2 sm:px-1 lg:px-6 py-2.5 border-b-[3px] border-decisionDetailColorText"
                      : "cursor-pointer sm:text-base text-sm basis-1/3 px-2 sm:px-1 lg:px-6 py-2.5 text-slate600"
                  }
                >
                  Order Entries (2)
                </div>
                <div
                  onClick={() => setCurrentTab(3)}
                  className={
                    currentTab === 3
                      ? "cursor-pointer sm:text-base text-sm basis-1/3 px-2 sm:px-1 lg:px-6 py-2.5 border-b-[3px] border-decisionDetailColorText"
                      : "cursor-pointer sm:text-base text-sm basis-1/3 px-2 sm:px-1 lg:px-6 py-2.5 text-slate600"
                  }
                >
                  Pre-Qualified (2)
                </div>
              </div>

              <div className="hidden sm:block">
                <h6 className="text-sm text-blue900 font-medium">Show from</h6>
                <input
                  type="date"
                  id="ShowFrom"
                  className="h-fit bg-white border-b text-slate600 border-slate700 outline-none"
                />
              </div>

              <div className="sm:hidden w-full sm:px-[20px] py-[10px] mb-[10px]">
                <h5 className="pl-[4px] text-sm text-blue900">
                  Choose application type
                </h5>
                <div className="flex justify-between items-center w-full">
                  <select
                    onChange={(e: { target: { value: string } }) =>
                      setCurrentTab(parseInt(e.target.value))
                    }
                    className="mt-1 py-2 outline-none bg-white border-b-2 border-slate600 w-9/12"
                  >
                    <option value={1}>Applications (8)</option>
                    <option value={2}>Order Entries (2)</option>
                    <option value={3}>Pre-Qualified (2)</option>
                  </select>
                  <VscCalendar className="text-blue900 w-[25px] h-[25px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {currentTab === 1 ? (
          showCards ? (
            <Cards
              // data={SearchData["/api/search"]["data"].filter((item) => {
              data={ApiResults.filter((item) => {
                if (query.toLowerCase() === "") {
                  return item;
                } else if (
                  query
                    .toLowerCase()
                    .trim()
                    // .includes(item.Customer.firstName.toLowerCase().trim()) ||
                    .includes(
                      item.buysCustomer.firstName.toLowerCase().trim()
                    ) ||
                  query
                    .toLowerCase()
                    .trim()
                    // .includes(item.Customer.lastName.toLowerCase().trim())
                    .includes(item.buysCustomer.lastName.toLowerCase().trim())
                ) {
                  return item;
                } else if (
                  query
                    .toLowerCase()
                    .trim()
                    // .includes(item.vehicle.date.toLocaleLowerCase().trim())
                    .includes(item.createdDate.date.toLocaleLowerCase().trim())
                ) {
                  return item;
                } else if (
                  query
                    .toLowerCase()
                    .trim()
                    .includes(item.vehicle.stockNumber.toString())
                ) {
                  return item;
                } else if (
                  query
                    .toLowerCase()
                    .trim()
                    .includes(item.applicationId.toLocaleLowerCase().trim())
                ) {
                  return item;
                }
              })}
            />
          ) : (
            "Loading..."
          )
        ) : (
          ""
        )}
        {currentTab === 2 && <OrderEntries />}
        {currentTab === 3 && <PreQualified />}
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
