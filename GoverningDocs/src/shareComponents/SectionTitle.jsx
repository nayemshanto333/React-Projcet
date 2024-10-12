import React from "react";
import { cn } from "../utils/index.js";
import {GradientText} from './GradientText.jsx'

export const SectionTitle = ({ children, className , gradient}) => {
  return (
    <h1
      className={cn(
        "font-Space-grotesk font-bold text-[46px] text-secondary leading-[58.7px]",
        className
      )}
    >
      {children} <GradientText>{gradient}</GradientText>
    </h1>
  );
};
