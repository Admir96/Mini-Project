import React from 'react';

const Footer = () => {
  return (
    <div className="flex items-center justify-between flex-wrap text-white bg-indigo-500 p-7 m-0">
      <div className="container  flex justify-between ">
        <div>
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
        <div className='mt-1'>
          <ul className="flex space-x-8 ">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;