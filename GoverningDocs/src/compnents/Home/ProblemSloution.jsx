import { Container } from "../../shareComponents/Container";
import React from "react";
import ProblemSolutionTitle from "../../shareComponents/ProblemSolutionTitle";
import { CardData } from "../../db/NavData";
import ProblemSolutionCard from "../../shareComponents/ProblemSolutionCard";

const ProblemSloution = () => {
  return (
    <section>
      <Container>
        <div className="pt-14 md:pt-[80px] lg:pt-[128px]">
          <ProblemSolutionTitle />
        </div>
        {/* background: linear-gradient(155.83deg, #00D2FF -15.74%, #059DBE 151.39%);
 */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5 lg:gap-9 ">
          {CardData.map((problem , i)=>(
            <ProblemSolutionCard {...problem} key={i}/>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProblemSloution;
