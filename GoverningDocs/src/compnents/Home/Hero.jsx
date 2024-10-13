import React from 'react';
import { Container } from "../../shareComponents/Container";
import { Button } from '../../shareComponents/Button';

export const Hero = () => {
  return (
    <section className='pt-10  md:pt-20 lg:pt-28 xl:pt-[142px]'>
        <Container className="flex flex-col-reverse md:flex-row justify-center md:justify-end items-center gap-5 ">
            <div>
                <h1 className='font-Space-grotesk font-bold text-2xl md:text-4xl lg:text-6xl text-secondary max-w-[450px] lg:max-w-[593px] leading-[40px] md:leading-[60px] lg:leading-[76px]'>Simplify your real estate document analysis
                </h1>
                <p className='text-secondary font-semibold text-xl py-5 md:py-[29px] max-w-[450px] lg:max-w-[519px]'>Streamline, Automate, and Secure Your Business Documents with Ai GoverningDocs</p>
                <Button>Get Started Today</Button>
            </div>
            <div>
                <img src="img/hero.png" alt="hero image" className='w-[80%] md:w-[550px] lg:w-[740px] mx-auto' />
            </div>
        </Container>
    </section>
  );
}


