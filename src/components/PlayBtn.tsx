import React from "react";
import play from "../../public/img/play.svg";
import Image from "next/image";

function PlayBtn() {
  return (
    <button className="bg-[#0115AD] w-[50px] h-[50px] rounded-full grid place-content-center">
      <Image src={play} alt="play" />
    </button>
  );
}

export default PlayBtn;
