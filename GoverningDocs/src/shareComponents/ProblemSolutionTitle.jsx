import React from 'react';
import {SectionTitle} from '../shareComponents/SectionTitle'
import { Arrow } from '../compnents/Home/Icon.jsx';

const ProblemSolutionTitle = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center gap-5'>
        <SectionTitle gradient='Solution'>Problem & </SectionTitle>
        <div className='flex justify-center items-center gap-[15px]'>
            <button className='bg-white size-9 sm:size-10 rounded-full text-primary flex justify-center items-center shadow-Arrow  transition-colors duration-200'><Arrow/></button>
            <button className='transform rotate-180 bg-primary size-9 sm:size-10 rounded-full text-white flex justify-center items-center shadow-Arrow  transition-colors duration-200'><Arrow/></button>

        </div>
    </div>
  );
}

export default ProblemSolutionTitle;
