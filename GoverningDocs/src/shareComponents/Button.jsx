import { cn } from "../utils/index.js";

export const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "py-4 px-[25px] rounded-full font-bold text-white bg-gradient-primary opacity-90 hover:opacity-100 transition-all delay-150",
        className
      )}
    >
      {children}
    </button>
  );
};
