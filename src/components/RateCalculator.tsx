import React from "react";

function RateCalculator() {
  return (
    <form className="w-[526px] rounded-[20px] bg-white flex-shrink-0 p-[25px]">
      <div className="bg-[#0115AD] text-white flex flex-col items-center gap-[15px] font-medium justify-center h-[107px] rounded-[10px] mb-[30px]">
        <p>Exchange Rate</p>
        <p>1.00 USD = 760.00 NGN</p>
      </div>
      <div className="mb-[30px]">
        <p className="mb-2">You send exactly</p>
        <div className="border-[#39393933] border rounded-[15px] overflow-hidden">
          <input
            type="text"
            className="text-[13px] py-[13px] px-[25px] border-none"
          />
        </div>
      </div>
      <ul className="text-secondary text-[13px]">
        <li className="listicon flex justify-between items-center mb-3">
          <span className="flex-1 ml-2">Fees & Charges</span>
          <span>+3.00 USD</span>
        </li>
        <li className="listicon flex justify-between items-center mb-3">
          <span className="flex-1 ml-2"> Amount will convert</span>
          <span>100 USD</span>
        </li>
        <li className="listicon flex justify-between items-center mb-3">
          <span className="flex-1 ml-2"> Total Payable Amount</span>
          <span>103.00 USD</span>
        </li>
      </ul>
      <div className="flex justify-between items-center mb-[10px]">
        <span className="text-primary">Have a coupon code?</span>
        <button className="bg-primary text-white py-[7px] px-[21px] rounded-full">
          Apply
        </button>
      </div>
      <div className="mb-[30px]">
        <p className="mb-2">Recipient gets</p>
        <div className="border-[#39393933] border rounded-[15px] overflow-hidden">
          <input
            type="text"
            className="text-[13px] py-[13px] px-[25px] border-none"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-[24px]">
        <span className="text-[13px]">Recieve Method</span>
        <input type="text" />
      </div>
      <p className="mb-5 text-[13px]">
        You could save up to <span className="text-primary"> 1.5 USD </span>
      </p>
      <button className="text-center w-full bg-primary rounded-full p-[13px] text-[13px] text-white">
        Send now
      </button>
    </form>
  );
}

export default RateCalculator;
