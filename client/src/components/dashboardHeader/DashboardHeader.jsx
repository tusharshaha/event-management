import React from 'react';
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";

const DashboardHeader = () => {
    return (
        <>
            <div class="h-[67px] z-[51] flex items-center relative border-b border-slate-200">
                <nav class="flex hidden mr-auto -intro-x sm:flex" aria-label="breadcrumb">
                    <ol class="flex items-center text-primary dark:text-slate-300">
                        <li class=""><a aria-current="page" href="/" class="router-link-active router-link-exact-active">Application</a></li>
                        <li class="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-bredcrumb-chevron-dark before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-bredcrumb-chevron-darkmode text-slate-800 cursor-text dark:text-slate-400"><a aria-current="page" href="/" class="router-link-active router-link-exact-active"> Dashboard </a></li>
                    </ol>
                </nav>
                <div class="relative mr-3 intro-x sm:mr-6">
                    <fieldset className="w-full space-y-1 dark:text-gray-100">
                        <label for="Search" className="hidden">Search</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                    <BsSearch />
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
                        </div>
                    </fieldset>
                </div>
                <div class="relative mr-auto intro-x sm:mr-6">
                    <div class="cursor-pointer relative text-slate-600 outline-none block before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger" id="headlessui-popover-button-1" aria-expanded="false">
                        <GrNotification />
                    </div>

                </div>
                <div class="relative">
                    <div class="cursor-pointer block w-8 h-8 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x" disabled="false" id="headlessui-menu-button-3" aria-haspopup="menu" aria-expanded="false">
                        <img alt="Midone Tailwind HTML Admin Template" src="/assets/profile-14.67599da9.jpg" /></div>

                </div>
            </div>
        </>
    )
}

export default DashboardHeader