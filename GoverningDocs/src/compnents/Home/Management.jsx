import React from 'react';
import { Container } from '../../shareComponents/Container';
import { Button } from '../../shareComponents/Button';

const Management = () => {
  return (
    <section>
        <Container className="bg-gradient-primary sm:max-w-[945px] lg:max-w-[1184px] h-[314px] rounded-[20px] ">
            <div className='flex flex-col sm:flex-row justify-between items-center py-10 sm:py-[56px] pl-2 sm:pl-10 pr-10 sm:pr-[70px]'>
                <div className='text-white max-w-[350px] md:max-w-[450px] lg:max-w-[566px] font-bold'>
                    <h1 className='text-3xl md:text-[35px] lg:text-[46px]  md:leading-10 lg:leading-[64px]  '>Ready to Simplify Your Document Management?</h1>
                    <p className='text-sm sm:text-base leading-[22px] capitalize pt-5 pb-5 md:pb-0 lg:pt-[30px]'>Sign up today and experience the power of AI-driven legal documentation.</p>
                </div>
                <Button className="bg-white text-secondary min-w-fit">Get Started Now</Button>
            </div>
        </Container>
    </section>
  );
}

export default Management;

