import React from "react";

const Documents = () => {
  return (
    <div className="mt-10 flex flex-col w-full p-8 border-slate200 border-2 rounded-lg">
      <div className="mb-5 flex w-full justify-between items-center">
        <h3 className="text-[20px] text-blue900 font-bold">
          View/import uploaded documents
        </h3>
        <h3 className="text-slate600 text-[12px]">Supports:JPG,PNG</h3>
      </div>

      <p className="text-slate600 text-md">Proof of income</p>

      <div className="flex flex-row mt-3 text-md items-center justify-between pr-10 border-b border-slate200 pb-2">
        <div className="flex items-center space-x-3">
          <img
            alt="DocumentsSymbol-DocumentsComponent"
            className="w-[64px] h-[64px]"
            src="..//imgs/DocumentsSymbol.png"
          ></img>
          <h3 className="text-decisionDetailColorText text-md font-bold">
            W-2
          </h3>
        </div>

        <h3 className="font-bold text-decisionDetailColorText text-md">
          APPROVED
        </h3>
      </div>

      <p className="text-slate600 text-md mt-5">Proof of residency</p>

      <div className="flex flex-row mt-3 text-md items-center justify-between pb-2">
        <div className="flex items-center space-x-3">
          <img
            alt="BillSymbol-DocumentsComponent"
            className="w-[64px] h-[64px]"
            src="..//imgs/BillSymbol.png"
          ></img>
          <h3 className="text-decisionDetailColorText font-bold text-md">
            Utility bill
          </h3>
        </div>

        <h3 className="font-bold text-decisionDetailColorText text-md">
          WAITING FOR CUSTOMER
        </h3>
      </div>
      <div className="flex w-full justify-center items-center">
        <button className="rounded-lg px-8 py-3 font-bold text-decisionDetailColorText text-md">
          CUSTOMER FOLLOW UP
        </button>
        <button className="btn-blue-hollow">REVIEW IN DOC CENTER</button>
      </div>
    </div>
  );
};

export default Documents;
