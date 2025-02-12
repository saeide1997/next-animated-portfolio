"use client";
import Brain from "@/components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-full overflow-scroll overflow-x-hidden lg:flex" ref={containerRef}>
        {/* svg container */}
        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
        {/* textcontainer */}
        <div className=" lg:w-2/3 xl:1/2 px-4 sm:px-8 md:px-12 lg:px-20  flex-col ">
          {/* biography container */}
          <div className="flex flex-col h-[calc(100vh-6rem)] justify-center gap-12">
            <h1 className="font-bold text-teal-800 text-3xl">درباره من</h1>
            <p className="text-lg">
             من توی دنیای برنامه‌نویسی وب فعالیت می‌کنم. بیشتر چیزی که بلدم رو خودم یاد گرفتم و با تجربه‌هایی که توی پروژه‌های مختلف به دست آوردم، به جایی رسیدم که الان هستم.

برای من برنامه‌نویسی وب فقط یه شغل نیست، یه جور هنر هست که بهم این فرصت رو می‌ده که سایت‌ها و اپلیکیشن‌هایی بسازم که کاربرها از استفاده ازشون لذت ببرند. من همیشه سعی می‌کنم به نیازهای کاربران و ایده‌های مختلف پاسخ بدم.

در کارم توی  Next Js، React Js، JavaScript و فریم‌ورک‌های مختلف که در بخش پایین ذکر کردم تخصص دارم و از این تکنولوژی‌ها برای طراحی و ساخت سایت‌ها و اپلیکیشن‌هایی استفاده می‌کنم که هم از نظر فنی و هم از نظر تجربه کاربری خیلی خوب عمل کنند
.
            </p>
            <span className="font-bold text-2xl text-teal-800">
            اگر به دنبال یک توسعه‌دهنده وب با دیدگاه خلاقانه و حل مسئله هستید، خوشحال می‌شوم که با شما همکاری کنم.
            </span>
            {/* svg signitiur */}
            {/* <div className=""></div> */}
            {/* svg scroll */}
            <div className="">
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* skills container */}
          <div className="flex flex-col h-[calc(100vh-6rem)] justify-center gap-12" ref={skillRef}>
            <motion.h1
              initial={{ x: "-700px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-teal-800 text-3xl"
            >
              مهارت‌ها
            </motion.h1>
            {/* skills list */}
            <motion.div
              className="flex gap-8 flex-wrap"
              initial={{ x: "-700px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
            >
              {/* <div className=""> */}
              <Image
                src="/javascript.png"
                alt="JavaScript"
                width={64}
                height={64}
                className="hover:w-24 hover:h-24 "
              />
              {/* </div> */}
              <Image src="/nodejs.png" alt="NodeJS" width={64} height={64} />
              <Image
                src="/typescript.png"
                alt="TypeScript"
                width={64}
                height={64}
              />
              <Image src="/react.webp" alt="ReactJs" width={64} height={64} />
              <Image src="/redux.png" alt="Redux" width={64} height={64} />
              <Image src="/nextjs.png" alt="TailWind" width={64} height={64} />
              <Image src="/css.webp" alt="TailWind" width={64} height={64} />
              <Image
                src="/tailwind.png"
                alt="TailWind"
                width={64}
                height={64}
              />
              <Image
                src="/github3d.png"
                alt="TailWind"
                width={64}
                height={64}
              />
              <Image
                src="/wordpress.png"
                alt="WordPress"
                width={64}
                height={64}
              />
              <Image src="/mongodb.png" alt="MongoDb" width={64} height={64} />
              <Image src="/mysql.webp" alt="MySQL" width={64} height={64} />
            </motion.div>
            {/* svg scroll */}
            {/* <div className="">
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div> */}
          </div>
          {/* experience container */}
          {/* <div className=""></div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
