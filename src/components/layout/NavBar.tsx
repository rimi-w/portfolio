import clsx from "clsx";
import Logo from "../../../public/RimiLogo.png";
import { useState } from "react";
import type { Menu } from "../../types/menu";

const NavBar = () => {
  const menus: Menu[] = ["Projects", "About", "Contact"];
  const [activeMenu, setActiveMenu] = useState<Menu>();

  const handleClickMenu = (menu: Menu) => {
    setActiveMenu(menu);
  };

  return (
    <nav className="flex justify-between px-20 items-end py-5 border-b border-primary-500">
      <img
        src={Logo}
        alt="로고"
        className="w-20 rounded-full invert bg-primary-700 hover:cursor-pointer hover:bg-primary-500 transition-colors duration-300 ease-in"
      />
      <ul className="flex gap-3 text-primary-400 transition-colors duration-1000 ease-in">
        {menus.map((menu, i) => (
          <li
            key={i}
            onClick={() => handleClickMenu(menu)}
            className={clsx(
              "flex gap-3",
              "hover:cursor-pointer",
              activeMenu === menu &&
                "text-primary-900 transition-colors duration-500 ease-in"
            )}
          >
            {menu}{" "}
            <span
              className={clsx(
                i === menus.length - 1 && "hidden",
                "text-primary-400"
              )}
            >
              |
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
