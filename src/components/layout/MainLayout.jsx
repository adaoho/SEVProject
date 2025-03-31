import React, { useEffect } from "react";
import SeoHelmet from "./SeoHelmet";
import { motion } from "framer-motion";

const MainLayout = ({
  children,
  className,
  animate = true,
  loading,
  title,
  description,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-white w-screen flex flex-col justify-start items-start px-14">
          <div className="w-full flex justify-center mt-[8rem] items-center gap-x-2 flex-col gap-y-5">
            <div className="loader" />
          </div>
        </div>
      ) : animate ? (
        <>
          <motion.div
            initial={{ y: "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-50%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`w-screen h-fit flex flex-col justify-start items-start ${className}`}
          >
            {children}
          </motion.div>
        </>
      ) : (
        <div
          className={`w-screen h-fit flex flex-col justify-start items-start ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default MainLayout;
