import React from 'react';

function Footer() {
  return (
    <>
        <div className='container'>
            <div className='d-flex justify-content-between mt-3 footerSection mx-auto'>
                <div className='d-flex gap-3'>
                    <p className='footerText'>Privacy Policy</p>
                    <p className='footerText'>Term of Use</p>
                    <p className='copyRight'>© 2021 All rights reserved</p>
                </div>
                <div className='d-flex gap-2 globalLanguage'>
                <i class="bi bi-globe-americas"></i>
                <p>English</p>
                <p className='ms-2'>... USD</p>
                </div>

            </div>

        </div>
    </>
  );
}

export default Footer;
