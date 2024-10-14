import React from 'react';

const ProblemSolutionCard = ({img,title,des1,des2}) => {
  return (
    <div className="w-[272px] h-[349px] shadow-Card rounded-[20px] hover:bg-gradient-to-r from-[#00D2FF] to-[#059DBE] p-5 space-y-5 transition-colors duration-200 group">
    <div className="bg-primary hover:bg-rgba(255, 255, 255, 0.2)
      flex justify-center items-center size-[58px] rounded-full">
      <img src={img} alt={title} />
    </div>
    <h1 className="font-bold text-lg text-secondary group-hover:text-white">{title}</h1>
    <div className="text-base text-accent group-hover:text-white ">
    <p >{des1}</p>
    {des2 && <p className="pt-2.5">{des2}</p>}
    </div>
  </div>
  );
}

export default ProblemSolutionCard;
