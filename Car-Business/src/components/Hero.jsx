import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
   <>
      <Carousel data-bs-theme='dark' indicators={false}>
         {/*Carousel 01 */}
        <Carousel.Item>
          <div className='text-center HeroArea '>
            <p className='mt-5 BrandColor'>Meet your new car</p>
            <h1 className=''>Honda Civic Type R</h1>
            <div className='HeroButton'>
              <button className='btn btn-outline-success me-3'>More Details</button>
              <button className='btn bg-primary text-white testDrive'>Test Drive</button>
            </div>
          </div>
          <div className='HeroImg'>
            <img className='d-block w-100 ' src="img/Header Image.png" alt="Hero Image" />
          </div>
        </Carousel.Item>

       {/*Carousel 02 */}

        <Carousel.Item>
          <div className='text-center HeroArea '>
            <p className='mt-5 BrandColor'>Meet your new car</p>
            <h1 className=''>Mahindra Thar ROXX</h1>
            <div className='HeroButton'>
              <button className='btn btn-outline-success me-3'>More Details</button>
              <button className='btn bg-primary text-white testDrive'>Test Drive</button>
            </div>
          </div>
          <div className='HeroImg'>
            <img className='d-block w-100 ' src="img/Header Image.png" alt="Hero Image" />
          </div>
        </Carousel.Item>

         {/*Carousel 03 */}
        <Carousel.Item>
          <div className='text-center HeroArea '>
            <p className='mt-5 BrandColor'>Meet your new car</p>
            <h1 className=''>Audi A6 Saloon</h1>
            <div className='HeroButton'>
              <button className='btn btn-outline-success me-3'>More Details</button>
              <button className='btn bg-primary text-white testDrive'>Test Drive</button>
            </div>
          </div>
          <div className='HeroImg'>
            <img className='d-block w-100 ' src="img/Header Image.png" alt="Hero Image" />
          </div>
        </Carousel.Item>
      </Carousel>
     
     
       

       
   </>
  );
}

export default Hero;
