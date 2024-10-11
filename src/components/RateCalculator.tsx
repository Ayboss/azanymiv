"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import usa from "../../public/img/countries/usa.svg";
import ngn from "../../public/img/countries/ngn.png";
import {
  Dropdown,
  Button as RizzButton,
  Select,
  type SelectOption,
  Text,
} from "rizzui";
import { FaCaretDown } from "react-icons/fa";

function renderDisplayValue(value: SelectOption) {
  return (
    <span className="flex items-center gap-2">
      <img
        src={value.avatar}
        alt={value.label}
        className="w-7 h-7 object-cover rounded-full"
      />
      <Text>{value.label}</Text>
    </span>
  );
}

function renderOptionDisplayValue(option: SelectOption) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={option.avatar}
        alt={option.label}
        className="w-9 h-9 object-cover rounded"
      />
      <div>
        <Text fontWeight="medium">{option.label}</Text>
        <Text>{option.value}</Text>
      </div>
    </div>
  );
}

const options = [
  {
    label: "Wolverine",
    value: "wolverine@rizzui.io",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    label: "MessiJr",
    value: "messijr@rizzui.io",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];
{
  /* <Select
options={options}
value={value}
onChange={setValue}
displayValue={(value) => renderDisplayValue(value)}
getOptionDisplayValue={(option) =>
  renderOptionDisplayValue(option)
}
className={"text-white border-none"}
/> */
}
function RateCalculator() {
  const [value, setValue] = useState("usd");
  const [value2, setValue2] = useState("ngn");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdown2Ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const toggleDropdown2 = () => setIsOpen2((prev) => !prev);

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef?.current?.contains(event.target)) {
      setIsOpen(false);
    }
    if (
      dropdown2Ref.current &&
      !dropdown2Ref?.current?.contains(event.target)
    ) {
      setIsOpen2(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form className="max-w-[526px] w-full rounded-[20px] bg-white flex-shrink-0 p-[25px]">
      <div className="bg-[#0115AD] text-white flex flex-col items-center gap-[15px] font-medium justify-center h-[107px] rounded-[10px] mb-[30px]">
        <p>Exchange Rate</p>
        <p>1.00 USD = 760.00 NGN</p>
      </div>
      <div className="mb-[30px] relative" ref={dropdownRef}>
        <p className="mb-2">You send exactly</p>
        <div className="border-[#39393933] border rounded-[15px] overflow-hidden flex relative">
          <input
            type="text"
            className="text-[13px] py-[13px] px-[25px] border-none flex-1"
          />
          <div
            className="bg-[#0115AD] w-[110px] flex items-center justify-center text-white text-[13px]"
            onClick={toggleDropdown}
          >
            <Image src={usa} alt="country" className="mr-3" />
            <span>USD</span>
            <FaCaretDown />
          </div>
        </div>
        {isOpen && (
          <div className="absolute top-20 right-0 z-10 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <span
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setValue("NGN");
                  setIsOpen(false);
                }}
              >
                <Image src={ngn} alt={`logo`} className="w-5 h-4 mr-2" />
                NGN
              </span>
              <span
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setValue("NGN");
                  setIsOpen(false);
                }}
              >
                <Image src={usa} alt={`logo`} className="w-5 h-4 mr-2" />
                USD
              </span>
            </div>
          </div>
        )}
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
      <div className="mb-[30px] relative" ref={dropdown2Ref}>
        <p className="mb-2">Recipient gets</p>
        <div className="border-[#39393933] border rounded-[15px] overflow-hidden flex relative">
          <input
            type="text"
            className="text-[13px] py-[13px] px-[25px] border-none flex-1"
          />
          <div
            className="bg-[#0115AD] w-[110px] flex items-center justify-center text-white text-[13px]"
            onClick={toggleDropdown2}
          >
            <Image src={ngn} alt="country" className="mr-3" />
            <span>NGN</span>
            <FaCaretDown />
          </div>
        </div>
        {isOpen2 && (
          <div className="absolute top-20 right-0 z-10 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <span
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setValue2("NGN");
                  setIsOpen2(false);
                }}
              >
                <Image src={ngn} alt={`logo`} className="w-5 h-4 mr-2" />
                NGN
              </span>
              <span
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setValue2("NGN");
                  setIsOpen2(false);
                }}
              >
                <Image src={usa} alt={`logo`} className="w-5 h-4 mr-2" />
                USD
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mb-[24px]">
        <span className="text-[13px]">Recieve Method</span>
        <Dropdown>
          <Dropdown.Trigger>
            <RizzButton
              as="span"
              variant="outline"
              className="text-[13px] text-secondary"
            >
              Bank Transfer
              <FaCaretDown color="#999999" />
            </RizzButton>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Item>Bank Transfer</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
