import React from "react";

import { useState } from "react";

type PropsTypes = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<PropsTypes> = (props) => {
  const [associate, setAssociate] = useState("Associate");

  function nameChange() {
    setAssociate("Mike");
  }

  return (
    <nav className="w-[1440px] flex items-center justify-center flex-col shadow-lg h-[124px]">
      <div className="w-[1152px] flex flex-row justify-between mt-[1px]">
        <div className="flex relative w-[214px]">
          <div className="w-[101px] h-[20px] flex place-items-end flex-col">
            <div className="h-[14px] ml-[-0.29px] relative w-[90px]"></div>
            <img
              width="123px"
              height="60px"
              src="/imgs/carmax-logo.svg"
              className="mr-[-0.48px] mt-[2px] place-items-end"
            />
          </div>
          <div className="h-[28px] ml-[12px] w-[1px] bg-slate700"></div>
          <h1 className="mb-[1px] ml-[12px] text-slate700 text-md">SMI</h1>
        </div>
        <div className="flex">
          <h3 onClick={nameChange} className="text-slate700 text-md">
            {associate} 12345678
          </h3>
          <div className="ml-[8px] text-sm text-center text-blue900 font-bold rounded-full w-[24px] h-[24px] border-2 border-[#0558ac] bg-[#dff1ff]">
            M
          </div>
        </div>
      </div>

      <input
        onChange={(event) => props.setQuery(event.target.value)}
        className="outline-none bg-no-repeat bg-right mt-[18px] p-[7px] w-[1152px] h-[40px] flex flex-row justify-between border border-[#dedfdf] rounded-[8px] text-slate600 text-sm"
        placeholder="Search by Customer Name, Date, Stock Number, or Associate Name"
      />
    </nav>
  );
};

export default SearchBar;
