import React from "react";
import { RiInformationLine } from "react-icons/ri";

type propsType = { color: string; heading: string; message: string };

const NotificationCard = (props: propsType) => {
  return (
    <div
      className={`w-full h-[77px] rounded-[4px] flex items-center px-[21px] py-[12px]
    ${props.color.toLowerCase() === "green" ? "bg-green100 text-[#206609]" : ""}
    ${
      props.color.toLowerCase() === "yellow" ||
      props.color.toLowerCase() === "yellowred"
        ? "bg-yellow100 text-sideColor"
        : ""
    }
    ${props.color.toLowerCase() === "red" ? "bg-red100 text-declineColor" : ""}
    ${props.color.toLowerCase() === "grey" ? "bg-slate100 text-slate700" : ""}
    `}
    >
      <RiInformationLine className="w-[24px] h-[24px] mr-[10px]" />
      <div>
        <h3 className="font-bold h-[20px]">{props.heading}</h3>
        <p className="text-sm">{props.message}</p>
      </div>
    </div>
  );
};

export default NotificationCard;


//two changes made for testing
