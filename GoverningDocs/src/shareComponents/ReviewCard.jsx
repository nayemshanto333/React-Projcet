import React from "react";
import { cn } from "../utils";

const ReviewCard = ({ img, name, type, active , onClick}) => {
  return (
    <button
    onClick={onClick}
      className={cn(
        "inline-flex justify-normal items-center  border border-primary px-5 py-[12px] gap-[13px] w-full lg:w-[400px] xl:w-[491px] rounded-[20px]",
        active && "bg-gradient-primary"
      )}
    >
      <img src={img} alt={name} className=" rounded-full size-[68px] " />
      <div
        className={cn(
          " text-base text-accent font-semibold ",
          active && "text-white"
        )}
      >
        <h4 className="text-start">{name}</h4>
        <p>{type}</p>
      </div>
    </button>
  );
};

export default ReviewCard;
