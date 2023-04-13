import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [open, setOpen] =useState(false);
    return (
            <div className='flex justify-between items-center my-5 mx-6'>
            <div>
                <h1 className='text-5xl font-bold mr-8'>Job Fair</h1>
            </div>
            <div className={`flex flex-col md:flex-row absolute md:static bg-purple-500 md:bg-white ${open ? 'top-20 right-8 p-4 text-white rounded z-10': '-top-56'}`}>
                <ActiveLink to= '/'>Home</ActiveLink>
                <ActiveLink to= '/statistics'>Statistics</ActiveLink>
                <ActiveLink to= '/applied-jobs'>Applied Jobs</ActiveLink>
                <ActiveLink to= '/blog'>Blog</ActiveLink>
            </div>
            <div>
                <button className='bg-purple-500 p-3 font-bold text-white rounded md:block hidden'>Apply Now</button>
            </div>
            <div onClick={()=>setOpen(!open)} className='md:hidden'>
                <span>{open==true? <FontAwesomeIcon icon={faXmark}/>: <FontAwesomeIcon icon={faBars}/>}</span>
            </div>
        </div>
        
    );
};

export default Header;