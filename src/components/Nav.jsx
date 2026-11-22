import React, { useState, useEffect } from "react";
import { AiFillHome, AiFillContacts } from "react-icons/ai";
import { TbBrandReactNative } from "react-icons/tb";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdRocketLaunch, MdPerson } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";

const navItems = [
  { id: "#home", icon: <AiFillHome />, label: "Home" },
  { id: "#capabilities", icon: <HiOutlineViewGrid />, label: "Capabilities" },
  { id: "#work", icon: <TbBrandReactNative />, label: "Work" },
  { id: "#ventures", icon: <MdRocketLaunch />, label: "Ventures" },
  { id: "#openminds", icon: <FaRegLightbulb />, label: "OpenMinds" },
  { id: "#about", icon: <MdPerson />, label: "About" },
  { id: "#contact", icon: <AiFillContacts />, label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.querySelector(item.id),
      }));
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el && sections[i].el.offsetTop <= scrollY) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.id}
          className={`nav-item ${active === item.id ? "active" : ""}`}
          onClick={() => setActive(item.id)}
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
}
