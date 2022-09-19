import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { VscHome } from "react-icons/vsc";
import {
  MdOutlineKeyboardArrowRight,
  MdCheckCircleOutline,
} from "react-icons/md";
import SearchData from "../../data-db/search.json";

import TopBar from "../../components/TopBar";
import DecisionDetails from "../../components/DecisionDetails";

const ApplicationReview = () => {
  const params = useParams();
  const applicationIndex: string = params.applicationIndex as string;

  const data = SearchData["/api/search"]["data"];
  const [item, setItem] = useState(data[0]);

  let FinanceInformationData = {
    "Vehicle Sale Price": item.vehicle.msrp,
    "Trade-in Applied Equity": "-$0.00",
    "Est. Tax, Title & Fees (VA)": "+$650.63",
    "Down Payment": "-$3,286applicationIndex.37",
    "Finance Amount": "$20,362.63",
  };

  let VehicleInformationData = {
    "Vehicle Sale Price": `${item.vehicle.modelYear} ${item.vehicle.make} ${item.vehicle.model}`,
    Mileage: item.vehicle.mileage,
  };

  let ContactInformationData = {
    Name:
      item.Customer.firstName +
      " " +
      item.Customer.middleName +
      " " +
      item.Customer.lastName,
    Email: item.Customer.email,
    Phone: item.Customer.phone,
    "Date Of Birth": item.Customer.DOB,
    "Social Security Number": item.Customer.SSN,
  };

  let HomeStatusData = {
    "Home Address": "1602 Bainbridge Street, Apt, B Richmond, VA 23224",
    "Own Since": "12/12/1980",
    "Monthly Payment": "$1,232.00",
  };

  let EmploymentAndIncomeData = {
    "Employment Status": "Employed",
    Employer: "Phil Cracken",
    Since: "December 1996",
    "Total Income": "$232.00/Hourly",
  };

  useEffect(() => {
    if (!(data.length > 0)) return;

    setItem(data[parseInt(applicationIndex)]);
  }, [data.length > 0]); 

  return (
    <div className="flex flex-col items-center font-lato pb-20">
      <TopBar currentTab={1}/>

      <div className="w-[680px] pt-[50px]">
        <div className="flex flex-start items-center w-full mb-[20px]">
          <Link to="/">
            <VscHome className="cursor-pointer text-decisionDetailColorText w-[20px] h-[20px]" />
          </Link>
          <MdOutlineKeyboardArrowRight className="text-blue900 w-[20px] h-[20px]" />
          <Link to={`/details/${applicationIndex}`}>
            <h4 className="font-medium cursor-pointer text-decisionDetailColorText underline">
              Decision Details
            </h4>
          </Link>
          <MdOutlineKeyboardArrowRight className="text-blue900 w-[20px] h-[20px]" />
          <h4 className="font-medium text-blue900">Application Review</h4>
        </div>

        <div className="flex justify-between">
          <h1 className="font-heading text-blue900 font-bold text-[31px] h-[10px]">
            Application Review
          </h1>
          <button className="btn-blue-hollow">COMPARE PREVIOUS APP</button>
        </div>

        <DecisionDetails
          title="Finance information"
          data={FinanceInformationData}
          addLastUnderline={false}
          lastFontBold={true}
        />
        <DecisionDetails
          title="Vehicle information"
          data={VehicleInformationData}
          addLastUnderline={true}
          lastFontBold={false}
        />
        <DecisionDetails
          title="Contact information"
          data={ContactInformationData}
          addLastUnderline={true}
          lastFontBold={false}
        />
        <DecisionDetails
          title="Home status"
          data={HomeStatusData}
          addLastUnderline={true}
          lastFontBold={false}
        />
        <DecisionDetails
          title="Employment and income"
          data={EmploymentAndIncomeData}
          addLastUnderline={true}
          lastFontBold={false}
        />

        <div className="mt-10 flex flex-col w-full p-8 border-slate200 border-2 rounded-lg">
          <h3 className="mb-4 font-heading text-[20px] text-blue900">
            Credit application terms and conditions
          </h3>

          <p className="whitespace-wrap text-slate600 text-[19px]">
            You must review and agree to the{" "}
            <span className="font-semibold text-slate700">
              Credit Application Terms and Conditions
            </span>{" "}
            to apply for financing.
          </p>

          <div className="mt-4 flex w-full justify-center">
            <button className="btn-blue-filled w-1/3 flex items-center justify-center space-x-1">
              <MdCheckCircleOutline />
              <span>AGREED</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReview;
