'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div className="h-full " initial={{y: '-200vh'}} animate={{y: '0%'}} transition={{duration:1.5}}>
    <div className="h-full flex flex-col lg:flex-row bg-gradient-to-b from-teal-400/20 to-white">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative rounded-full flex  lg:h-full lg:w-1/2 px-4 sm:px-8 md:px-12 lg:px-10 xl:px-24">
        <Image src="/prof.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-8 justify-center items-start  lg:h-full lg:w-1/2 px-4 sm:px-8 md:px-12 lg:px-10 xl:px-24">
        <h1 className="text-4xl md:text-5xl font-bold">
          ایده از شما،
          <br className=" m-4"/>
           تخصص و نوآوری از من...
        </h1>
        <p className="md:text-xl">
          سلام! من سعیده تاج مهر هستم، یک برنامه‌نویس خلاق و حرفه‌ای با سالها
          تجربه در توسعه نرمافزار و وبسایت‌های پویا.
          <br className=" m-1"/>
           من آماده‌ام تا با اشتیاق به حل مسائل
          پیچیده و ایجاد راه‌حل های نوآورانه، ایده‌های شما را به
          واقعیت دیجیتال تبدیل کنم.
          <br className=" m-1"/>
           اگر به دنبال یک برنامه‌نویس متعهد و متخصص
          هستید که پروژه‌های شما را به سطحی جدید ببرد، همین حالا با من تماس
          بگیرید!
        </p>
        <div className="flex gap-4 ">
          <button className="p-4 rounded-lg ring-1 ring-blue-800 bg-blue-500 text-white">نمونه کار‌ها</button>
          <button className="p-4 rounded-lg ring-blue-500 ring-1 text-blue-800 "><Link href={'#portfolio'}>تماس با من</Link></button>
        </div>
      </div>
      
    </div>
    </motion.div>
  );
};

export default Homepage;
