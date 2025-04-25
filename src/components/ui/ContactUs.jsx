import { CgArrowLongRight } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { ContactUsBanner } from "../../assets/images/export-assets";
import { Button, Input } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import {
  setDrawerContactUsMobile,
  setModalContact,
} from "../../stores/mainSlices";
import Aos from "aos";

const ContactUs = () => {
  const [nameUser, setNameUser] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    return () => Aos.refresh();
  }, []);

  return (
    <>
      {/* Contact Us Desktop Version */}
      <div className="h-[390px] w-full relative hidden xl:flex">
        <div className="absolute z-10 grid w-full h-full grid-cols-2 p-20 bg-black/70 gap-x-7 px-44">
          <div data-aos="fade-up" className="w-full bg-gray-300 rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.499028196727!2d111.49973337588449!3d-7.629357475448871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf9202af62d3%3A0xe478dc16d3340a2!2sSamitra%20Ecovillage!5e0!3m2!1sid!2sid!4v1741460781755!5m2!1sid!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale rounded-xl"
            ></iframe>
          </div>

          <div className="flex flex-col items-start justify-end gap-y-7">
            <h2
              data-aos="fade-up"
              data-aos-delay="50"
              className="font-plusjakarta font-medium text-[42px] text-white text-left leading-[50px]"
            >
              A Better Way of Living <br /> Starts Now!
            </h2>

            {/* <div className="w-full max-w-[500px] h-10 mt-4">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center h-full gap-x-3"
              >
                <input
                  value={nameUser}
                  onChange={(e) => setNameUser(e.target.value)}
                  className="w-full h-full py-2 pl-4 pr-3 text-white transition duration-300 bg-transparent border-2 rounded-lg shadow-sm placeholder:opacity-70 text-slate-700 text-md border-slate-200 ease focus:outline-none focus:border-samitra-green focus:border-2 hover:border-slate-300 focus:shadow"
                  placeholder="Type your name ..."
                />

                <Button
                  children
                  className="flex items-center w-32 h-10 button-green gap-x-1"
                  type="submit"
                >
                  <FaWhatsapp />
                  Chat
                </Button>
              </form>
            </div> */}

            {/* //! With Input */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="w-full h-10"
            >
              <Button
                children
                className="flex items-center h-10 w-fit button-orange gap-x-4"
                type="button"
                onClick={() => dispatch(setModalContact(true))}
              >
                Find Out More
                <BsArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full overflow-hidden">
          <img
            data-aos="zoom-out"
            src={ContactUsBanner}
            alt="samitra-contact"
            className="object-cover w-full h-full "
          />
        </div>
      </div>

      {/* Contact Us Mobile Version */}
      <div className="relative flex w-full h-full xl:hidden">
        <div className="z-10 grid w-full h-full grid-cols-1 px-8 py-20 bg-black/70 gap-x-7">
          <div className="flex flex-col justify-center gap-y-4">
            <div className="w-full bg-gray-300 rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.499028196727!2d111.49973337588449!3d-7.629357475448871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf9202af62d3%3A0xe478dc16d3340a2!2sSamitra%20Ecovillage!5e0!3m2!1sid!2sid!4v1741460781755!5m2!1sid!2sid"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale rounded-xl"
              ></iframe>
            </div>

            <h2 className="font-plusjakarta font-medium text-[1.6rem] text-white text-left">
              A Better Way of Living <br /> Starts Now!
            </h2>

            {/* //! With Input */}
            {/* <div className="w-full h-10">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center h-full gap-x-3"
              >
                <input
                  value={nameUser}
                  onChange={(e) => setNameUser(e.target.value)}
                  className="w-full h-full py-2 pl-4 pr-3 text-white transition duration-300 bg-transparent border-2 rounded-lg shadow-sm placeholder:opacity-70 text-slate-700 text-md border-slate-200 ease focus:outline-none focus:border-samitra-green focus:border-2 hover:border-slate-300 focus:shadow"
                  placeholder="Type your name ..."
                />

                <Button
                  children
                  className="flex items-center w-32 h-10 button-green gap-x-1"
                  type="submit"
                >
                  <FaWhatsapp />
                  Chat
                </Button>
              </form>
            </div> */}
            <div className="w-full h-10">
              <Button
                children
                className="flex items-center h-10 w-fit button-orange gap-x-4"
                type="button"
                onClick={() => dispatch(setDrawerContactUsMobile(true))}
              >
                Find Out More
                <BsArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <img
          src={ContactUsBanner}
          alt="samitra-contact"
          className="absolute object-cover w-full h-full"
        />
      </div>
    </>
  );
};

export default ContactUs;
