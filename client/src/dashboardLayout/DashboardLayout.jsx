import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardHeader from "../components/dashboardHeader/DashboardHeader";
import logo from "../assets/logo/logo.png";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { TfiDashboard } from "react-icons/tfi";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [selected, setSelected] = useState(0);

  const mainBackground = "bg-[#010a57] h-screen p-5";
  const mainFlexContainer = "flex mt-[4.7rem] md:mt-0 h-full";
  const navStyles =
    "pr-5 pb-16 overflow-x-hidden hidden md:block w-[85px] xl:w-[230px] h-full";
  const navHeaderStyles =
    "bg-[#010a57] w-full flex justify-between items-center pt-2 pb-5 border-b border-[#4561c0] fixed z-50";
  const logoLinkStyles =
    "router-link-active router-link-exact-active flex items-center  pl-5 intro-x w-[160px]";
  const logoImageStyles = "w-full";
  const menuIconStyles = "text-white text-4xl cursor-pointer";
  const navListStyles = "pt-20 h-[80vh] flex flex-col gap-4";
  const activeListItem = "list_item active";
  const navListItemIconContainer =
    "text-primary  before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-5 before:w-12 before:h-full before:bg-slate-100 ";
  const navListItemIcon = "text-black";
  const navListItemText =
    "hidden xl:flex items-center w-full ml-3 text-slate-800 font-medium dark:text-slate-300";
  const navListItemTransition =
    "transition ease-in duration-100 ml-auto mr-5 hidden xl:block";
  const nonActiveListItem = "list_item ";
  const whiteNavListItemIcon = "text-white";
  const whiteNavListItemText =
    "hidden xl:flex items-center w-full ml-3 text-white font-medium dark:text-slate-300";
  const mainContentArea =
    "rounded-[30px] min-w-0 min-h-[93vh] flex-1 pb-10 bg-slate-100 dark:bg-darkmode-700 px-4 md:px-[22px] max-w-full md:max-w-auto before:content-[''] before:w-full before:h-px before:block h-full z-50";
  const contentInnerWrapper = "w-full py-5 px-5";

  return (
    <>
      <div className={mainBackground}>
        <div className={mainFlexContainer}>
          <nav className={navStyles}>
            <div className={navHeaderStyles} type="div">
              <Link aria-current="page" to="/" className={logoLinkStyles}>
                <img alt="logo" className={logoImageStyles} src={logo} />
              </Link>
              <HiBars3BottomLeft
                onClick={toggle}
                style={{ marginLeft: isOpen ? "1rem" : "0" }}
                className={menuIconStyles}
              />
            </div>
            <ul className={navListStyles}>
              <li>
                <Link className={activeListItem} to="#">
                  <div className={navListItemIconContainer}>
                    <TfiDashboard className={navListItemIcon} />
                  </div>
                  <div className={navListItemText}>
                    Dashboard
                    <div className={navListItemTransition}></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link className={nonActiveListItem} to="#">
                  <div className={navListItemIconContainer}>
                    <TfiDashboard className={whiteNavListItemIcon} />
                  </div>
                  <div className={whiteNavListItemText}>
                    Profile
                    <div className={navListItemTransition}></div>
                  </div>
                </Link>
                <Link className={nonActiveListItem} to="#">
                  <div className={navListItemIconContainer}>
                    <TfiDashboard className={whiteNavListItemIcon} />
                  </div>
                  <div className={whiteNavListItemText}>
                    Users
                    <div className={navListItemTransition}></div>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={mainContentArea}>
            <DashboardHeader />
            <div className={contentInnerWrapper}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
