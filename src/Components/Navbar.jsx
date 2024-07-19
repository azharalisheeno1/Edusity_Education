import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-scroll";

function Navbar() {
  const menus = [
    { id: 1, name: "Home", path: "Home" },
    { id: 2, name: "Program", path: "Program" },
    { id: 3, name: "About us", path: "About" },
    { id: 4, name: "Campus", path: "Campus" },
    { id: 5, name: "Testimonials", path: "Testimonials" },
  ];

  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <nav
      className={`flex fixed justify-between w-full top-0 left-0 py-2 items-center md:px-24 px-3 text-white z-50 duration-300 ${
        sticky ? "bg-slate-700" : ""
      }`}
    >
      <div className="flex gap-3 items-center">
        <img src={Logo} alt="Logo" className="h-10" />
        <h1 className="md:text-3xl text-xl">Edusity</h1>
      </div>

      <div className="hidden md:flex">
        <ul className="flex space-x-5 items-center">
          {menus.map((menu) => (
            <li key={menu.id} className="hover:text-gray-400 cursor-pointer">
              <Link
                spy={true}
                smooth={true}
                duration={700}
                to={menu.path}
              >
                {menu.name}
              </Link>
            </li>
          ))}
          <li className="bg-white text-black px-4 cursor-pointer hover:bg-sky-400 hover:text-white py-2 rounded-full">
            <Link spy={true} smooth={true} duration={700} to="Contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <RiMenu3Fill size={24} />
        {open && (
          <div className="absolute top-[55px] right-0 h-screen bg-slate-700 md:hidden flex flex-col items-center w-full px-14 py-24">
            <ul className="flex flex-col space-y-12 justify-center items-center">
              {menus.map((menu) => (
                <li
                  key={menu.id}
                  className="hover:text-gray-400 text-3xl cursor-pointer"
                >
                  <Link
                    spy={true}
                    smooth={true}
                    duration={700}
                    to={menu.path}
                    onClick={handleMenuClick}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
              <li className="bg-white text-black px-4 py-2 rounded-full">
                <Link
                  spy={true}
                  smooth={true}
                  duration={700}
                  to="Contact"
                  onClick={handleMenuClick}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
