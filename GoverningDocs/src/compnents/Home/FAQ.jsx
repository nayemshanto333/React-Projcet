import React, { useState } from "react";
import { Container } from "../../shareComponents/Container";
import { SectionTitle } from "../../shareComponents/SectionTitle";
import { Arrow } from "./Icon";
import { faq } from "../../db/NavData";
import FaqCard from "../../shareComponents/FaqCard";

function FAQ() {
    const [isActive, setIsActive] = useState();
    const handleChange =(index)=>{isActive == index ? setIsActive(-1) : setIsActive(index)}
  return (
    <section className="my-9 md:my-20 lg:my-[120px] xl:my-[150px]">
      <Container className="max-w-[982px]">
        <SectionTitle gradient="Asked Questions" className="text-center">
          Frequently{" "}
        </SectionTitle>
        <div className="mt-10 space-y-5">
          {faq.map((faq , i) => <FaqCard key={i} {...faq} onClick={()=>handleChange(i)} isActive={isActive == i}/>)}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;
