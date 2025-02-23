"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useResetProjection,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useState } from "react";

function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 4,
      color: "from-purple-200 to-blue-100",
      title: "سایت فروشگاهی",
      desc: "پروژه سایت فروشگاهی ما با استفاده از فریمورک React توسعه یافته است تا تجربهای سریع و کارآمد برای کاربران فراهم کند. این سایت با طراحی واکنشگرا، به خوبی در دستگاههای مختلف از جمله موبایل، تبلت و دسکتاپ نمایش داده میشود. هدف ما ایجاد یک پلتفرم خرید آنلاین است که به کاربران امکان میدهد به راحتی محصولات مورد نظر خود را جستجو، مشاهده و خریداری کنند. با استفاده از تکنولوژیهای پیشرفته و رابط کاربری کاربرپسند، سایت ما تجربه خریدی لذتبخش و بدون مشکل را برای مشتریان فراهم میکند.",
      img: "/reactSite.png",
      link: "https://sohoshop.netlify.app",
    },
    {
      id: 1,
      color: "from-blue-100 to-blue-200",
      title: " پروژه مدریت سیستم آموزشی باNextJs",
      desc: "پروژه سایت پنل آموزشی ما با هدف ارائه یک پلتفرم جامع و کارآمد برای مدیریت و آموزش طراحی شده است. این سایت دارای داشبوردهای مجزا برای مدیران و معلمان است که به هر گروه امکان میدهد به طور مستقل و موثر وظایف خود را مدیریت کنند. با استفاده از تقویم داخلی، کاربران میتوانند رویدادها و جلسات را به راحتی ثبت و پیگیری کنند. همچنین، نمودارهای پیشرفتهای در سایت تعبیه شده است که به تحلیل و بررسی دادهها کمک میکند و اطلاعات مفیدی را برای بهبود فرآیندهای آموزشی فراهم میآورد. این ویژگیها در کنار طراحی کاربرپسند و واکنشگرا، تجربهای بینظیر را برای کاربران فراهم میکند.",
      img: "/school.png",
      link: "https://sohoschool.saeidehtajmehr.me/",
    },
    {
      id: 2,
      color: "from-blue-200 to-violet-200",
      title: "پروژه سایت معرفی با ReactJS",
      desc: "پروژه سایت پورتفولیو ما با استفاده از فریمورک React طراحی و توسعه یافته است تا تجربهای سریع و روان برای کاربران فراهم کند. این سایت به گونهای طراحی شده که نمونه کارها و پروژههای شما را به بهترین شکل ممکن نمایش دهد. با استفاده از طراحی مدرن و واکنشگرا، سایت ما به خوبی در دستگاههای مختلف نمایش داده میشود و به کاربران امکان میدهد به راحتی با محتوای شما ارتباط برقرار کنند. هدف ما ایجاد یک پلتفرم حرفهای و جذاب است که تواناییها و دستاوردهای شما را به نمایش بگذارد و به شما کمک کند تا در دنیای دیجیتال برجسته شوید.",
      img: "/portfolio.png",
      link: "https://sohoportfolio.saeidehtajmehr.me/",
    },
    {
      id: 3,
      color: "from-violet-200 to-purple-200",
      title: "پنل کاربری سایت فروشگاهی",
      desc: "پروژه سایت پنل مدیریت ما با استفاده از فریمورک React توسعه یافته است و دارای امکاناتی جامع برای مدیریت محصولات، سفارشات و تحلیل دادهها میباشد. این سایت با طراحی واکنشگرا، تجربهای بینظیر را در تمامی دستگاهها از جمله موبایل، تبلت و دسکتاپ فراهم میکند. پنل مدیریت سایت به مدیران امکان میدهد تا به راحتی محصولات را اضافه، ویرایش و حذف کنند، سفارشات را پیگیری کنند و با استفاده از ابزارهای تحلیل داده، عملکرد فروشگاه را بهبود بخشند. هدف ما ایجاد یک پلتفرم مدیریت آنلاین کاربرپسند و کارآمد است که نیازهای مدیران را به بهترین شکل ممکن برآورده کند.",
      img: "/reactPanel.png",
      link: "https://sohoedashboard.saeidehtajmehr.me/",
    },

  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <motion.div
          className="h-full "
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5 }}
          id="portfolio"
        >
    <div
      className="  h-full flex items-center justify-center relative overflow-hidden"
      
    >
      <div
        className="h-full text-black flex absolute left-0 tran max-[640px]:h-[100vh] max-[640px]:flex-col max-[640px]:justify-center"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <div className="w-[100vw] h-screen  items-center">
              <div className= 'w-full  items-center'>
                <div className=" h-screen flex sm:flex-col xl:flex-row  text-[#634a49] ">
                  <div className=' xl:w-2/5 sm:w-screen p-20 shadow  bg-[#b29e9a]'>
                    <h1 className="font-bold pb-5 text-2xl">{item.title}</h1>
                    <div className="">
                      <Image src={item.img} className="rounded-xl portBoxShadow" alt="" width={400} height={350} />
                    </div>
                  </div>
                  <div className= 'p-20 sm:w-screen flex flex-col justify-between xl:w-3/5 '>
                    <p className="py-10 text-xl 2xl:text-2xl">{item.desc}</p>
                    <Link
                      href={item.link}
                      className="w-full flex justify-end items-center"
                    >
                      <button className="rounded-md bg-white border-[#b29e9a] border mb-10 text-[#b29e9a] portBoxShadow hover:shadow-md p-3">
                        مشاهده دمو
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <Image
        onClick={() => handleClick("left")}
        className="absolute h-[50px]  left-6 rotate-180 cursor-pointer"
        src="/arrow.png"
        alt=""
        width={50}
        height={70}
      />
      <Image
        onClick={() => handleClick("right")}
        className="absolute h-[50px]   right-6 cursor-pointer"
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
