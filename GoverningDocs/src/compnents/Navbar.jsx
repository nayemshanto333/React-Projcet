import React, { useEffect, useState } from "react";
import { Container } from "../shareComponents/Container.jsx";
import Logo from "../shareComponents/Logo.jsx";
import NavData from "../db/NavData.js";
import { Button } from "../shareComponents/Button.jsx";
import MobileMenu from "../shareComponents/MobileMenu.jsx";


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((perv) => !perv);

  useEffect (()=>{
    const bodyClass = document.body.classList;
    isMenuOpen ? bodyClass.add("no-scroll") : bodyClass.remove("no-scroll")

    return ()=> bodyClass.remove("no-scroll");
  },[isMenuOpen])
  return (
    <>
      <nav className="py-5 ">
        <Container>
          <div className="flex justify-between items-center gap-2.5 px-2 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full ">
            <Logo />

            <div className="hidden lg:flex gap-3 md:gap-4">
              {NavData.map(({ label, link }, i) => (
                <a key={i} href={link}>
                  <p className="text-sm xl:text-base text-accent transition-colors hover:text-primary duration-150">
                    {label}
                  </p>
                </a>
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 md:gap-4">
              <Button>Get Started Today</Button>
              <button className="lg:hidden block me-2" onClick={toggleMenu}>
              <div className="space-y-1">
                <span className="block w-5 h-0.5 bg-black" />
                <span className="block w-5 h-0.5 bg-black" />
                <span className="block w-5 h-0.5 bg-black" />
              </div>
            </button>
            </div>
          </div>
          {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
        </Container>
      </nav>
    </>
  );
};
