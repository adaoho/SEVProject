import { FiArrowRight } from "react-icons/fi";
import { BsArrowLeftCircle, BsArrowRight } from "react-icons/bs";
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
import { useDispatch, useSelector } from "react-redux";
import {
  setDrawerContactUsMobile,
  setModalContact,
} from "../../stores/mainSlices";
import { Button } from "@material-tailwind/react";
import { dataMarketing } from "../../constant/dataSupport";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const urlBrochure =
    "https://content.samitraecovillage.id/wp-content/uploads/2025/03/SAMITRA-ECOVILLAGE-BROCHURE.pdf";

  const [scrolled, setScrolled] = useState(false);
  const [drawerMobile, setDrawerMobile] = useState(false);
  const [drawerContactUs, setDrawerContactUs] = useState(false);
  const [nameUser, setNameUser] = useState("");
  const [selectedMarketing, setSelectedMarketing] = useState(null);
  const { drawerContactUsMobile } = useSelector((state) => state.main);

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
        <div className="flex items-center gap-x-20">
          <img
            src={scrolled ? LogoSamitraWhite2 : LogoSamitraWhite}
            alt="logo-samitra-ecovillage"
            className={`${scrolled ? "h-[4.52rem]" : "h-[4.5rem]"}`}
          />

          <div className="flex flex-wrap items-center gap-x-10 font-plusjakarta gap-y-4">
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

        <div className="flex flex-wrap-reverse items-center justify-end gap-x-4 w-fit gap-y-3">
          <button
            onClick={() => {
              dispatch(setModalContact(true));
            }}
            type="button"
            className="flex justify-center items-center bg-samitra-green px-8 py-2 rounded-[20px] font-plusjakarta hover:brightness-110 hover:scale-105 transition-all -mr-2"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Header Mobile */}
      <div
        className={`w-full xl:hidden flex justify-between items-center z-20 fixed text-white p-8 h-fit transition-all duration-300 ${
          scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
        } `}
      >
        <div className="flex items-center gap-x-20">
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
            className="fixed inset-0 z-30 flex bg-samitra-blackgreen xl:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="fixed flex flex-col items-center justify-center w-screen h-full p-8">
              <div className="flex items-center justify-between w-full">
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
                <div className="flex flex-col items-start w-full gap-y-8">
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
                  <div
                    onClick={() => setDrawerContactUs(true)}
                    className="flex w-full border-b-[1px] border-t-[1px] border-dashed border-gray-400 py-7 justify-between items-center"
                  >
                    <h2 className="relative hover-menumobile w-fit text-[2rem]">
                      Contact Us
                    </h2>
                    <FiArrowRight className="size-8" />
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

      <AnimatePresence>
        {(drawerContactUs || drawerContactUsMobile) && (
          <motion.div
            initial={{ x: "150%" }}
            animate={{ x: 0 }}
            exit={{ x: "150%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex items-center justify-center p-5 pt-8 bg-samitra-gray lg:hidden"
          >
            <div className="flex flex-col w-full h-full pb-12 overflow-y-auto text-white gap-y-5">
              <div className="w-full gap-x-4 items-center flex justify-start pl-12 relative pb-6 border-b-[1px] border-gray-100 border-dashed mb-2 h-fit">
                <BsArrowLeftCircle
                  className="absolute left-0 text-white size-8 top-1"
                  onClick={() => {
                    dispatch(setDrawerContactUsMobile(false));
                    setDrawerContactUs(false);
                    setNameUser("");
                    setSelectedMarketing(null);
                  }}
                />
                <h2 className="text-white text-[1.8rem]">
                  You're almost there
                </h2>
              </div>

              <div className="flex flex-col items-start w-full gap-y-2">
                <h2>Tell us your full name</h2>
                <input
                  value={nameUser}
                  onChange={(e) => setNameUser(e.target.value)}
                  className="w-full py-2 pl-4 pr-3 text-white transition duration-300 bg-transparent border-gray-50/40 border-[1px] rounded-lg shadow-sm h-14 placeholder:opacity-70 text-slate-700 text-md border-slate-200 ease focus:outline-none focus:border-samitra-green focus:border-[1px] hover:border-slate-300 focus:shadow"
                  placeholder="Type your name ..."
                />
              </div>

              <div className="flex flex-col items-start w-full gap-y-2">
                <h2>Select your marketing team</h2>
                <div className="grid items-start w-full grid-cols-2 gap-4">
                  {dataMarketing?.map((data, index) => {
                    return (
                      <div
                        key={"data-marketing" + index}
                        className={`flex flex-col gap-y-4 w-full h-full p-4 gap-x-4 rounded-xl border-[1px] transition-all ${
                          selectedMarketing === data?.id
                            ? "border-samitra-green bg-samitra-green/20"
                            : "border-gray-50/40"
                        } hover:border-samitra-green cursor-pointer`}
                        onClick={() => {
                          setSelectedMarketing(data?.id);
                        }}
                      >
                        <img
                          src={data?.image}
                          alt=""
                          className="object-cover w-full rounded-lg h-22"
                        />

                        <div className="flex flex-col flex-wrap items-start justify-center flex-1 h-full">
                          <h2 className="text-[0.85rem] font-semibold truncate">
                            {data?.name}
                          </h2>
                          <div className="flex gap-x-1 text-[0.75rem] font-light text-gray-500 items-center">
                            <FaWhatsapp />
                            <h2 className="">+{data?.phone}</h2>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="h-[1px] w-full border-t-[1px] border-dashed border-gray-100 my-4"></div>

              <div className="w-full h-12">
                <Button
                  children
                  className="flex items-center w-full h-full button-green gap-x-1"
                  type="submit"
                  disabled={
                    nameUser?.split("")?.length < 3 ||
                    selectedMarketing === null
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    if (nameUser.trim()) {
                      const message = encodeURIComponent(
                        `Hallo saya ${nameUser}, bolehkah saya mengetahui Samitra Ecovillage lebih lanjut?`
                      );
                      const phoneNumber = selectedMarketing
                        ? dataMarketing[selectedMarketing - 1]?.phone
                        : "6285736207240";
                      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
                      window.open(whatsappURL, "_blank");
                    }
                  }}
                >
                  <FaWhatsapp />
                  Chat Right Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
