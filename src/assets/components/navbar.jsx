import React from 'react';
import { FaBook, FaDumbbell, FaMedal, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navItems = [
  { label: "Обучение", icon: <FaBook />, path: "/learning" },
  { label: "Практика", icon: <FaDumbbell />, path: "/lessons" },
  { label: "Рейтинги", icon: <FaMedal />, path: "/rankings" },
  { label: "Профиль", icon: <FaUser />, path: "/profile" },
];

const Navbar = ({ onLogout }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  return (
    <nav className="w-full md:w-64 fixed z-20 max-md:bottom-0 max-sm:bottom-0 md:left-0 max-sm:justify-center  h-16 md:h-screen bg-slate-900 p-2  md:p-4 flex md:flex-col items-center md:items-start  md:justify-start border-b-2 md:border-b-0 md:border-r-2 border-slate-500">
      <div className="text-green-500 text-xl sm:text-2xl md:text-4xl font-bold pl-4 md:pl-5 mb-0 md:mb-6 max-sm:hidden">
        BilimCom
      </div>

      <ul className="flex max-sm:gap-5 md:flex-col space-x-2 sm:space-x-4 md:space-x-0 md:space-y-2 max-sm:overflow-auto md:overflow-visible">
        {navItems.map((item, index) => (
          <li 
            key={index} 
            onClick={() => setActiveItem(index)} 
            className={`flex items-center px-2 sm:px-3 md:px-4 md:py-3 rounded-lg sm:rounded-xl md:rounded-3xl space-x-1 sm:space-x-2 md:space-x-3 
              ${activeItem === index ? 'bg-slate-800' : ''} hover:bg-slate-800`}
          >
            <Link to={item.path} className="text-white text-base max-sm:text-2xl sm:text-3xl md:text-xl">{item.icon}</Link>
            <Link to={item.path} className="text-white text-base max-sm:hidden md:text-xl max-md:hidden">
              {item.label}
            </Link>
          </li>
        ))}
        <li 
          onClick={onLogout} 
          className="flex items-center px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl md:rounded-3xl space-x-1 sm:space-x-2 md:space-x-3 hover:bg-slate-800 cursor-pointer"
        >
          <span className="text-white text-lg sm:text-xl md:text-2xl max-sm:text-2xl"><FaSignOutAlt /></span>
          <span className="text-white text-base max-sm:hidden md:text-xl max-md:hidden">Выйти</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
