"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  let pageName
 if( pathName == '/') {pageName = ''}
 if( pathName == '/about'){pageName = 'درباره من'}
 if( pathName == '/portfolio'){pageName = 'نمونه کارها'}
 if( pathName == '/contact'){pageName = 'تماس با من'}

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-scree h-screen bg-white"
      >
        <motion.div
          className="w-screen h-screen fixed bg-[#ddc1bc] rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition:{delay: 0.8} }}
        />
        
        <motion.div
          className="fixed m-auto top-0 left-0 bottom-0 right-0 text-[#634a49] z-50 w-fit h-fit text-6xl"
          initial={{opacity: 1}}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >{pageName}
        </motion.div>
        <motion.div
          className="w-screen h-screen fixed bg-[#ddc1bc] rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
