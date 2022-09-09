import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { VscHome } from "react-icons/vsc";
import { MdOutlineKeyboardArrowRight, MdClear } from "react-icons/md";
import SearchData from "../../data-db/search.json";

import TopBar from "../../components/TopBar";

const ApplicationManual = () => {
  const params = useParams();
  const applicationIndex: string = params.applicationIndex as string;

  const data = SearchData["/api/search"]["data"];
  const [item, setItem] = useState(data[0]);

  const [textareaWordCount, setTextareaWordCount] = useState(0);
  const [textareaContent, setTextareaContent] = useState("");

  useEffect(() => {
    if (!(data.length > 0)) return;

    setItem(data[parseInt(applicationIndex)]);
  }, [data.length > 0]); // eslint-disable-line react-hooks/exhaustive-deps

  // const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col items-center font-lato pb-20">
      <TopBar currentTab={1} />

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

        <h1 className="font-heading text-blue900 font-bold text-[31px] mb-[20px]">
          Manual Decision
        </h1>

        <div className="flex flex-row justify-between items-center px-[30px] py-[12px] w-[680px] min-h-[204px] rounded-[8px] border border-slate200">
          <div className="flex flex-col">
            <h2 className="font-heading text-blue900 tracking-[0.38px] font-bold text-lg mb-[5px]">
              {item.Customer.firstName +
                " " +
                item.Customer.middleName +
                " " +
                item.Customer.lastName}
            </h2>
            <p className="text-[#2a343d] text-md">
              {item.vehicle.modelYear} {item.vehicle.make} {item.vehicle.model}
            </p>
            <p className="text-slate700 text-sm">
              {item.vehicle.msrp} • {item.vehicle.mileage} • Stock #{" "}
              {item.vehicle.stockNumber}
            </p>
          </div>
          <div className="flex flex-col text-right text-slate700 text-sm">
            <p className="my-[3px]">Order# 151832 • {item.applicationId}</p>
            <p>{item.vehicle.vin}</p>
            <p>Transaction ID 337477</p>
          </div>
        </div>

        <div className="mt-10 w-[680px] h-[532px] p-8 border-slate200 border-2 rounded-lg">
          <h3 className="mb-4 font-heading text-[20px] text-blue900">
            Finance decision
          </h3>

          <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center basis-1/2 px-2">
              <select
                defaultValue={"Fin Co"}
                className="bg-white mb-8 focus:text-slate700 outline-none p-2 placeholder:text-slate600 text-slate600 font-medium w-full border-b-[1px] focus:border-slate700 border-slate600"
              >
                <option value="Fin Co">Fin Co</option>
              </select>

              <label className="mb-8 w-full">
                <span className="pl-2 text-sm font-medium text-slate600">
                  Decision
                </span>
                <input
                  type="text"
                  placeholder="PENDING"
                  className="focus:text-slate700 outline-none px-2 pb-2 placeholder:text-slate600 text-slate600 font-medium w-full border-b-[1px] focus:border-slate700 border-slate600"
                />
              </label>

              <input
                type="text"
                placeholder="Terms"
                className="mb-8 focus:text-slate700 outline-none p-2 placeholder:text-slate600 text-slate600 font-medium w-full border-b-[1px] focus:border-slate700 border-slate600"
              />

              <label className="mb-8 w-full text-slate600 font-medium">
                <span className="pl-2 text-sm">Max Finance Amt</span>
                <div className="flex px-2 pb-2 w-full border-b-[1px] focus:border-slate700 border-slate600">
                  <input
                    type="number"
                    min="1"
                    step="any"
                    placeholder="140"
                    className="w-full focus:text-slate700 placeholder:text-slate600 outline-none"
                  />
                  <span>%</span>
                </div>
              </label>

              <input
                type="text"
                placeholder="Analyst Name"
                className="mb-8 focus:text-slate700 outline-none p-2 placeholder:text-slate600 text-slate600 font-medium w-full border-b-[1px] focus:border-slate700 border-slate600"
              />
            </div>

            <div className="flex flex-col justify-center items-center basis-1/2 px-4">
              <input
                type="text"
                placeholder="Application Number"
                className="mb-8 focus:text-slate700 outline-none p-2 placeholder:text-slate600 text-slate600 font-medium w-full border-b-[1px] focus:border-slate700 border-slate600"
              />

              <label className="mb-8 w-full">
                <span className="pl-2 text-sm font-medium text-slate600">
                  Expiration Date
                </span>
                <input
                  type="date"
                  className="focus:text-slate700 outline-none px-2 pb-2 placeholder:text-slate600 text-slate600 font-medium w-full border-b-[1px] focus:border-slate700 border-slate600"
                />
              </label>

              <input
                type="text"
                placeholder="APR"
                className="mb-8 focus:text-slate700 outline-none p-2 placeholder:text-slate600 text-slate600 font-medium w-full border-b-[1px] focus:border-slate700 border-slate600"
              />

              <label className="mb-8 w-full text-slate600 font-medium">
                <span className="pl-2 text-sm">Monthly Payment</span>
                <div className="flex px-2 pb-2 w-full border-b-[1px] focus:border-slate700 border-slate600">
                  <span>$&nbsp;</span>
                  <input
                    type="number"
                    min="1"
                    step="any"
                    placeholder="463"
                    className="w-full focus:text-slate700 placeholder:text-slate600 outline-none"
                  />
                </div>
              </label>

              <input
                type="text"
                placeholder="Analyst Number"
                className="mb-8 focus:text-slate700 outline-none p-2 placeholder:text-slate600 text-slate600 font-medium w-full border-b-[1px] focus:border-slate700 border-slate600"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 p-8 flex flex-col w-[680px] h-[782px] shadow-2xl rounded-lg">
          <div className="basis-1/4">
            <h3 className="mb-4 font-heading text-[23px] text-blue900">
              Additional Info
            </h3>

            <div className="flex flex-row space-x-10">
              <select
                defaultValue={"Fin Co"}
                className="basis-1/2 px-4 bg-white mb-8 focus:text-slate700 outline-none p-2 placeholder:text-slate600 text-slate600 font-medium w-full border-b-[1px] focus:border-slate700 border-slate600"
              >
                <option value="Fin Co">Fin Co</option>
              </select>

              <input
                type="text"
                placeholder="Associate email"
                className="basis-1/2 px-4 mb-8 focus:text-slate700 outline-none p-[7px] placeholder:text-slate600 text-slate600 font-medium w-full border-b-[1px] focus:border-slate700 border-slate600"
              />
            </div>
          </div>

          <div className="basis-1/2 h-[199px]">
            <div className="flex flex-row justify-between text-blue900">
              <h3 className="mb-4  font-heading text-[23px]">Add a note</h3>
              <MdClear className="w-[24px] h-[24px]" />
            </div>

            <textarea
              onChange={(e) => {
                let textLength = e.target.value.split(/\s+\b/).length || 0;
                if (textLength <= 1500) {
                  setTextareaContent(e.target.value);
                  setTextareaWordCount(textLength);
                } else {
                  setTextareaContent(textareaContent);
                }
              }}
              placeholder="Add or edit notes"
              value={textareaContent}
              name="note"
              id="note"
              cols={30}
              rows={10}
              className="resize-none border-2 border-slate700 rounded w-full text-slate600 outline-none p-4"
            ></textarea>
            <p className="text-right text-slate600 text-sm">
              {textareaWordCount}/1500
            </p>

            <div className="mt-10 flex w-full justify-between items-center">
              <button className="hover:underline  w-[283px] h-[48px] rounded-lg px-8 py-3 font-bold text-decisionDetailColorText text-md">
                CANCEL
              </button>
              <div className="flex flex-col space-y-3">
                <button className="W-[282.54px] h-[48px] rounded-lg px-8 py-3 hover:bg-white  bg-[#FAE700] text-decisionDetailColorText font-bold text-md">
                  SUBMIT RE-DECISIONS
                </button>
                <button className="btn-blue-hollow w-[283px] h-[48px]">
                  MANUAL DECISION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationManual;
