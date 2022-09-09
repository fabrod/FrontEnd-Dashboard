import React from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { VscHome } from "react-icons/vsc";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SearchData from "../../data-db/search.json";

import DecisionRecap from "../../components/DecisionRecap";
import Documents from "../../components/Documents";
import DecisionDetails from "../../components/DecisionDetails";

const Details = () => {
  const params = useParams();
  const [tabIndex, setTabIndex] = useState(0);
  const applicationIndex: string = params.applicationIndex as string;

  const data = SearchData["/api/search"]["data"];
  const [item, setItem] = useState(data[0]);
  let DecisionDetailsData = {
    "App number": "1112018855",
    "Transaction ID": "45304",
    "Application created": `${item.vehicle.date} 6:32 PM`,
    "Analyst phone": "(555) 555-5555",
    "Risk Profile": "Debt, Income, Residence",
    "Finance company comments": "AQH",
  };

  useEffect(() => {
    if (!(data.length > 0)) return;

    setItem(data[parseInt(applicationIndex)]);
  }, [data.length > 0]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col items-center font-lato pt-[80px] pb-20">
      <div className="w-[680px]">
        <div className="flex flex-start items-center w-full mb-[20px]">
          <Link to="/">
            <VscHome className="cursor-pointer text-decisionDetailColorText w-[20px] h-[20px]" />
          </Link>
          <MdOutlineKeyboardArrowRight className="text-blue900 w-[20px] h-[20px]" />
          <h4 className="font-medium text-blue900">Decision Details</h4>
        </div>

        <div className="flex flex-col justify-between w-full min-h-[204px] rounded-[8px] border border-slate200">
          <div className="flex flex-row justify-between px-[14px] py-[12px]">
            <div className="flex flex-col">
              <h2 className="font-heading text-blue900 tracking-[0.38px] font-bold text-lg mb-[5px]">
                {item.Customer.firstName +
                  " " +
                  item.Customer.middleName +
                  " " +
                  item.Customer.lastName}
              </h2>
              <p className="text-[#2a343d] text-md">
                {item.vehicle.modelYear} {item.vehicle.make}{" "}
                {item.vehicle.model}
              </p>
              <p className="text-slate700 text-sm">
                {item.vehicle.msrp} • {item.vehicle.mileage} • Stock #{" "}
                {item.vehicle.stockNumber}
              </p>
            </div>
            <div className="flex flex-col text-right text-slate700 text-sm">
              <p className="my-[3px]">Order# 151832 • {item.applicationId}</p>
              <p>{item.vehicle.vin}</p>
              <Link to={`/review/${applicationIndex}`}>
                <p className="text-decisionDetailColorText hover:underline cursor-pointer font-bold text-sm">
                  REVIEW APP
                </p>
              </Link>
            </div>
          </div>
          <div
            className={`px-[14px] flex flex-row justify-between items-center h-[49px] w-full bg-green100 rounded-b-[8px] ${
              item.cardColor.toLowerCase() === "green" ? "bg-green100" : ""
            } ${
              item.cardColor.toLowerCase() === "yellow" ? "bg-yellow100" : ""
            } ${item.cardColor.toLowerCase() === "red" ? "bg-red100" : ""} ${
              item.cardColor.toLowerCase() === "grey" ? "bg-slate100" : ""
            }`}
          >
            <div className="flex flex-row">
              {item.cardColor.toLowerCase() === "green" ? (
                <img
                  alt="TickSymbol-DetailsPage"
                  width="15px"
                  height="15px"
                  src="/imgs/TickSymbol.svg"
                />
              ) : (
                ""
              )}
              {item.cardColor.toLowerCase() === "yellow" ? (
                <img
                  alt="Issue-DetailsPage"
                  width="15px"
                  height="15px"
                  className="fill-blue900"
                  src="/imgs/Issue.svg"
                />
              ) : (
                ""
              )}
              {item.cardColor.toLowerCase() === "red" ? (
                <img
                  alt="RedIssue-DetailsPage"
                  width="15px"
                  height="15px"
                  src="/imgs/RedIssue.svg"
                />
              ) : (
                ""
              )}
              {item.cardColor.toLowerCase() === "grey" ? (
                <img
                  alt="Clock-DetailsPage"
                  width="15px"
                  height="15px"
                  src="/imgs/Clock.svg"
                />
              ) : (
                ""
              )}

              <p
                className={`ml-[5px] text-md ${
                  item.cardColor.toLowerCase() === "green"
                    ? "text-[#206609]"
                    : ""
                } ${
                  item.cardColor.toLowerCase() === "yellow"
                    ? "text-sideColor"
                    : ""
                } ${
                  item.cardColor.toLowerCase() === "red"
                    ? "text-declineColor"
                    : ""
                } ${
                  item.cardColor.toLowerCase() === "gray" ? "text-slate700" : ""
                } `}
              >
                {item.vehicle.condition}
              </p>
            </div>
          </div>
        </div>

        <div className="my-5 flex flex-row justify-center border-b border-slate700">
          <button
            onClick={() => setTabIndex(0)}
            className={`p-4 font-semibold text-md h-full ${
              tabIndex === 0
                ? "border-b-4 text-decisionDetailColorText border-decisionDetailColorText "
                : "text-slate600"
            }`}
          >
            Ally
          </button>
          <button
            onClick={() => setTabIndex(1)}
            className={`p-4 font-semibold text-md h-full ${
              tabIndex === 1
                ? "border-b-4 text-decisionDetailColorText border-decisionDetailColorText "
                : "text-slate600"
            }`}
          >
            CapitalOne
          </button>
          <button
            onClick={() => setTabIndex(2)}
            className={`p-4 font-semibold text-md h-full ${
              tabIndex === 2
                ? "border-b-4 text-decisionDetailColorText border-decisionDetailColorText "
                : "text-slate600"
            }`}
          >
            CarMax
          </button>
          <button
            onClick={() => setTabIndex(3)}
            className={`p-4 font-semibold text-md h-full ${
              tabIndex === 3
                ? "border-b-4 text-decisionDetailColorText border-decisionDetailColorText "
                : "text-slate600"
            }`}
          >
            WellsFargo
          </button>
        </div>

        <DecisionRecap item={item} />
        <Documents />
        <DecisionDetails
          title="Decision details"
          data={DecisionDetailsData}
          addLastUnderline={false}
          lastFontBold={false}
        />
      </div>
    </div>
  );
};

export default Details;
