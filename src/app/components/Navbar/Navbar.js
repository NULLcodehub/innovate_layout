"use client";
import React, { useState } from 'react';
import { GoChevronDown } from "react-icons/go";
import { FaSearch } from 'react-icons/fa';
import { GoMultiSelect } from "react-icons/go";
import './Navbar.css'

const Navbar = () => {

    const [isActive,setIsActive]=useState(false)

    return (
      <>
        <section className="Navbar flex justify-around items-center">
          <div className={`nav-list hidden lg:flex `}>
            <ul className="flex gap-16">
              <li className="nav-item">
                Home <GoChevronDown />{" "}
              </li>
              <li className="nav-item">
                Event <GoChevronDown />
              </li>
              <li className="nav-item">
                Contact <GoChevronDown />
              </li>
              <li className="nav-item">
                Blog <GoChevronDown />
              </li>
            </ul>
          </div>

          <div className="flex items-center border rounded-full overflow-hidden search ">

            <input
              type="text"
              placeholder="Search"
              className="flex-1 p-2 outline-none border-none"
            />
            <span className="p-2 text-white ">
                <FaSearch className=''/>
            </span>
          </div>

          <div className='block lg:hidden'>
            <GoMultiSelect className='text-white size-8'  onClick={()=>{setIsActive(!isActive)}}/>
          </div>

        </section>
        <div className={`lg:hidden toogle-nav w-screen  ${isActive ? "block":"hidden"}`}>
                <ul className='text-1xl	' onClick={()=>{setIsActive(!isActive)}}>
                    <li>Home</li>
                    <li>Event</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
        </div>

      </>
    );
};

export default Navbar;