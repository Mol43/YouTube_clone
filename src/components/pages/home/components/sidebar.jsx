import { useState } from "react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", icon: "Home.svg" },
    { name: "Trends", icon: "Trends.svg" },
    { name: "Subscriptions", icon: "Subscriptions.svg" },
    { name: "Originals", icon: "Originals.svg", divider: true },
    { name: "Library", icon: "Library.svg" },
    { name: "History", icon: "History.svg" },
    { name: "Your videos", icon: "Your-videos.svg" },
    { name: "Watch later", icon: "Watch-later.svg" },
  ];

  return (
    <div className={`flex ${isOpen ? "w-64" : "w-20"} h-screen bg-gray-900 text-white flex-col transition-all duration-300 shadow-lg overflow-hidden`}>
      <div className="flex items-center justify-between h-16 bg-gray-900 border-b duration-300duration-100 delay-400 px-4 border-gray-700">
        <img
          onClick={toggleSidebar}
          src="/asset/svgicons/Menu.svg"
          alt="Toggle Sidebar"
          className="w-[28px] h-[28px] ml-[7px] cursor-pointer"
        />
        {/* <div className="flex items-center gap-2">
          <img
            src="/asset/svgicons/Youtube.svg"
            alt="YouTube Logo"
            className="w-[100px] h-[26px] mr-[56px]"
          />
        </div> */}
      </div>
      <ul className="flex-1 overflow-y-auto mt-[10px]">
        {menuItems.map((item, index) => (
          <div key={index}>
            <li
              className="flex items-center gap-4 px-4 py-3 hover:bg-gray-700 cursor-pointer transition-colors duration-200 rounded-xl"
            >
              <img
                src={`/asset/svgicons/${item.icon}`}
                alt={`${item.name} icon`}
                className="w-[30px] h-[30px] ml-[7px] text-[20px]"
              />
              {isOpen && <span className="text-sm font-medium">{item.name}</span>}
            </li>
            {item.divider && <hr className="my-2 border-gray-700" />}
          </div>
        ))}
      </ul>
     
    </div>
  );
};
