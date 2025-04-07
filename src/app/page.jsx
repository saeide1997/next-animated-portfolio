'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 1.5 }}>
      <div className="h-full flex flex-col lg:flex-row bg-gradient-to-b from-[#b29e9a] to-[#ffedea]">
        {/* IMAGE CONTAINER */}
        <div className="h-2/5 relative rounded-full flex justify-center items-center lg:h-full lg:w-1/2 px-4 sm:px-8 md:px-12 lg:px-10 xl:px-24">
          <Image src="/prof.png" alt="Profile" layout="fill" className="object-cover rounded-full" />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-3/5 flex flex-col gap-8 justify-center items-start lg:h-full lg:w-1/2 px-4 sm:px-8 md:px-12 lg:px-10 xl:px-24">
          <h1 className="text-3xl sm:text-4xl text-[#634a49] font-bold">
            ایده از شما،
            <br className="m-4" />
            تخصص و نوآوری از من...
          </h1>
          <p className="text-[#634a49] text-base">
          سلام، من سعیده تاج مهر هستم، یک توسعه‌دهنده وب و نرم‌افزار با تجربه‌ای گسترده در طراحی و پیاده‌سازی پروژه‌های پیچیده و نوآورانه.
            <br className="m-1" />
            در طول سال‌ها فعالیت حرفه‌ای‌ام، توانسته‌ام مهارت‌های خود را در ایجاد راه‌حل‌های دیجیتال کاربردی و کاربرپسند به طور چشم‌گیری تقویت کنم.
            <br className="m-1" />
            اگر به دنبال همکاری با یک برنامه‌نویس با تجربه هستید که بتواند ایده‌های شما را به پروژه‌های عملی و موفق تبدیل کند، من آماده‌ام تا با پشتکار و تعهد، پروژه‌های شما را به سطح جدیدی برسانم. با من تماس بگیرید تا شروع به خلق آینده دیجیتال کسب‌وکار شما کنیم!
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-[#634a49] bg-[#ba8e87] text-white hover:ring-[#ba8e87] hover:text-[#634a49] hover:!bg-inherit">
                نمونه کار‌ها
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-[#ba8e87] ring-1 text-[#634a49] hover:ring-[#634a49] hover:bg-[#ba8e87] hover:text-white">
                تماس با من
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
