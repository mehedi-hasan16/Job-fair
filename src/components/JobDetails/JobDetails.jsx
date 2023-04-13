import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addToDb } from '../../fakedb';
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSackDollar, faPhone,faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'

const JobDetails = () => {

    const loaderJobDetails = useLoaderData();
    const {id, education_requirement,description, experience, responsibilities}= loaderJobDetails;

    const [cart, setCart] = useState([]);
    const {salary, job_name, phone, email, location } = cart;
    useEffect(()=>{
        fetch('/featuredJobs.json')
        .then(res=>res.json())
        .then(data=>{setCart(data.find(job=>(job.id == id)))})
    },[])


    const [appliedJob, setAppliedJob] =useState([]);
  
    const handelAddCart =(cart)=>{
         let newCart = [];
         const exists = appliedJob.find(job => job.id === cart.id);
         if (!exists) {
             newCart = [...appliedJob, cart]
             toast.success("Successfully applied");
         }
         else {
            toast.error("You have already applied the job");
         }
 
         setAppliedJob(newCart);
         addToDb(cart.id)
    }

    return (
        <div className='flex justify-center min-h-screen'>
            <div className='w-3/5'>
            <p className='mb-6'><span className='font-bold'>Job Description:</span> {description}</p>
            <p className='mb-6'><span className='font-bold'>Job Responsibilities:</span> {responsibilities}</p>
            <p className='mb-6'><span className='font-bold'>Education Requirment:</span> {education_requirement}</p>
            <p className='mb-6'><span className='font-bold'>Experience:</span> {experience}</p>

            </div>

            <div>
                <div className='bg-purple-50 rounded border'>
                    <div className='p-3'>
                        <h2 className='font-bold text-lg mb-3'>Job Details</h2>
                        <p><FontAwesomeIcon icon={faSackDollar}/> <span className='font-bold'>Salary:</span> {salary}</p>
                        <p><FontAwesomeIcon icon={faSuitcase}/> <span className='font-bold'>Job Title:</span> {job_name}</p>
                        <h2 className='font-bold text-lg my-3'>Contact Information</h2>
                        <p><FontAwesomeIcon icon={faPhone}/> <span className='font-bold'>Phone: </span> {phone}</p>
                        <p><FontAwesomeIcon icon={faEnvelope}/> <span className='font-bold'>Email:</span> {email}</p>
                        <p><FontAwesomeIcon icon={faLocationDot}/> <span className='font-bold'>Address:</span> {location}</p>
                    </div>
                </div>
                <div>
                    <button 
                    onClick={()=>handelAddCart(cart)} 
                    className='bg-purple-500 px-3 py-2 font-bold text-white rounded w-full mt-4'>
                    Apply Now
                    </button>
                    <Toaster />
                </div>
            </div>
                    

            
        </div>
    );
};

export default JobDetails;