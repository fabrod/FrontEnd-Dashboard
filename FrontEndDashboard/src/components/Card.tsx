import React from "react";
import { useState } from "react";
import {

  MdOutlineWarning,
  MdRemoveRedEye,
} from "react-icons/md";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { RiPrinterLine } from "react-icons/ri";
import { VscCircleSlash } from "react-icons/vsc";


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
};

const Card = (props: PropsTypes) => {
  const [showDetails, setShowDetails] = useState(false);
  const [starStatus, setStarStatus] = useState(false);

  return (
    <div className="w-full">
      <div
        className={`${
          props.item.cardColor.toLowerCase() === "reddotted"
            ? "border-dashed border-red-500"
            : ""
        } shadow-lg flex flex-col w-full min-h-[170px] rounded-[8px] border border-slate200`}
      >
        <div className="flex flex-row justify-between px-[15px] sm:px-[21px] py-[12px]">
          <div className="flex flex-col">
            <h2 className="font-heading text-blue900 tracking-[0.38px] font-bold text-[20px] sm:text-lg h-[35px]">
              {props.item.Customer.firstName +
                " " +
                props.item.Customer.middleName +
                " " +
                props.item.Customer.lastName}
            </h2>
            <h4 className="mb-[10px] text-sm sm:text-base flex items-center sm:space-x-[5px]">
              {props.item.cardColor.toLowerCase() === "reddotted" ? (
                <VscCircleSlash className="text-declineColor inline stroke-1" />
              ) : (
                " "
              )}
              <p>
                <span className="text-slate700">CO-Signer |</span>
                {"  "}Frank Mireles
              </p>
            </h4>
            <p className="text-[#2a343d] text-sm sm:text-md">
              {props.item.vehicle.modelYear} {props.item.vehicle.make}{" "}
              {props.item.vehicle.model}
            </p>
            <p className="text-slate700 text-[11px] sm:text-sm">
              {props.item.vehicle.msrp} • {props.item.vehicle.mileage} • Stock #{" "}
              {props.item.vehicle.stockNumber}
            </p>
          </div>
          <div className="flex flex-col justify-between text-right text-slate700 text-sm">
            <div className="w-full flex flex-row-reverse items-center">
              <MdRemoveRedEye className="ml-[5px] sm:ml-[10px] w-[17px] sm:w-[20px] h-[17px] sm:h-[20px] text-blue900" />
              <RiPrinterLine className="ml-[5px] sm:ml-[10px] w-[17px] sm:w-[20px] h-[17px] sm:h-[20px] text-blue900" />
              {starStatus ? (
                <BsHeartFill
                  onClick={() => setStarStatus(!starStatus)}
                  className="ml-[5px] sm:ml-[10px] w-[15px] sm:w-[18px] h-[15px] sm:h-[18px] text-blue900"
                />
              ) : (
                <BsHeart
                  onClick={() => setStarStatus(!starStatus)}
                  className="ml-[5px] sm:ml-[10px] w-[15px] sm:w-[18px] h-[15px] sm:h-[18px] text-blue900"
                />
              )}
            </div>
            <div className="text-[11px]">
              <p className="my-[3px]">{props.item.applicationId}</p>
              <p>{props.item.vehicle.vin}</p>
            </div>
          </div>
        </div>
        <div className="flex h-[50px] mx-[20px] mb-[20px] space-x-[5px]">
          {props.item.cardColor.toLowerCase() === "yellowred" ? (
            <div className="h-[50px] w-[50px] flex justify-center items-center bg-[#b30000]">
              <MdOutlineWarning className="w-[15px] h-[15px] text-white" />
            </div>
          ) : (
            ""
          )}

          <div
            onClick={() => setShowDetails(!showDetails)}
            className={`cursor-pointer px-[14px] flex flex-row justify-between items-center h-full w-full
          ${
            props.item.cardColor.toLowerCase() === "reddotted"
              ? "border border-dashed border-red-500"
              : ""
          } ${
              props.item.cardColor.toLowerCase() === "green"
                ? "bg-green100"
                : ""
            }
          ${
            props.item.cardColor.toLowerCase() === "yellow" ||
            props.item.cardColor.toLowerCase() === "yellowred"
              ? "bg-yellow100"
              : ""
          }
          ${props.item.cardColor.toLowerCase() === "red" ? "bg-red100" : ""}
          ${props.item.cardColor.toLowerCase() === "grey" ? "bg-slate100" : ""}
          `}
          >
            <div className="w-1/2 flex flex-row items-center">
              {props.item.cardColor.toLowerCase() === "green" ? (
                <img
                  alt="TickSymbol-CardComponent"
                  className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px]"
                  src="..//imgs/TickSymbol.svg"
                />
              ) : (
                ""
              )}
              {props.item.cardColor.toLowerCase() === "yellow" ||
              props.item.cardColor.toLowerCase() === "yellowred" ? (
                <img
                  alt="Issue-CardComponent"
                  className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] fill-blue900"
                  src="..//imgs/Issue.svg"
                />
              ) : (
                ""
              )}
              {props.item.cardColor.toLowerCase() === "red" ? (
                <img
                  alt="RedIssue-CardComponent"
                  className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px]"
                  src="..//imgs/RedIssue.svg"
                />
              ) : (
                ""
              )}
              {props.item.cardColor.toLowerCase() === "grey" ? (
                <img
                  alt="Clock-CardComponent"
                  className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px]"
                  src="..//imgs/Clock.svg"
                />
              ) : (
                ""
              )}

              <p
                className={`ml-[5px] text-md ${
                  props.item.cardColor.toLowerCase() === "green"
                    ? "text-[#206609]"
                    : ""
                }
                ${
                  props.item.cardColor.toLowerCase() === "yellow" ||
                  props.item.cardColor.toLowerCase() === "yellowred"
                    ? "text-sideColor"
                    : ""
                }
                ${
                  props.item.cardColor.toLowerCase() === "red"
                    ? "text-declineColor"
                    : ""
                }
                ${
                  props.item.cardColor.toLowerCase() === "gray"
                    ? "text-slate700"
                    : ""
                } text-sm sm:text-base truncate`}
              >
                {props.item.vehicle.condition}
              </p>
            </div>
            <div className="flex flex-row">
              <p className="text-sm sm:text-md text-slate700">
                {props.item.vehicle.date}
              </p>
              {/* {!showDetails && (
                <MdOutlineKeyboardArrowRight className="w-[24px] h-[24px] text-slate700"></MdOutlineKeyboardArrowRight>
              )}
              {showDetails && (
                <MdOutlineKeyboardArrowDown className="w-[24px] h-[24px] text-slate700"></MdOutlineKeyboardArrowDown>
              )} */}
            </div>
          </div>
        </div>
      </div>
      {/* {showDetails && (
        <div className="mt-1 h-[616px] px-4 py-3 w-full flex rounded border-l-8 border-sideColor shadow-lg">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="text-slate600 text-sm">
                <th className="w-1/5">Finance Company</th>
                <th>Down Payment</th>
                <th>Term</th>
                <th>APR</th>
                <th className="w-1/3">Decision</th>
              </tr>
            </thead>
            <tbody>
              <Link
                className="flex w-[820px] h-fit p-8 absolute"
                to={`/details/${props.item.applicationIndex}`}
              ></Link>
              <tr className="cursor-pointer">
                <td className={`font-bold pt-4`}>Ally Financial</td>

                <td className="pt-4">$500.00</td>

                <td className="pt-4">72 Mo.</td>

                <td className="pt-4">15.8%</td>

                <td className={`flex w-full justify-between pt-4`}>
                  <div
                    className={`text-approvalColorFinance font-bold flex flex-row items-center`}
                  >
                    <MdCheckCircle className="mr-2 w-[24px] h-[24px]" />
                    Approval
                  </div>
                  <MdOutlineKeyboardArrowRight className="w-[24px] h-[24px] text-blue900" />
                </td>
              </tr>

              <tr className="text-sm font-medium text-slate700">
                <h3 className="text-slate600 mt-3">Stipulations</h3>
                <h4>Proof of insurance is required</h4>
                <h4 className="mb-4">Proof of residence is required</h4>
              </tr>

              <tr className={`border-t border-slate200`}>
                <td className={`font-bold pt-4 `}>
                  Westlake Financial Services
                </td>
                <td className="pt-4">$1,150.00</td>
                <td className="pt-4">72 Mo.</td>
                <td className="pt-4">10.2%</td>
                <td className={`flex w-full justify-between pt-4`}>
                  <div
                    className={`text-conditionalApproval font-bold flex flex-row items-center`}
                  >
                    <MdOutlineWarning className="mr-2 w-[24px] h-[24px]" />
                    Conditional Approval
                  </div>
                  <MdOutlineKeyboardArrowRight className="w-[24px] h-[24px] text-blue900" />
                </td>
              </tr>
              <tr className="text-sm font-medium text-slate700">
                <h3 className="text-slate600 mt-3">Stipulations</h3>
                <h4>The bank requires a higher down payment</h4>
                <h4>Proof of insurance is required</h4>
                <h4 className="mb-4">Proof of residence is required</h4>
              </tr>

              <tr className={`border-t border-slate200`}>
                <td className={`font-bold pt-4 `}>
                  American Credit Acceptance
                </td>
                <td className="pt-4"></td>
                <td className="pt-4"></td>
                <td className="pt-4"></td>
                <td className={`flex w-full justify-between pt-4`}>
                  <div
                    className={`text-declineCreditColor font-bold flex flex-row items-center`}
                  >
                    <img
                      alt="Cross-CardComponent"
                      className="w-[24px] h-[24px]"
                      src="..//imgs/Cross.svg"
                    />
                    <h3 className="ml-2">Decline</h3>
                  </div>
                  <MdOutlineKeyboardArrowRight className="w-[24px] h-[24px] text-blue900" />
                </td>
              </tr>
              <tr className="text-sm font-medium">
                <h3 className="text-slate600 mt-3"> </h3>
              </tr>

              <tr className={`border-t border-slate200`}>
                <td className={`font-bold pt-4 `}>Bank of America</td>
                <td className="pt-4"></td>
                <td className="pt-4"></td>
                <td className="pt-4"></td>
                <td className={`flex w-full justify-between pt-4`}>
                  <div
                    className={`text-declineCreditColor font-bold flex flex-row items-center`}
                  >
                    <img
                      alt="Cross-CardComponent"
                      className="w-[24px] h-[24px]"
                      src="..//imgs/Cross.svg"
                    />
                    <h3 className="ml-2">Decline</h3>
                  </div>
                  <MdOutlineKeyboardArrowRight className="w-[24px] h-[24px] text-blue900" />
                </td>
              </tr>
              <tr className="text-sm font-medium">
                <h3 className="text-slate600 mt-3"> </h3>
              </tr>

              <tr className={`border-t border-slate200`}>
                <td className={`font-bold pt-4 `}>Capital One Auto Finance</td>
                <td className="pt-4"></td>
                <td className="pt-4"></td>
                <td className="pt-4"></td>
                <td className={`flex w-full justify-between pt-4`}>
                  <div
                    className={`text-declineCreditColor font-bold flex flex-row items-center`}
                  >
                    <img
                      alt="Cross-CardComponent"
                      className="w-[24px] h-[24px]"
                      src="..//imgs/Cross.svg"
                    />
                    <h3 className="ml-2">Decline</h3>
                  </div>
                  <MdOutlineKeyboardArrowRight className="w-[24px] h-[24px] text-blue900" />
                </td>
              </tr>
              <tr className="text-sm font-medium">
                <h3 className="text-slate600 mt-3">{""}</h3>
              </tr>

              <tr className={`border-t border-slate200`}>
                <td className={`font-bold pt-4 `}>CarMax Auto Finance</td>
                <td className="pt-4"></td>
                <td className="pt-4"></td>
                <td className="pt-4"></td>
                <td className={`flex w-full justify-between pt-4`}>
                  <div
                    className={`text-declineCreditColor font-bold flex flex-row items-center`}
                  >
                    <img
                      alt="Cross-CardComponent"
                      className="w-[24px] h-[24px]"
                      src="..//imgs/Cross.svg"
                    />
                    <h3 className="ml-2">Decline</h3>
                  </div>
                  <MdOutlineKeyboardArrowRight className="w-[24px] h-[24px] text-blue900" />
                </td>
              </tr>
              <tr className="text-sm font-medium">
                <h3 className="text-slate600 mt-3">{""}</h3>
              </tr>

              <tr className={`border-t border-slate200`}>
                <td className={`font-bold pt-4 `}>Wells Fargo Auto Finance</td>
                <td className="pt-4"></td>
                <td className="pt-4"></td>
                <td className="pt-4"></td>
                <td className={`flex w-full justify-between pt-4`}>
                  <div
                    className={`text-declineCreditColor font-bold flex flex-row items-center`}
                  >
                    <img
                      alt="Cross-CardComponent"
                      className="w-[24px] h-[24px]"
                      src="..//imgs/Cross.svg"
                    />
                    <h3 className="ml-2">Decline</h3>
                  </div>
                  <MdOutlineKeyboardArrowRight className="w-[24px] h-[24px] text-blue900" />
                </td>
              </tr>
              <tr className="text-sm font-medium">
                <h3 className="text-slate600 mt-3">{""}</h3>
              </tr>
            </tbody>
          </table>
        </div>
      )} */}
    </div>
  );
};

export default Card;
