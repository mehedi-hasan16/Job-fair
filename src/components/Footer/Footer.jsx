import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3 bg-black md:px-6 py-9 text-white p-4'>
                <div>
                    <h3 className='font-bold text-3xl'>Job Fair</h3>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.   </p>
                    <FontAwesomeIcon icon={faFacebook} className='mr-3 mt-3 bg-white w-7 h-7 rounded-full p-2 text-blue-500' />
                    <FontAwesomeIcon icon={faTwitter} className='mr-3 mt-3 bg-white w-7 h-7 rounded-full p-2 text-blue-500' />
                    <FontAwesomeIcon icon={faInstagram} className='mr-3 mt-3 bg-white w-7 h-7 rounded-full p-2 text-red-500' />
                   
                </div>
                <div>
                    <h4 className='font-bold text-xl'>Company</h4>
                    <p>About us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h4 className='font-bold text-xl'>Products</h4>
                    <p>Protype</p>
                    <p>Plan & products</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div>
                    <h4 className='font-bold text-xl'>Support</h4>
                    <p>Help desk</p>
                    <p>Sales</p>
                    <p>Became a partner</p>
                    <p>Developers</p>
                </div>
                <div>
                    <h4 className='font-bold text-xl'>Contact</h4>
                    <p>56 New York, NY</p>
                    <p>+123-55-669</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;