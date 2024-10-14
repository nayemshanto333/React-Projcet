import React, { useState } from "react";
import { Container } from "../../shareComponents/Container";
import { SectionTitle } from "../../shareComponents/SectionTitle";
import { faq } from "../../db/NavData";
import FaqCard from "../../shareComponents/FaqCard";

function FAQ() {
    const [isActive, setIsActive] = useState();
    const handleChange =(index)=>{isActive == index ? setIsActive(-1) : setIsActive(index)}
  return (
    <section className="my-9 md:my-20 lg:my-[120px] xl:my-[150px] py-5">
      <Container className="max-w-[982px] relative ">
        <SectionTitle gradient="Asked Questions" className="text-center">
          Frequently{" "}
        </SectionTitle>
        <div className="mt-10 space-y-5">
          {faq.map((faq , i) => <FaqCard key={i} {...faq} onClick={()=>handleChange(i)} isActive={isActive == i}/>)}
        </div>
        <img className="absolute z-10  h-[590px] w-[1713px] -top-[110px] lg:-left-[21.5%] " src="img/faq-line.svg" alt="faq line" />
      </Container>
      
    </section>
  );
}

export default FAQ;
