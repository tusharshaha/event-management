import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardHeader from '../components/dashboardHeader/DashboardHeader';
import logo from '../assets/logo/logo.png';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { TfiDashboard } from "react-icons/tfi";










const DashboardLayout = () => {


    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen);

    const [selected, setSelected] = useState(0)

    return (
        <>
            <div className="bg-[#010a57] h-screen p-5">
                <div className="flex mt-[4.7rem] md:mt-0 h-full">
                    <nav className="pr-5 pb-16 overflow-x-hidden hidden md:block w-[85px] xl:w-[230px] h-full">

                        <div className="bg-[#010a57] w-full flex justify-between items-center pt-2 pb-5 border-b border-[#4561c0] fixed z-50" type="div">
                            <Link aria-current="page" to="/" className="router-link-active router-link-exact-active flex items-center  pl-5 intro-x w-[160px]">
                                <img alt="logo" className="w-full" src={logo} />
                            </Link>
                            <HiBars3BottomLeft onClick={toggle} style={{ marginLeft: isOpen ? "1rem" : "0" }} className='text-white text-4xl cursor-pointer' />
                        </div>
                        {/* <hr  className='bg-slate-600'/> */}
                        <ul className='pt-20 h-[80vh] flex flex-col gap-4'>
                            <li>
                                <Link className="list_item active" to="#">
                                    <div className="text-primary  before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-5 before:w-12 before:h-full before:bg-slate-100 ">
                                        <TfiDashboard className='text-black' />
                                    </div>
                                    <div className="hidden xl:flex items-center w-full ml-3 text-slate-800 font-medium dark:text-slate-300">Dashboard <div className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block">
                                    
                                    </div>
                                    </div>
                                </Link>

                            </li>
                            <li>
                                <Link className="list_item " to="#">
                                    <div className="text-primary  before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-5 before:w-12 before:h-full before:bg-slate-100 ">
                                        <TfiDashboard className='text-white' />
                                    </div>
                                    <div className="hidden xl:flex items-center w-full ml-3 text-white font-medium dark:text-slate-300">Profile <div className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block">
                                        
                                    </div>
                                    </div>
                                </Link>

                            </li>
                        </ul>
                    </nav>
                    <div className="rounded-[30px] min-w-0 min-h-[93vh] flex-1 pb-10 bg-slate-100 dark:bg-darkmode-700 px-4 md:px-[22px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block h-full z-50">
                        <DashboardHeader />
                        <div className='w-full py-5 px-5'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout