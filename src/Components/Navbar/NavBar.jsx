import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logoImg from "../../assets/logo.png";
import { RiShoppingCartLine } from "react-icons/ri";
const NavBar = () => {
  const [showmenu, setShowMenu] = useState();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` top-0 fixed z-50 w-full duration-200 ${
        scrolled && "bg-black "
      } `}
    >
      <div className="flex items-center justify-between h-14 md:h-20 ">
        <div className="px-5 md:px-10">
          <img src={logoImg} alt="" />
        </div>
        <div
          className="text-white text-3xl px-5 md:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <RxHamburgerMenu />
        </div>

        <ul
          className={`${
            !showmenu && "hidden"
          } absolute right-0 top-full w-full gap-6 space-y-3  pl-3 text-white md:static md:flex md:h-auto md:w-auto md:space-y-0`}
        >
          <li className="">Home</li>
          <li className="">Categories</li>
          <li className="">Contact Us</li>
          <li className="">Blog</li>
        </ul>
        <div className="text-white md:flex hidden gap-10 mx-10">
          <span>
            <FaUser title="Profile" size={20} />
          </span>
          <span>
            <RiShoppingCartLine title="Cart" size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
