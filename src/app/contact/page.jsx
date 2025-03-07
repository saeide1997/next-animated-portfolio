"use client";

import { motion } from "framer-motion";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Contact = () => {
  const text = "با من در تماس باشید.";
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-full flex flex-col justify-center items-center lg:flex-row ">
        {/* text Content */}

        <div className="flex text-[#603b3a] justify-center w-full bg-gradient-to-b from-[#b29e9a] to-[#ba8e87] items-center h-1/2 lg:h-full lg:w-1/2 text-2xl lg:text-4xl">
          <motion.div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: index*0.1}}
              >
                {letter}
              </motion.span>
            ))}
            🙂
          </motion.div>
        </div>

        {/* form container */}
        <form className=" p-2 h-1/2 lg:h-[90%] w-full lg:w-1/2 flex flex-col justify-center items-center">
            <textarea className=" my-1 p-4 rounded-md bg-[#ba8e875c] lg:mt-9 border-b-2 border-solid border-[#b29e9a] w-[90%]" placeholder="متن شما..." name="" id=""rows="6" ></textarea>
            <input  className=" my-1 p-4 rounded-md bg-[#ba8e875c] lg:mb-9 border-b-2 border-solid border-[#b29e9a] w-[90%]" type="text" placeholder=" ایمیل شما ..."  name="" id="" />
            <button className="portBoxShadow hover:shadow-md bg-[#ba8e87] rounded-md text-black px-4 py-2 mt-6 lg:mt-18 w-64" type="submit">ارسال نامه</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
