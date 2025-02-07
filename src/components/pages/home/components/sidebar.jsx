import { useState } from "react";

export const Sidebar = ({ isOpen }) => {
  

  const menuItems = [
    { name: "Home", icon: "Home.svg" },
    { name: "Trends", icon: "Trends.svg" },
    { name: "Subscriptions", icon: "Subscriptions.svg" },
    { name: "Originals", icon: "Originals.svg", divider: true },
    { name: "History", icon: "History.svg" },
    { name: "Watch later", icon: "Watch-later.svg" },
  ];

  return (
    <div className={`flex ${isOpen ? "w-64" : "w-20"} h-screen bg-[#212121] text-white flex-col transition-all duration-300 shadow-lg overflow-hidden`}>
      
      <ul className="flex-1 overflow-y-auto mt-[10px]">
        {menuItems.map((item, index) => (
          <div key={index}>
            <li
              className="flex items-center gap-4 px-4 py-3 hover:bg-[#2e2d2a] cursor-pointer transition-colors duration-200 rounded-xl"
            >
              <img
                src={`/asset/svgicons/${item.icon}`}
                alt={`${item.name} icon`}
                className="w-[30px] h-[30px] ml-[7px] text-[20px]"
              />
              {isOpen && <span className="text-sm font-medium">{item.name}</span>}
            </li>
            {item.divider && <hr className="my-2 border-[#424242]" />}
          </div>
        ))}
      </ul>
     
    </div>
  );
};
