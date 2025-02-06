

const Sidebar = () => {
  const menuItems = [
    { name: "Home", icon: "icon.svg" },
    { name: "Trends", icon: "icon.svg" },
    { name: "Subscriptions", icon: "icon.svg" },
    { name: "Originals", icon: "icon.svg" },
    { name: "Library", icon: "icon.svg" },
    { name: "History", icon: "icon.svg" },
    { name: "Your videos", icon: "icon.svg" },
    { name: "Your movies", icon: "icon.svg" },
    { name: "Watch later", icon: "icon.svg" },
    { name: "Show more", icon: "icon.svg" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 bg-gray-800">
        <span className="text-xl font-bold">YouTube Premium</span>
      </div>
      <ul className="flex-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 cursor-pointer"
          >
            <img
              src={`/svgicons/${item.icon}`}
              alt={`${item.name} icon`}
              className="w-6 h-6"
            />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
