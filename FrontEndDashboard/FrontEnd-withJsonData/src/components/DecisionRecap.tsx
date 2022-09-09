import React from "react";
import { Link } from "react-router-dom";

type PropsTypes = {
  item: {
    applicationIndex: number;
    applicationId: string;
    cardColor: string;
    vehicle: {
      stockNumber: number;
      make: string;
      model: string;
      modelYear: number;
      mileage: string;
      msrp: string;
      vin?: string;
      date: string;
      condition: string;
      Color?: string;
    };
    Customer: {
      firstName: string;
      middleName: string;
      lastName: string;
      email: string;
      phone: string;
      DOB: string;
      SSN: string;
    };
  };
};

const DecisionRecap = (props: PropsTypes) => {
  return (
    <div className="flex flex-col w-full p-8 border-slate200 border-2 rounded-lg">
      <div className="flex w-full justify-between mb-4">
        <div className="flex space-x-4 items-center">
          <h2 className="font-heading text-[20px] text-blue900">
            Decision recap
          </h2>
          <div className="items-center p-1 rounded text-creditApprovalText space-x-1 font-medium text-sm bg-green100 flex justify-center">
            <img
              alt="TickSymbol-DecisionRecapComponent"
              className="w-[18px] h-[18px]"
              src="..//imgs/TickSymbol.svg"
            ></img>
            <h3>1 Straight Approval</h3>
          </div>
        </div>
        <img
          alt="Ally-DecisionRecapComponent"
          className="w-[70px] h-[40px]"
          src="..//imgs/Ally.png"
        />
      </div>

      <div className="py-2 text-md flex w-full justify-between items-center border-b border-slate200">
        <p className="text-slate600"> Vehicle Sale Price</p>
        <h3 className="text-blue900">{props.item.vehicle.msrp}.00</h3>
      </div>

      <div className="py-2 text-md flex w-full justify-between items-center border-b border-slate200 mt-2">
        <p className="text-slate600">Trade-in Applied Equity</p>
        <h3 className="text-blue900">-$0.00</h3>
      </div>

      <div className="py-2 text-md flex w-full justify-between items-center border-b border-slate200 mt-2">
        <p className="text-slate600">Est. Tax, Title & Fees (VA)</p>
        <h3 className="text-blue900">+$650.63</h3>
      </div>

      <div className="py-2 text-md flex w-full justify-between items-center border-b border-slate200 mt-2">
        <p className="text-slate600">Down Payment</p>
        <h3 className="text-blue900 ">-$3,286.37</h3>
      </div>

      <div className="font-bold py-2 mt-2 text-md flex w-full justify-between items-center">
        <h3 className="text-slate700 ">Finance Amount</h3>
        <h3 className="text-blue900 ">$20,362.63</h3>
      </div>

      <div className="mt-6 p-4 px-6 rounded w-full bg-blue100">
        <div className="flex text[12px] text-slate600">
          <h3 className="text-left w-1/3">Terms</h3>
          <h3 className="text-center w-1/3">APR</h3>
          <h3 className="text-right w-1/3">Monthly Payment</h3>
        </div>
        <div className="flex text-slate700 text-md font-bold">
          <h3 className="w-1/3 text-left">72 months</h3>
          <h3 className="w-1/3 text-center">15</h3>
          <h3 className="w-1/3 text-right">$463</h3>
        </div>
      </div>

      <div className="mt-10 flex w-full justify-center items-center">
        <Link to={`/manual/${props.item.applicationIndex}`}>
          <button className="rounded-lg px-8 py-3 font-bold text-decisionDetailColorText text-md">
            ADD MANUAL DECISION
          </button>
        </Link>
        <button className="btn-blue-hollow">REQUEST REDECISION</button>
      </div>
    </div>
  );
};

export default DecisionRecap;
