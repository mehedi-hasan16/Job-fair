import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import JobCart from '../JobCart/JobCart';

const Home = () => {
    const [jobCategory, setJobCategory] = useState([]);
    
    const loaderData = useLoaderData();
    const minData = loaderData.slice(0,4)
   const [jobData, setJobData]= useState(minData);


    useEffect(()=>{
        fetch('/jobCategory.json')
        .then(res=>res.json())
        .then(data=>setJobCategory(data))
    },[])

    const handelLoadMore =()=>{
        setJobData(loaderData);
    }


    return (
        <div>
            <div className='md:flex items-center md:mx-6'>
                <div className='md:w-1/2 md:p-4 text-center md:text-left'>
                    <h1 className='text-5xl font-bold'>One Step Closer To Your <span className='text-purple-500'>Dream Job</span></h1>
                    <p className='my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-purple-500 p-3 font-bold text-white rounded'>Get Started</button>
                </div>
                <div>
                    <img src="https://thumbs.dreamstime.com/b/job-fair-vancouver-place-croatian-cultural-centre-canada-people-different-nationalities-trying-to-find-52773660.jpg" alt="job-image" className='rounded my-3'/>

                </div>
            </div>

            {/* job category section  */}
                <div>
                    <h1 className='text-center text-4xl font-bold my-5'>Job Category List</h1>
                    <p className='text-center mb-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='flex flex-col md:flex-row gap-3 items-center md:justify-around md:mx-6'>
                    {jobCategory.map(category=><JobCategory category={category} key={category.id}></JobCategory>)}
                </div>

                {/* Featured Jobs section */}
                <div>
                    <div className='my-4'>
                    <h1 className='text-center text-4xl font-bold my-5'>Featured Jobs</h1>
                    <p className='text-center mb-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-6 p-3'>
                        {
                            jobData.map(job=><JobCart job={job} key={job.id}></JobCart>)
                        }
                    </div>
                    
                </div>
                <div className='flex justify-center'>
                <button onClick={handelLoadMore} className='bg-purple-500 px-3 py-2 font-bold text-white rounded my-4'>See More</button>
                </div>
        </div>
    );
};

export default Home;