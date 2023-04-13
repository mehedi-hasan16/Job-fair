import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';


const AppliedJob = () => {
    const appliedJob = useLoaderData()
    const [select, setSelect ]= useState("All");
    const [job, setJob]= useState(appliedJob);

    useEffect(() => {
        if (select === "All") {
          setJob(appliedJob);
        } else {
          const filterJob = appliedJob.filter((jobType) => jobType.work_type === select);
          setJob(filterJob);
        }
      }, [select]);

        
    
    
    return (
        <div className='my-3 p-3 min-h-screen'>
            <div className='flex justify-end m-3'>
                <div>
                    <select className='p-2 border rounded bg-purple-100' value={select} onChange={event=>setSelect(event.target.value)} defaultValue="All">
                        <option>All</option>
                        <option>Remote</option>
                        <option>On-site</option>
                        <option>Full-time</option>
                    </select>
                </div>
            </div>
            {
                job.map(job=><Job job={job} key={job.id}></Job>)
            }
        </div>
    );
};

export default AppliedJob;