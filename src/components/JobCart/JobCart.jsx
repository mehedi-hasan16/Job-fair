import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons'

const JobCart = ({job}) => {
    const {id, image, job_name, company_name, location, salary, work_type}= job;
    return (
        <div className='border p-4 rounded'>
            <img src={image} alt="" className='w-24' />
            <h1 className='font-bold'>{job_name}</h1>
            <p className='my-2'>{company_name}</p>
            <p className='border border-purple-500 bg-purple-50 w-fit px-2 rounded my-2'>{work_type}</p>
            <div className='flex gap-5 my-2'>
                <p><FontAwesomeIcon icon={faLocationDot}/> {location},</p>
                <p><FontAwesomeIcon icon={faSackDollar}/> Salary: {salary}</p>
            </div>
            <Link to={`/jobDetails/${id}`}><button className='bg-purple-500 px-3 py-2 font-bold text-white rounded'> View Details</button></Link>
        </div>
    );
};

export default JobCart;