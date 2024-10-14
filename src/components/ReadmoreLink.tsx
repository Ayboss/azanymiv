import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function ReadmoreLink() {
  return (
    <Link
      className="group text-primary font-semibold flex gap-[13px] font-urbanist items-center transition-all duration-300 hover:gap-[13px]"
      href={"#"}
    >
      Read More
      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
    </Link>
  );
}

export default ReadmoreLink;
