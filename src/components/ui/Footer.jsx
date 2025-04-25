import { RiWhatsappFill } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import React, { useEffect } from "react";
import {
  LogoSamitraLand,
  LogoSamitraWhite2,
} from "../../assets/logo/export-assets";
import { useNavigate } from "react-router-dom";
import Aos from "aos";

const Footer = () => {
  const navigate = useNavigate();

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
      {/* Footer Desktop Version */}
      <section id="footer" className="hidden xl:block font-inter">
        <div className="w-full flex h-[334px] bg-samitra-blackfooter px-24 py-16 flex-col gap-y-4">
          <div className="grid w-full grid-cols-3 gap-x-4">
            {/* Left Side */}
            <div className="flex w-full gap-x-20 col-span-2 text-[14px] items-end">
              <img
                data-aos="fade-up"
                src={LogoSamitraWhite2}
                alt="logo-footer-samitra"
                className="h-[90px] object-contain"
              />

              <div className="flex items-center gap-x-10">
                <div
                  data-aos="fade-up"
                  data-aos-delay="50"
                  className="flex flex-col text-white gap-y-2 font-inter"
                >
                  <h2>Marketing Office</h2>
                  <p className="text-gray-600">
                    Jl. Urip Sumoharjo No. 26, <br /> Kota Madiun
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="flex flex-col text-white gap-y-2 font-inter"
                >
                  <h2>Location</h2>
                  <p className="text-gray-600">
                    Jl. Tirta Raya, Nambangan Lor, <br /> Kec. Manguharjo, Kota
                    Madiun
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 w-full justify-end items-end text-gray-600 text-[14px] font-inter">
              <h2 data-aos="fade-up" data-aos-delay="150" className="pb-2.5">
                Developed By
              </h2>
              <img
                data-aos="fade-up"
                data-aos-delay="200"
                src={LogoSamitraLand}
                alt="logo-footer-samitra"
                className="h-[90px] object-contain"
              />
            </div>
          </div>

          {/* Line Seperator */}
          <div
            data-aos="zoom-out"
            data-aos-offset="-50"
            className="w-full h-[1px] border-b-[1px] border-gray-700 mt-10 mb-4"
          ></div>

          <div className="w-full flex justify-between items-center font-inter text-[14px]">
            <div className="flex w-full gap-x-10">
              <a
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-offset="-100"
                href={"https://www.instagram.com/samitraecovillage/"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-2 items-center text-gray-600 hover:text-[#fd5949]"
              >
                <AiFillInstagram className="size-6" /> <h2>Instagram</h2>
              </a>
              <a
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-offset="-100"
                href={"https://www.youtube.com/@samitraland9266/videos"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 gap-x-2 hover:text-red-500"
              >
                <AiFillYoutube className="size-6" /> <h2>YouTube</h2>
              </a>
              <a
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-offset="-100"
                href="https://wa.me/6285736207240"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 gap-x-2 hover:text-green-500"
              >
                <RiWhatsappFill className="size-6" />
                <h2>+62 85736207240</h2>
              </a>
            </div>

            <div className="w-full flex gap-x-5 justify-end items-center text-white text-[14px] flex-wrap gap-y-3">
              <a
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-offset="-100"
                onClick={() => navigate("/house-type/arvia-type-62")}
                className="transition-all cursor-pointer hover:underline"
              >
                Arvia
              </a>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-offset="-100"
                className="bg-white rounded-full size-1"
              ></div>
              <a
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-offset="-100"
                onClick={() => navigate("/house-type/zyra-type-72")}
                className="transition-all cursor-pointer hover:underline"
              >
                Zyra
              </a>
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-offset="-100"
                className="bg-white rounded-full size-1"
              ></div>
              <a
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-offset="-100"
                onClick={() => navigate("/house-type/liora-type-92")}
                className="transition-all cursor-pointer hover:underline"
              >
                Liora
              </a>
              <div
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-offset="-100"
                className="bg-white rounded-full size-1"
              ></div>
              <a
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-offset="-100"
                onClick={() => navigate("/about")}
                className="transition-all cursor-pointer hover:underline"
              >
                About Samitra
              </a>
              <div
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-offset="-100"
                className="bg-white rounded-full size-1"
              ></div>
              <a
                data-aos="fade-up"
                data-aos-delay="550"
                data-aos-offset="-100"
                onClick={() => navigate("/news-and-event")}
                className="transition-all cursor-pointer hover:underline"
              >
                News & Event
              </a>
            </div>
          </div>
        </div>
        <div className="w-full px-24 flex justify-between items-start h-fit py-6 bg-samitra-blackcopyright text-white/30 text-[14px] font-inter">
          <h2>©2025 Samitra Ecovillage - All right reserved.</h2>
          <h2>
            Digital Experience by{" "}
            <a
              className="font-bold transition-all hover:underline"
              href="https://www.instagram.com/mantrarupa/"
              target="_blank"
            >
              Mantrarupa
            </a>
          </h2>
        </div>
      </section>

      {/* Footer Mobile Version */}
      <section id="footer" className="block xl:hidden font-inter">
        <div className="flex flex-col w-full h-full px-8 py-16 bg-samitra-blackfooter gap-y-2">
          <div className="grid w-full grid-cols-1 gap-x-4">
            {/* Left Side */}
            <div className="flex flex-col w-full gap-x-20 text-[14px] items-start gap-y-8">
              <img
                src={LogoSamitraWhite2}
                alt="logo-footer-samitra"
                className="h-[70px] object-contain"
              />

              <div className="flex flex-col text-white gap-y-2">
                <h2>Marketing Office</h2>
                <p className="text-gray-600">
                  Jl. Urip Sumoharjo No. 26, <br /> Kota Madiun
                </p>
              </div>
              <div className="flex flex-col text-white gap-y-2">
                <h2>Location</h2>
                <p className="text-gray-600">
                  Jl. Tirta Raya, Nambangan Lor, <br /> Kec. Manguharjo, Kota
                  Madiun
                </p>
              </div>

              <div className="flex w-full flex-col text-gray-600 text-[14px] items-start">
                <h2 className="pb-2.5">Developed By</h2>
                <img
                  src={LogoSamitraLand}
                  alt="logo-footer-samitra"
                  className="h-[90px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Line Seperator */}
          <div className="w-full h-[1px] border-b-[1px] border-gray-700 mt-10 mb-4"></div>

          <div className="w-full flex flex-col justify-between items-center text-[14px]">
            <div className="flex flex-col w-full gap-y-4">
              <div className="w-full flex gap-x-5 justify-start items-center text-white text-[14px] flex-wrap gap-y-3 mb-4">
                <a
                  onClick={() => navigate("/house-type/arvia-type-62")}
                  className="transition-all cursor-pointer hover:underline"
                >
                  Arvia
                </a>
                <div className="bg-white rounded-full size-1"></div>
                <a
                  onClick={() => navigate("/house-type/zyra-type-72")}
                  className="transition-all cursor-pointer hover:underline"
                >
                  Zyra
                </a>
                <div className="bg-white rounded-full size-1"></div>
                <a
                  onClick={() => navigate("/house-type/liora-type-92")}
                  className="transition-all cursor-pointer hover:underline"
                >
                  Liora
                </a>
                <div className="bg-white rounded-full size-1"></div>
                <a
                  onClick={() => navigate("/about")}
                  className="transition-all cursor-pointer hover:underline"
                >
                  About Samitra
                </a>
                <div className="bg-white rounded-full size-1"></div>
                <a
                  onClick={() => navigate("/news-and-event")}
                  className="transition-all cursor-pointer hover:underline"
                >
                  News & Event
                </a>
              </div>

              <a
                href={"https://www.instagram.com/samitraecovillage/"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-2 items-center text-gray-600 hover:text-[#fd5949]"
              >
                <AiFillInstagram className="size-6" /> <h2>Instagram</h2>
              </a>
              <a
                href={"https://www.youtube.com/@samitraland9266/videos"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 gap-x-2 hover:text-red-500"
              >
                <AiFillYoutube className="size-6" /> <h2>YouTube</h2>
              </a>
              <a
                href="https://wa.me/6285736207240"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 gap-x-2 hover:text-green-500"
              >
                <RiWhatsappFill className="size-6" />
                <h2>+62 85736207240</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full px-8 gap-y-1 flex flex-col justify-start items-start h-fit py-6 bg-samitra-blackcopyright text-white/30 text-[14px] font-inter">
          <h2>©2025 Samitra Ecovillage - All right reserved.</h2>
          <h2>
            Digital Experience by{" "}
            <a
              className="font-bold transition-all hover:underline"
              href="https://www.instagram.com/mantrarupa/"
              target="_blank"
            >
              Mantrarupa
            </a>
          </h2>
        </div>
      </section>
    </>
  );
};

export default Footer;
