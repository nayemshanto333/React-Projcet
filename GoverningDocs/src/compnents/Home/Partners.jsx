import React from "react";
import { Container } from "../../shareComponents/Container";
import { SectionTitle } from "../../shareComponents/SectionTitle";
import { partners } from "../../db/NavData";

const Partners = () => {
  return (
    <section>
      <Container className="bg-[#E6F9FD] py-[50px]">
        <SectionTitle gradient="Partners" className="text-center">
          Our{" "}
        </SectionTitle>
        <div className="pt-10 flex flex-wrap justify-center items-center gap-x-[30px]  gap-y-3 sm:gap-y-7 ">
          {partners.map(({ img, alt }, i) => (
            <div key={i} className="bg-[#fff] border border-[#D6D6D6] w-[274px] h-[101px] rounded-[12px] flex justify-center items-center">
              <img src={img} alt={alt} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;
