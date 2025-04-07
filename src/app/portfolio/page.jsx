"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      id: 4,
      color: "from-purple-200 to-blue-100",
      title: "سایت فروشگاهی",
      desc: "پروژه سایت فروشگاهی ما با استفاده از فریمورک React توسعه یافته است تا تجربهای سریع و کارآمد برای کاربران فراهم کند. این سایت با طراحی واکنشگرا، به خوبی در دستگاههای مختلف از جمله موبایل، تبلت و دسکتاپ نمایش داده میشود. هدف ما ایجاد یک پلتفرم خرید آنلاین است که به کاربران امکان میدهد به راحتی محصولات مورد نظر خود را جستجو، مشاهده و خریداری کنند. با استفاده از تکنولوژیهای پیشرفته و رابط کاربری کاربرپسند، سایت ما تجربه خریدی لذتبخش و بدون مشکل را برای مشتریان فراهم میکند.",
      att: "برای دیدن سایت با داده های واقعی متصل به دیتابیس لطفافیلترشکن خود را روشن کنید.",
      img: "/reactSite.png",
      link: "https://sohoshop.saeidehtajmehr.me/",
    },
    {
      id: 1,
      color: "from-blue-100 to-blue-200",
      title: " پروژه مدریت سیستم آموزشی باNextJs",
      desc: "پروژه سایت پنل آموزشی ما با هدف ارائه یک پلتفرم جامع و کارآمد برای مدیریت و آموزش طراحی شده است. این سایت دارای داشبوردهای مجزا برای مدیران و معلمان است که به هر گروه امکان میدهد به طور مستقل و موثر وظایف خود را مدیریت کنند. با استفاده از تقویم داخلی، کاربران میتوانند رویدادها و جلسات را به راحتی ثبت و پیگیری کنند. همچنین، نمودارهای پیشرفت در سایت تعبیه شده است که به تحلیل و بررسی داده‌ها کمک میکند.",
      att: "",
      img: "/school.png",
      link: "https://sohoschool.saeidehtajmehr.me/admin",
    },
    {
      id: 2,
      color: "from-blue-200 to-violet-200",
      title: "پروژه سایت معرفی با ReactJS",
      desc: "پروژه سایت پورتفولیو ما با استفاده از فریمورک React طراحی و توسعه یافته است تا تجربهای سریع و روان برای کاربران فراهم کند. این سایت به گونهای طراحی شده که نمونه کارها و پروژههای شما را به بهترین شکل ممکن نمایش دهد. با استفاده از طراحی مدرن و واکنشگرا، سایت ما به خوبی در دستگاههای مختلف نمایش داده میشود.",
      att: "",
      img: "/portfolio.png",
      link: "https://sohoportfolio.saeidehtajmehr.me/",
    },
    {
      id: 3,
      color: "from-violet-200 to-purple-200",
      title: "پنل کاربری سایت فروشگاهی",
      desc: "پروژه سایت پنل مدیریت ما با استفاده از فریمورک React توسعه یافته است و دارای امکاناتی جامع برای مدیریت محصولات، سفارشات و تحلیل داده‌ها می‌باشد. این سایت با طراحی واکنشگرا، تجربه‌ای بینظیر را در تمامی دستگاه‌ها از جمله موبایل، تبلت و دسکتاپ فراهم می‌کند.",
      att: "برای دیدن سایت با داده های واقعی متصل به دیتابیس لطفافیلترشکن خود را روشن کنید.",
      img: "/reactPanel.png",
      link: "https://sohoedashboard.saeidehtajmehr.me/",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
      id="portfolio"
    >
      <div className="h-full w-full relative overflow-hidden">
        {/* برای موبایل: اسکرول عمودی، برای بقیه: اسلایدر افقی */}
        <div
          className={`h-full flex ${
            typeof window !== "undefined" && window.innerWidth < 640
              ? "flex-col overflow-y-auto"
              : "absolute left-0 flex transition-transform duration-500"
          }`}
          style={{
            transform:
              typeof window !== "undefined" && window.innerWidth < 640
                ? "none"
                : `translateX(-${currentSlide * 100}vw)`,
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="w-screen min-h-screen flex flex-col lg:flex-row text-[#634a49]"
            >
              {/* تصویر و عنوان */}
              <div className="lg:w-2/5 w-full p-6 sm:p-10 bg-[#b29e9a] flex flex-col items-center justify-center">
                <h1 className="font-bold text-xl sm:text-2xl mb-4 text-center">
                  {item.title}
                </h1>
                <Image
                  src={item.img}
                  className="rounded-xl portBoxShadow w-full max-w-md h-auto"
                  alt=""
                  width={400}
                  height={350}
                />
              </div>

              {/* توضیحات و دکمه */}
              <div className="lg:w-3/5 w-full p-6 sm:p-10 flex flex-col justify-center">
                <div className="space-y-4">
                  <p className="text-base sm:text-lg leading-relaxed">{item.desc}</p>
                  {item.att && (
                    <p className="text-sm sm:text-base text-red-900">{item.att}</p>
                  )}
                </div>
                <div className="mt-6 flex justify-center lg:justify-end">
                  <Link href={item.link}>
                    <button className="rounded-md bg-white border border-[#b29e9a] text-[#b29e9a] px-4 py-2 text-sm sm:text-base portBoxShadow hover:shadow-md">
                      مشاهده دمو
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* دکمه‌های فلش – فقط دسکتاپ */}
        <Image
          onClick={() => handleClick("left")}
          className="hidden sm:block absolute h-[50px] left-6 top-1/2 -translate-y-1/2 rotate-180 cursor-pointer"
          src="/arrow.png"
          alt=""
          width={50}
          height={70}
        />
        <Image
          onClick={() => handleClick("right")}
          className="hidden sm:block absolute h-[50px] right-6 top-1/2 -translate-y-1/2 cursor-pointer"
          src="/arrow.png"
          alt=""
          width={50}
          height={70}
        />
      </div>
    </motion.div>
  );
}

export default Portfolio;
