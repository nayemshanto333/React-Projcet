import React from "react";
import { Arrow } from "../compnents/Home/Icon";

function FaqCard({ ques, ans, onClick, isActive }) {
  return (
    <div className=" border border-primary  shadow-faq py-5 px-[30px] rounded-[20px]">
      <button onClick={onClick} className="inline-flex justify-between items-center w-full">
        <h1 className="text-start text-base sm:text-lg lg:text-[26px] font-bold text-secondary lg:leading-[36px]">
          {ques}
        </h1>
        <div className="text-primary">
          <Arrow className="rotate-90 " />
        </div>
      </button>

      {isActive && <p className="text-accent text-sm lg:text-base pt-5 ">{ans}</p>}
    </div>
  );
}

export default FaqCard;
