"use client";

import {
  motion,
  useResetProjection,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-blue-100 to-blue-200",
    title: " پروژه مدریت سیستم آموزشی باNextJs",
    desc: "پروژه سایت پنل آموزشی ما با هدف ارائه یک پلتفرم جامع و کارآمد برای مدیریت و آموزش طراحی شده است. این سایت دارای داشبوردهای مجزا برای مدیران و معلمان است که به هر گروه امکان میدهد به طور مستقل و موثر وظایف خود را مدیریت کنند. با استفاده از تقویم داخلی، کاربران میتوانند رویدادها و جلسات را به راحتی ثبت و پیگیری کنند. همچنین، نمودارهای پیشرفتهای در سایت تعبیه شده است که به تحلیل و بررسی دادهها کمک میکند و اطلاعات مفیدی را برای بهبود فرآیندهای آموزشی فراهم میآورد. این ویژگیها در کنار طراحی کاربرپسند و واکنشگرا، تجربهای بینظیر را برای کاربران فراهم میکند.",
    img: "/school.png",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-200 to-violet-200",
    title: "پروژه سایت معرفی با ReactJS",
    desc: "پروژه سایت پورتفولیو ما با استفاده از فریمورک React طراحی و توسعه یافته است تا تجربهای سریع و روان برای کاربران فراهم کند. این سایت به گونهای طراحی شده که نمونه کارها و پروژههای شما را به بهترین شکل ممکن نمایش دهد. با استفاده از طراحی مدرن و واکنشگرا، سایت ما به خوبی در دستگاههای مختلف نمایش داده میشود و به کاربران امکان میدهد به راحتی با محتوای شما ارتباط برقرار کنند. هدف ما ایجاد یک پلتفرم حرفهای و جذاب است که تواناییها و دستاوردهای شما را به نمایش بگذارد و به شما کمک کند تا در دنیای دیجیتال برجسته شوید.",
    img: "/portfolio.png",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-200 to-purple-200",
    title: "پنل کاربری سایت فروشگاهی",
    desc: "پروژه سایت پنل مدیریت ما با استفاده از فریمورک React توسعه یافته است و دارای امکاناتی جامع برای مدیریت محصولات، سفارشات و تحلیل دادهها میباشد. این سایت با طراحی واکنشگرا، تجربهای بینظیر را در تمامی دستگاهها از جمله موبایل، تبلت و دسکتاپ فراهم میکند. پنل مدیریت سایت به مدیران امکان میدهد تا به راحتی محصولات را اضافه، ویرایش و حذف کنند، سفارشات را پیگیری کنند و با استفاده از ابزارهای تحلیل داده، عملکرد فروشگاه را بهبود بخشند. هدف ما ایجاد یک پلتفرم مدیریت آنلاین کاربرپسند و کارآمد است که نیازهای مدیران را به بهترین شکل ممکن برآورده کند.",
    img: "/reactPanel.png",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-200 to-blue-100",
    title: "سایت فروشگاهی",
    desc: "پروژه سایت فروشگاهی ما با استفاده از فریمورک React توسعه یافته است تا تجربهای سریع و کارآمد برای کاربران فراهم کند. این سایت با طراحی واکنشگرا، به خوبی در دستگاههای مختلف از جمله موبایل، تبلت و دسکتاپ نمایش داده میشود. هدف ما ایجاد یک پلتفرم خرید آنلاین است که به کاربران امکان میدهد به راحتی محصولات مورد نظر خود را جستجو، مشاهده و خریداری کنند. با استفاده از تکنولوژیهای پیشرفته و رابط کاربری کاربرپسند، سایت ما تجربه خریدی لذتبخش و بدون مشکل را برای مشتریان فراهم میکند.",
    img: "/reactSite.png",
    link: "https://lama.dev",
  },
];

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (<div>
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      
        <div className="h-[400vh] relative" ref={ref}>
          <div className="sticky w-screen flex h-[100vh] top-0 gap-4 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex">
              {items.map((item) => (
                <div
                  className={`h-[100vh] w-screen flex items-center justify-center bg-gradient-to-l ${item.color}`}
                  key={item.id}
                >
                  <div className="p-20 w-[70%] flex flex-col gap-8 text-gray-600 ">
                    <h1 className="font-bold text-2xl">{item.title}</h1>
                    <div className="">
                      <Image src={item.img} alt="" width={400} height={350} />
                    </div>
                    <p>{item.desc}</p>
                    <Link href={item.link} className="w-full flex justify-end items-center" >
                    <button className="bg-white rounded shadow-2xl hover:shadow-none p-3">مشاهده دمو</button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
            {/* <div></div> */}
          </div>
        </div>
      
    </motion.div></div>
  );
};

export default Portfolio;
