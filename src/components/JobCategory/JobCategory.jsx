import React from 'react';

const JobCategory = ({category}) => {
    const {job_category, availability, image} = category;
    return (
        <div className='border rounded bg-purple-50 w-80 h-50 flex flex-col items-center p-3'>
            <img src={image} alt="" className='w-20 h-20 rounded'/>
            <h1 className='text-lg font-bold'>{job_category}</h1>
            <p>{availability} Jobs Available</p>
        </div>
    );
};

export default JobCategory;