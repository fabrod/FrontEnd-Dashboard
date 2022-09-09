import React from "react";
import Card from "./Card";

type PropsTypes = {
  data: (
    | {
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
      }
    | {
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
      }
  )[];
};

type itemType = {
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
    vin: string;
    date: string;
    condition: string;
    Color: string;
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
