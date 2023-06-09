import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { AiFillContacts } from "react-icons/ai";
import { FcServices } from "react-icons/fc";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="/#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUserAdd />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <MdOutlineBookmarkAdd />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}
      >
        <FcServices />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <AiFillContacts />
      </a>
    </nav>
  );
}
