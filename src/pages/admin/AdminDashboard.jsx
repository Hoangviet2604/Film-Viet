import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AdminRoutes from '../../routes/AdminRoutes';

function AdminDashboard(props) {
    const [hidden, setHidden] = useState(true);
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className='md:flex'>
            <div className='left bg-pink-600 md:h-screen'>
                <div className="left-header flex items-center p-5">
                    <i onClick={() => setHidden(!hidden)} class={hidden ? "fa-regular fa-hand-point-right" : "fa-solid fa-bars"}></i>
                    <h1 className={`ms-4 ${hidden ? "hidden" : ""} `}>FILMVIET</h1>
                </div>
                <div className={`${hidden ? "menu-items" : ""} `}>
                <Link to={"/"} className='flex items-center p-5 hover:bg-black hover:text-white'>
                    <i class="fa-solid fa-border-all"></i>
                    <p className={`ms-4 ${hidden ? "hidden" : ""} `}>Dashboard</p>
                </Link>
                <h6 className={`ms-2 ${hidden ? "hidden" : ""} `}>UI Elements</h6>
                <Link to={"/categories"} className='flex items-center p-5 hover:bg-black hover:text-white'>
                    <i class="fa-brands fa-squarespace"></i>
                    <p className={`ms-4 ${hidden ? "hidden" : ""} `}>Category</p>
                </Link>
                <h6 className={`ms-2 ${hidden ? "hidden" : ""} `}>Forms and Datas</h6>
                <Link to={"/episodes"} className='flex items-center p-5 hover:bg-black hover:text-white'>
                    <i class="fa-regular fa-rectangle-list"></i>
                    <p className={`ms-4 ${hidden ? "hidden" : ""} `}>Episodes</p>
                </Link>
                <Link to={"/movies"} className='flex items-center p-5 hover:bg-black hover:text-white'>
                    <i class="fa-solid fa-chart-line"></i>
                    <p className={`ms-4 ${hidden ? "hidden" : ""} `}>Movies</p>
                </Link>
                <Link to={"/tables"} className='flex items-center p-5 hover:bg-black hover:text-white'>
                    <i class="fa-solid fa-table"></i>
                    <p className={`ms-4 ${hidden ? "hidden" : ""} `}>Tables</p>
                </Link>
                <Link to={"/icons"} className='flex items-center p-5 hover:bg-black hover:text-white'>
                    <i class="fa-solid fa-layer-group"></i>
                    <p className={`ms-4 ${hidden ? "hidden" : ""} `}>Icons</p>
                </Link>
                <h6 className={`ms-2 ${hidden ? "hidden" : ""} `}>PAGES</h6>
                <Link to={"/userpages"} className='flex items-center p-5 hover:bg-black hover:text-white'>
                    <i class="fa-regular fa-circle-user"></i>
                    <p className={`ms-4 ${hidden ? "hidden" : ""} `}>User Pages</p>
                </Link>
          </div>
            </div>
            <div className='right flex-1'>
                <div className="flex justify-between items-center px-3">
                    <div className="p-5">
                        <h1>
                            Good Morning, John Doe
                        </h1>
                        <h3>Your performance summary this week</h3>
                    </div>
                    <div className='flex items-center'>
                        <i class="fa-solid fa-magnifying-glass me-4"></i>
                        <i class="fa-regular fa-envelope me-4"></i>
                        <i class="fa-regular fa-bell me-4"></i>
                        <div className='relative' onClick={() => setDropdown(!dropdown)}>
                            <img className='w-10 h-10 rounded-full' src="https://admin.vov.gov.vn/UploadFolder/KhoTin/Images/UploadFolder/VOVVN/Images/sites/default/files/styles/large/public/2023-12/3_14.jpeg.jpg" alt="" />
                            <ul className={`absolute shadow-lg right-0 ${dropdown ? "" : "hidden"}`}>
                                <li className='whitespace-nowrap px-4 py-2 hover:bg-slate-950 hover:text-white'>
                                    <i class="fa-regular fa-user"></i> My Profile
                                </li>
                                <li className='whitespace-nowrap px-4 py-2 hover:bg-slate-950 hover:text-white'>
                                    <i class="fa-solid fa-gear"></i> Setting
                                </li>
                                <li className='whitespace-nowrap px-4 py-2 hover:bg-slate-950 hover:text-white'>
                                    <i class="fa-solid fa-right-from-bracket"></i> Logout
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-main">
                    <Routes>
                        {AdminRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={<route.Component />} // Correct usage of element
                            />
                        ))}
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;