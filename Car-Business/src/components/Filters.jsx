
import React from 'react';

const Type=()=>(
     <div className='d-flex justify-content-center align-items-center'>
        <label  >
            <span className='filter-searc-label text-start'>Type</span>
            <select className='form-select fs-6 fw-bold filter-search-select'>
                <option className='fw-bold fs-6' >Used Car</option>
                <option className='fw-bold fs-6' >New Car</option>
                <option className='fw-bold fs-6' >Vangari Car</option>
            </select>
        </label>
        <div className='vertical-line'>

        </div>
     </div>
)
const Make=()=>(
     <div className='d-flex justify-content-center align-items-center'>
        <label >
            <span className='filter-searc-label text-start'>Make</span>
            <select className='form-select fs-6 fw-bold filter-search-select'>
                <option className='fw-bold fs-6' >Infiniti</option>
                <option className='fw-bold fs-6' >One</option>
                <option className='fw-bold fs-6' >Two</option>
                <option className='fw-bold fs-6' >Three</option>
               
            </select>
        </label>
        <div className='vertical-line'>

        </div>
     </div>
)
const Year=()=>(
     <div className='d-flex justify-content-center align-items-center'>
        <label >
            
        <select className='form-select fs-6 fw-normal filter-search-select filter-text-color'>
                <option className='fw-bold fs-6' >Year</option>
                <option className='fw-bold fs-6' >2024</option>
                <option className='fw-bold fs-6' >2023</option>
                <option className='fw-bold fs-6' >2022</option>
                <option className='fw-bold fs-6' >2021</option>
                <option className='fw-bold fs-6' >2020</option>
                <option className='fw-bold fs-6' >2019</option>
                <option className='fw-bold fs-6' >2018</option>
                <option className='fw-bold fs-6' >2017</option>
            </select>
        </label>
        <div className='vertical-line'>

        </div>
     </div>
)
const Model=()=>(
     <div className='d-flex justify-content-center align-items-center'>
        <label >
        <select className='form-select fs-6 fw-normal filter-search-select filter-text-color'>
            <option className='fw-bold fs-6' >Model</option>
            <option className='fw-bold fs-6' >Toyota CH-R</option>
                <option className='fw-bold fs-6' >Audi A6 Saloon</option>
                <option className='fw-bold fs-6' >BMW-7X</option>
                <option className='fw-bold fs-6' >Ford F-Series</option>
                <option className='fw-bold fs-6' >Honda CR-V</option>
                <option className='fw-bold fs-6' >Volvo EX90</option>
            </select>
        </label>
        <div className='vertical-line'>

        </div>
    </div>
)
const Price=()=>(
     <div className='d-flex justify-content-center align-items-center'>
        <label >
            <select className='form-select fs-6 fw-normal filter-search-select filter-text-color'>
                <option className='fw-bold fs-6' >Price</option>
                <option className='fw-bold fs-6' >$10000</option>
                <option className='fw-bold fs-6' >$ 11000</option>
                <option className='fw-bold fs-6' >$ 12000</option>
                <option className='fw-bold fs-6' >$ 13000</option>
                <option className='fw-bold fs-6' >$ 14000</option>
                <option className='fw-bold fs-6' >$ 15000</option>
            </select>
        </label>
    </div>
)


function Filters() {
  return (
    <>
        <section className='my-5'>
            <h1 className='text-center fw-bold fs-2 filter-heading'>Which vehicles you are looking for? </h1>
            <div className='d-flex justify-content-center align-items-center filter-search-box gap-3 shadow'>
                <Type/>
                <Make/>
                <Year/>
                <Model/>
                <Price/>
                <button className='btn btn-primary search-btn'><i class="bi bi-search"></i> Search</button>
               
            </div>
        </section>
    </>
  );
}

export default Filters;
