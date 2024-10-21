import Link from "next/link";
import React from "react";

function Button({
  text,
  link = false,
  href = "",
}: {
  text: string;
  link?: boolean;
  href?: string;
}) {
  if (link) {
    return (
      <Link
        href={href}
        className="bg-primary rounded-full py-3 px-[31px] text-white font-semibold"
      >
        {text}
      </Link>
    );
  }
  return (
    <button className="bg-primary rounded-full py-3 px-[31px] text-white font-semibold">
      {text}
    </button>
  );
}

export default Button;
