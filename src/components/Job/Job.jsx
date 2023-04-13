import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons'

const Job = ({job}) => {
    const {id, image, job_name, company_name, location, salary, work_type}= job;



    return (

    
            <div>
                <div className='flex border rounded m-3 items-center'>
                    <img src={image} alt="" className='w-24 p-3'/>
                        <div className='flex items-center justify-between w-full mx-4 p-3'>
                            <div>
                                <h2 className='font-bold'>{job_name}</h2>
                                <p className='mt-2'>{company_name}</p>
                                <p className='my-2'><span className='border border-purple-500 bg-purple-50 w-fit px-2 rounded'> {work_type}</span></p>
                                <div className='flex gap-4'>
                                    <p><FontAwesomeIcon icon={faLocationDot}/> {location}</p>
                                    <p><FontAwesomeIcon icon={faSackDollar}/> {salary}</p>
                                </div>
                            </div>
                            <div>
                                <Link to={`/jobDetails/${id}`}><button className='bg-purple-500 px-3 py-2 font-bold text-white rounded'>View Details</button></Link>
                            </div>
                        </div>
                </div>
        </div>
    
    );
};

export default Job;