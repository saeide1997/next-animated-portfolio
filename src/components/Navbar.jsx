"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import NavLink from "./NavLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const links = [
  { url: "/", title: "خانه" },
  { url: "/about", title: "درباره من" },
  { url: "/portfolio", title: "نمونه کار" },
  { url: "/contact", title: "تماس با من" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full bg-[#b29e9a] shadow  overflow-hidden top-0  flex justify-between items-center px-4  sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* response menu */}
      <div className="md:hidden ">
        <button
          className="flex-col flex justify-between w-10 h-8 z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded-full origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded-full"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded-full origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-[#b29e9a]  text-white flex items-center flex-col  justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVariants}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      {/* logo */}
      <div className="ltr md:hidden lg:flex xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-[#ba8e87] rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white p-1">SaeidehTajmehr</span>
          <span className="w-10 h-8 rounded bg-white text-[#ba8e87] flex items-center justify-center">
            . me
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 justify-center items-center">
        <Link href="https://github.com/saeide1997">
          <GitHubIcon className="!text-[#634a49] hover:!text-[#c57530] " />
        </Link>
        <Link href="https://www.linkedin.com/in/saeidehtajmehr/">
          <LinkedInIcon className="!text-[#634a49] hover:!text-[#c57530] " />
        </Link>
        <Link href="https://saeiide.tm@gmail.com">
          <EmailIcon className="!text-[#634a49] hover:!text-[#c57530] " />
        </Link>
        <Link href="https://t.me/Saeideh_Tajmehr">
          <TelegramIcon className="!text-[#634a49] hover:!text-[#c57530]  " />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

// const Navbar = () => {
//     return (
//         <div className=""></div>
//     )
// }

// export default Navbar
