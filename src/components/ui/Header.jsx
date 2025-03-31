import { CgClose } from "react-icons/cg";
import { CgMenuRight } from "react-icons/cg";
import React, { Fragment, useEffect, useState } from "react";
import {
  LogoSamitraWhite,
  LogoSamitraWhite2,
} from "../../assets/logo/export-assets";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const urlBrochure =
    "https://content.samitraecovillage.id/wp-content/uploads/2025/03/SAMITRA-ECOVILLAGE-BROCHURE.pdf";

  const [scrolled, setScrolled] = useState(false);
  const [drawerMobile, setDrawerMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerMobile ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [drawerMobile]);

  const headerMenu = [
    {
      label: "Home",
      location: "/",
      onClick: () => {
        navigate("/");
        window.scrollTo(0, 0);
      },
    },
    {
      label: "About",
      location: "/about",
      onClick: () => navigate("/about"),
    },
    {
      label: "House Type",
      location: "/house-type",
      onClick: () => navigate("/house-type"),
    },
    {
      label: "News & Event",
      location: "/news-and-event",
      onClick: () => navigate("/news-and-event"),
    },
  ];

  return (
    <>
      {/* Header Desktop */}
      <div
        className={`w-full hidden xl:flex justify-between items-center z-20 fixed text-white px-24 pt-10 py-16 h-fit transition-all duration-300 ${
          scrolled ? "bg-black/70 backdrop-blur-md py-6" : "bg-transparent"
        } `}
      >
        <div className="flex gap-x-20 items-center">
          <img
            src={scrolled ? LogoSamitraWhite2 : LogoSamitraWhite}
            alt="logo-samitra-ecovillage"
            className={`${scrolled ? "h-[4.52rem]" : "h-[4.5rem]"}`}
          />

          <div className="flex gap-x-10 items-center font-plusjakarta flex-wrap gap-y-4">
            {headerMenu?.map((data, index) => {
              const isActive =
                data.location === "/"
                  ? location === "/"
                  : location === data.location;
              return (
                <Fragment key={"header" + index}>
                  <div
                    onClick={isActive ? null : data.onClick}
                    className="relative"
                  >
                    <span
                      className={`${
                        isActive
                          ? "underline text-white text-[14px] mb-1"
                          : "custom-hover-effect"
                      }`}
                    >
                      {data?.label}
                    </span>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>

        <div className="flex gap-x-4 w-fit items-center justify-end gap-y-3 flex-wrap-reverse ">
          <a
            href="https://wa.me/6285736207240"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-x-2 items-center text-white hover:text-samitra-green transition-all text-[14px] font-plusjakarta"
          >
            <FaWhatsapp className="size-5" />
            <h2>+6285736207240</h2>
          </a>
          <button
            onClick={() => window.open(urlBrochure, "__blank")}
            type="button"
            className="flex justify-center items-center bg-samitra-green px-5 py-2 rounded-[20px] font-plusjakarta hover:brightness-110 hover:scale-105 transition-all -mr-2"
          >
            Download Brochure
          </button>
        </div>
      </div>

      {/* Header Mobile */}
      <div
        className={`w-full xl:hidden flex justify-between items-center z-20 fixed text-white p-8 h-fit transition-all duration-300 ${
          scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
        } `}
      >
        <div className="flex gap-x-20 items-center">
          <img
            src={scrolled ? LogoSamitraWhite2 : LogoSamitraWhite}
            alt="logo-samitra-ecovillage"
            className={`transition-opacity ${
              scrolled
                ? "h-[3.05rem] object-contain"
                : "h-[3rem] object-contain"
            }`}
          />
        </div>

        <CgMenuRight
          className="text-white size-8"
          onClick={() => setDrawerMobile(true)}
        />
      </div>

      <AnimatePresence>
        {drawerMobile && (
          <motion.div
            className="fixed inset-0 bg-samitra-blackgreen z-30 flex xl:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="fixed w-screen flex flex-col h-full p-8 items-center justify-center">
              <div className="flex justify-between items-center w-full">
                <img
                  src={LogoSamitraWhite}
                  alt="logo-samitra-ecovillage"
                  className={`transition-opacity h-[3.05rem] object-contain`}
                />
                <CgClose
                  onClick={() => setDrawerMobile(false)}
                  className="text-white size-[2rem]"
                />
              </div>

              <div className="flex flex-col w-full gap-y-8 text-white font-light text-[2rem] justify-center items-center h-full">
                <div className="flex flex-col gap-y-8 items-start w-full">
                  {headerMenu.map((data, index) => {
                    const isCurrent =
                      data.location === "/"
                        ? location === "/"
                        : location === data.location;

                    return (
                      <span
                        onClick={isCurrent ? null : data.onClick}
                        key={index + "mobile-menu"}
                        className={`${
                          isCurrent
                            ? "underline font-semibold"
                            : "hover-menumobile relative w-fit"
                        }`}
                      >
                        {data.label}
                      </span>
                    );
                  })}
                </div>

                <div className="flex w-full flex-col gap-y-8 text-[20px]">
                  <div className="flex w-full border-b-[1px] border-t-[1px] border-dashed border-gray-400 py-7">
                    <a
                      href="https://wa.me/6285736207240"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-x-2 items-center text-white hover:text-samitra-green transition-all font-plusjakarta"
                    >
                      <FaWhatsapp className="size-5" />
                      <h2>+6285736207240</h2>
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => window.open(urlBrochure, "__blank")}
                    className="button-samitra-green"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
