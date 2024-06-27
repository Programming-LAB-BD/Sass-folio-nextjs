"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import LogoArea from "./LogoArea";
import NavItem from "./NavItem";

// Imported Fontawesome Globally
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faBars,
  faBriefcase,
  faEnvelope,
  faGear,
  faHouse,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// Setup Fontawesome Globally
config.autoAddCss = false;
library.add(faBars, faXmark, faHouse, faUser, faGear, faBriefcase, faEnvelope);

export default function MobileNav({ navItems }) {
  const nav = useRef(null);
  const iii_dot = useRef(null);
  const outside_of_navber = useRef(null);
  const Items = [...navItems];

  const handleOpenBtn = () => {
    iii_dot.current.classList.add("animation");
    nav.current.style.transform = "translateX(0)";
    outside_of_navber.current.classList.add("clicked");
  };

  const handleCloseBtn = () => {
    nav.current.style.transform = "translateX(-999px)";
    iii_dot.current.classList.remove("animation");
    outside_of_navber.current.classList.remove("clicked");
  };

  return (
    <div id="mobile_nav" className="md:hidden">
      <div
        ref={iii_dot}
        onClick={handleOpenBtn}
        className="fixed top-4 left-4 text-secondary text-2xl cursor-pointer transition-all z-10"
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" size="md" />
      </div>
      <nav
        id="main_nav"
        className="fixed top-0 left-0 right-0 w-screen bg-primary flex justify-center py-1 border-b-[5px] border-secondary"
      >
        <LogoArea width={"max-w-[15rem]"} />
      </nav>
      <div
        ref={outside_of_navber}
        onClick={handleCloseBtn}
        className="h-screen w-screen bg-full_screen_shadow fixed z-20 outside-of-navber"
      ></div>
      <aside
        ref={nav}
        className="fixed top-0 h-screen max-w-[280px] bg-primary flex flex-col gap-20 py-10 border-secondary border-r-[5px] rounded-r-[10px] navbar z-50"
      >
        <div
          onClick={handleCloseBtn}
          className="text-secondary text-3xl absolute cursor-pointer top-2 right-2"
        >
          <FontAwesomeIcon icon="fa-solid fa-xmark" size="md" />
        </div>
        <LogoArea width={"w-[80%]"} />
        <div id="nav-area" className="">
          <ul>
            {Items.map((item, index) => (
              <NavItem
                name={item?.name}
                iconClass={item?.iconClass}
                navigate={item?.navigate}
                index={index}
                key={index}
                handleCloseBtn={handleCloseBtn}
              />
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
