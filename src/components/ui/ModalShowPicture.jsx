import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ModalShowPicture = ({ modalPicture, setModalPicture }) => {
  useEffect(() => {
    document.body.style.overflow = modalPicture?.modal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalPicture]);

  return (
    <>
      <AnimatePresence mode="wait">
        {modalPicture?.modal && (
          <>
            <motion.div className="fixed inset-0 z-50 items-center justify-center hidden w-full h-full xl:flex">
              <div className="flex flex-col items-center justify-center w-full h-full gap-y-8">
                <motion.h1
                  initial={{ y: "30%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "30%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-white font-plusjakarta text-[24px] z-10"
                >
                  {modalPicture?.title || ""}
                </motion.h1>
                <motion.img
                  initial={{ y: "30%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "30%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  src={modalPicture?.selectedImage || ""}
                  alt=""
                  className="w-fit h-[75%] object-contain z-10"
                />

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  type="button"
                  className="z-10 text-white button-samitra-gray w-fit"
                  onClick={() => setModalPicture({ modal: false })}
                >
                  <div className="flex items-center gap-x-12">
                    Close Picture
                  </div>
                </motion.button>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => {
                  setTimeout(() => setModalPicture({ modal: false }), 300);
                }}
                className="absolute w-full h-full bg-black/80 backdrop-blur-sm"
              ></motion.div>
            </motion.div>

            <motion.div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-8 xl:hidden">
              <div className="flex flex-col items-center justify-center w-full h-full gap-y-8">
                <motion.h1
                  initial={{ y: "30%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "30%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-white font-plusjakarta text-[18px] z-10 text-center max-w-[80%]"
                >
                  {modalPicture?.title || ""}
                </motion.h1>
                <motion.img
                  initial={{ y: "30%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "30%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  src={modalPicture?.selectedImage || ""}
                  alt=""
                  className="z-10 object-contain w-full"
                />

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  type="button"
                  className="z-10 px-2 py-1 text-white rounded-lg w-fit bg-samitra-brown"
                  onClick={() => setModalPicture({ modal: false })}
                >
                  <div className="flex gap-x-12 items-center text-[14px]">
                    Close Picture
                  </div>
                </motion.button>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => setModalPicture({ modal: false })}
                className="absolute w-full h-full bg-black/80 backdrop-blur-sm"
              ></motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* <AnimatePresence>
        {modalPicture?.modal && (
        )}
      </AnimatePresence> */}
    </>
  );
};

export default ModalShowPicture;
