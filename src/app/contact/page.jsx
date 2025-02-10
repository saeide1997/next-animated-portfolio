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
      <div className="h-full flex flex-col justify-center items-center lg:flex-row gap-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36">
        {/* text Content */}

        <div className="flex justify-center items-center p-4 h-1/6 lg:h-full lg:w-1/2 text-2xl lg:text-4xl">
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
        <form className="lg:bg-purple-100 h-5/6 p-2 lg:h-[90%] lg:w-1/2 flex flex-col justify-center items-center">
            <textarea className=" my-3 lg:my-9 border-b-2 border-solid border-gray-700 w-72" placeholder="متن شما..." name="" id="" cols="30" rows="6" style={{background:'none'}}></textarea>
            <input  className=" my-3 lg:my-9 border-b-2 border-solid border-gray-700 w-72" style={{background:'none'}} type="text" placeholder=" ایمیل شما ..." name="" id="" />
            <button className="bg-gray-300 text-black px-4 py-2 mt-6 lg:mt-18 w-64" type="submit">ارسال نامه</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
