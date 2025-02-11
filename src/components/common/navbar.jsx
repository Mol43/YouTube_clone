import React, { useState } from "react";
import { Container } from "./Container";
import { Sidebar } from "../pages/home/components/sidebar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
    console.log(isOpen);
    
  return (
    <>
      <Container>
        <div className="w-full h-[56px] flex items-center justify-between border-b-[1px] border-[#333333]">
          <div className="flex items-center gap-[30px]">
            <button className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full hover:bg-[#414141]"
            onClick={toggleSidebar}>
              <img src="/asset/svgicons/hamburger.svg" alt="" />
            </button>
            <a href="#" className="flex items-center gap-[10px]">
              <img src="/asset/svgicons/logo.svg" alt="" />
              <p className="text-xl font-bold">YouTube</p>
            </a>
          </div>
          <div className="flex items-center gap-[10px] bg-[#424242] w-[439px] h-[32px] rounded-l-md rounded-r-md">
            <input
              type="text"
              placeholder="Search"
              className="w-[400px] h-[29px] ml-0.5 rounded-l-md rounded-r-md text-[#999999] px-[10px] bg-[#000000] outline-none"
            />
            <button className="cursor-pointer"> 
              <img src="/asset/svgicons/search.svg" alt="" />
            </button>
          </div>
          <a href="#" className="">
            <img src="/asset/svgicons/avatar.svg" alt="" />
          </a>
        </div>
      </Container>
        <Sidebar isOpen={isOpen} />
    </>
  );
};
