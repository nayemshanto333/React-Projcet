import React from 'react';
import { Container } from '../../shareComponents/Container';
import { Button } from '../../shareComponents/Button';

const Management = () => {
  return (
    <section>
        <Container className="bg-gradient-primary max-w-[1184px] h-[314px] rounded-[20px] ">
            <div className='flex justify-between items-center py-[56px] ps-10 pe-[70px]'>
                <div className='text-white max-w-[566px] font-bold'>
                    <h1 className=' text-10 sm:text-[30px] lg:text-[46px] lg:leading-[64px]  '>Ready to Simplify Your Document Management?</h1>
                    <p className='text-sm sm:text-base leading-[22px] capitalize pt-[30px]'>Sign up today and experience the power of AI-driven legal documentation.</p>
                </div>
                <Button className="bg-white text-secondary">Get Started Now</Button>
            </div>
        </Container>
    </section>
  );
}

export default Management;

