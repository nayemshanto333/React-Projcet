import NavData, { SocialIcon } from "../db/NavData";
import { Container } from "../shareComponents/Container";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-5 lg:pt-24">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center py-5">
        <h1 className="font-Space-grotesk font-bold text-[#000000] text-xl md:text-2xl xl:text-4xl">
          Ai GoverningDocs
        </h1>
        <div className="hidden lg:flex justify-center items-center gap-4">
        {NavData.map(({ label, link }, i) => (
                <a key={i} href={link}>
                  <p className="text-sm xl:text-base text-accent transition-colors hover:text-primary duration-150">
                    {label}
                  </p>
                </a>
              ))}
        </div>
        <div className="flex justify-center items-center gap-3 pt-3 sm:pt-0">
          {SocialIcon.map(({img, url} )=>(
            <a href={url} target="_blank">
              <img src={img} alt="social icon" className="size-[36px]" />
            </a>
          ))}
        </div>
        </div>
        <div className="footer-border-color border-t border-transparent mt-5 md:mt-[40px] lg:mt-[100px]  ">
          <p className="sm:text-lg text-center text-[#111] leading-[18px] py-5 text-base">Ai GoverningDocs 2024. All Rights Reserved.</p>
        </div>
      </Container>
      
    </footer>
  );
};

export default Footer;



