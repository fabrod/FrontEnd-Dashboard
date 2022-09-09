import React from "react";
import Card from "./Card";


type PropsTypes = {
  data: {
    applicationId: string;
    vehicle: {
      stockNumber: string;
      price: number;
      statusCode: null;
      saleClass: null;
      make: null;
      model: null;
      modelYear: number;
      trim: null;
      body: null;
      mileage: number;
      transmissionType: null;
      transmissionSpeed: null;
      hasAirConditioning: boolean;
      msrp: number;
      vin: null;
    };
    buysCustomer: {
      firstName: string;
      middleName: null;
      lastName: string;
      suffix: null;
      email: null;
      phoneNumbers: null;
      housingMonthlyPayment: number;
      housingStatus: null;
      addresses: null;
      employments: null;
      additionalIncomes: null;
      customerId: string;
    };
    decisionsSMI: null;
    documentId: string;
    employee: {
      employeeId: string;
      firstName: null;
      middleName: null;
      lastName: null;
    };
    createdDate: {
      date: string;
      epoch: number;
    };
    decisions: null;
    status: string;
    storeId: string;
  }[];
};

type itemType = {
  applicationId: string;
  vehicle: {
    stockNumber: string;
    price: number;
    statusCode: null;
    saleClass: null;
    make: null;
    model: null;
    modelYear: number;
    trim: null;
    body: null;
    mileage: number;
    transmissionType: null;
    transmissionSpeed: null;
    hasAirConditioning: boolean;
    msrp: number;
    vin: null;
  };
  buysCustomer: {
    firstName: string;
    middleName: null;
    lastName: string;
    suffix: null;
    email: null;
    phoneNumbers: null;
    housingMonthlyPayment: number;
    housingStatus: null;
    addresses: null;
    employments: null;
    additionalIncomes: null;
    customerId: string;
  };
  decisionsSMI: null;
  documentId: string;
  employee: {
    employeeId: string;
    firstName: null;
    middleName: null;
    lastName: null;
  };
  createdDate: {
    date: string;
    epoch: number;
  };
  decisions: null;
  status: string;
  storeId: string;
};

const Cards = (props: PropsTypes) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col px-3 lg:px-0 sm:mx-52 w-full items-center h-full space-y-[25px]">
        {props.data.map((item: itemType, index: number) => (
          <Card item={item} key={index}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
