import React, {useState} from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";


function Pagination() {
    const [currentPageNo, setCurrentPageNo] = useState(1)

  return (
    <div className="w-full justify-center flex space-x-2 text-white mt-5 pb-5 items-center">
          <h4 className="text-blue900 text-md">Page</h4>
          <div
            onClick={() => setCurrentPageNo(1)}
            className={`cursor-pointer rounded-full w-8 h-8 flex justify-center items-center font-semibold ${
              currentPageNo === 1 ? "bg-blue900" : "text-blue900"
            }`}
          >
            <h1>1</h1>
          </div>
          <div
            onClick={() => setCurrentPageNo(2)}
            className={`cursor-pointer rounded-full w-8 h-8 flex justify-center items-center font-semibold ${
              currentPageNo === 2 ? "bg-blue900" : "text-blue900"
            }`}
          >
            <h1>2</h1>
          </div>
          <div
            onClick={() => setCurrentPageNo(3)}
            className={`cursor-pointer rounded-full w-8 h-8 flex justify-center items-center font-semibold ${
              currentPageNo === 3 ? "bg-blue900" : "text-blue900"
            }`}
          >
            <h1>3</h1>
          </div>
          <div
            onClick={() => setCurrentPageNo(4)}
            className={`cursor-pointer rounded-full w-8 h-8 flex justify-center items-center font-semibold ${
              currentPageNo === 4 ? "bg-blue900" : "text-blue900"
            }`}
          >
            <h1>4</h1>
          </div>
          <div
            onClick={() => setCurrentPageNo(5)}
            className={`cursor-pointer rounded-full w-8 h-8 flex justify-center items-center font-semibold ${
              currentPageNo === 5 ? "bg-blue900" : "text-blue900"
            }`}
          >
            <h1>5</h1>
          </div>
          <MdOutlineArrowForwardIos className="text-blue-900 font-bold" />
        </div>
  )
}

export default Pagination