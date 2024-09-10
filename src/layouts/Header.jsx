import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { FaFileImport } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { TbTriangleInvertedFilled } from "react-icons/tb";


const Header = () => {
     
    return (
        <header className='flex justify-between p-5 bg-black'>
            <div className="netflix flex items-center" >
                <h1 className=' uppercase font-bold w-[130px]'>Netflix</h1>
                <div className='relative list-cate'>
                        <h2 className='md:hidden block text-white flex items-center text-sm'>Browse movies<TbTriangleInvertedFilled className='ml-2' /> </h2>
                 <ul className='gap-4 md:flex menu'>
                    <li className='font-small text-[#fff] cursor-pointer md:hover:text-gray-500 duration-300'>Home</li>
                    <li className='font-small text-[#fff] cursor-pointer md:hover:text-gray-500 duration-300'>TV Series</li>
                    <li className='font-small text-[#fff] cursor-pointer md:hover:text-gray-500 duration-300'>New & Popular</li>
                    <li className='font-small text-[#fff] cursor-pointer md:hover:text-gray-500 duration-300'>My List</li>
                    <li className='font-small text-[#fff] cursor-pointer md:hover:text-gray-500 duration-300'>Browse by language</li>
                  </ul>
                </div>
            </div>
            <ul className='flex items-center gap-4  '>
                <FaSearch className='text-[#fff] text-[20px] cursor-pointer hover:text-gray-500 duration-300' />
                <FaBell className='text-[#fff] text-[20px] cursor-pointer hover:text-gray-500 duration-300' />
                <li className='relative group'>
                    <img className='w-10 h-10 rounded-full' src="https://media.yeah1.com/files/phuongthao09vd/2024/03/12/jisoo-blackpink-ung-ho-doanh-thu-kenh-youtube-cho-ca-mau-1-150428.jpg" alt="" />
                    <div className='absolute bg-[#333] w-[200px] right-0 p-3 hidden group-hover:block'>
                        <div className='flex items-center gap-3 text-[#fff] py-3'>
                            <TiPencil />
                            <span>Profile Management</span>
                        </div>
                        <div className='flex items-center gap-3 text-[#fff] py-3'>
                            <FaFileImport />
                            <span>Transfer file</span>
                        </div>
                        <div className='flex items-center gap-3 text-[#fff] py-3'>
                            <FaUser />
                            <span>Account</span>
                        </div>
                        <div className='flex items-center gap-3 text-[#fff] py-3'>
                            <BsFillQuestionCircleFill />
                            <span>Help Center</span>
                        </div>
                        <div className='flex justify-center border-t-2 border-gray-500'>
                            <span className='text-[#fff]'>Sign out of Netflix</span>
                        </div>
                    </div>

                </li>
            </ul>
        </header>
    );
};

export default Header;