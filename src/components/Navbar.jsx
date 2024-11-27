"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import NavLink from "./NavLink";

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
      backgroundColor: "white",
    },
  };
  const centerVarients = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "white",
    },
  };

  return (
    <div className="h-full flex justify-between items-center px-4  sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* response menu */}
      <div className="md:hidden">
        <button
          className="flex-col flex justify-between w-10 h-8 z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVarients}
            animate={open? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded-full"
          ></motion.div>
          <motion.div
            variants={centerVarients}
            animate={open? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded-full"
          ></motion.div>
          <motion.div
            variants={bottomVarients}
            animate={open? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded-full"
          ></motion.div>
        </button>
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex items-center flex-col  justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* logo */}
      <div className="ltr md:hidden lg:flex justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white p-1">SaeidehTajmehr</span>
          <span className="w-10 h-8 rounded bg-white text-black  flex items-center justify-center">
            . me
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 justify-center items-center">
        <Link href="https://github.com/saeide1997">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/saeidehtajmehr/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://github.com/saeide1997">
          <Image src="/gmail.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://github.com/saeide1997">
          <Image src="/telegram.png" alt="" width={24} height={24} />
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
