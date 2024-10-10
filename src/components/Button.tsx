import React from "react";

function Button({ text }: { text: string }) {
  return (
    <button className="bg-primary rounded-full py-3 px-[31px] text-white font-semibold">
      {text}
    </button>
  );
}

export default Button;
