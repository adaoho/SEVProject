import { RiWhatsappFill } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import React from "react";
import {
  LogoSamitraLand,
  LogoSamitraWhite2,
} from "../../assets/logo/export-assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Footer Desktop Version */}
      <section id="footer" className="hidden xl:block font-inter">
        <div className="w-full flex h-[334px] bg-samitra-blackfooter px-24 py-16 flex-col gap-y-4">
          <div className="w-full grid grid-cols-3 gap-x-4">
            {/* Left Side */}
            <div className="flex w-full gap-x-20 col-span-2 text-[14px] items-end">
              <img
                src={LogoSamitraWhite2}
                alt="logo-footer-samitra"
                className="h-[90px] object-contain"
              />

              <div className="flex gap-x-10 items-center">
                <div className="flex flex-col gap-y-2 font-inter text-white">
                  <h2>Marketing Office</h2>
                  <p className="text-gray-600">
                    Jl. Urip Sumoharjo No. 26, <br /> Kota Madiun
                  </p>
                </div>
                <div className="flex flex-col gap-y-2 font-inter text-white">
                  <h2>Location</h2>
                  <p className="text-gray-600">
                    Jl. Tirta Raya, Nambangan Lor, <br /> Kec. Manguharjo, Kota
                    Madiun
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 w-full justify-end items-end text-gray-600 text-[14px] font-inter">
              <h2 className="pb-2.5">Developed By</h2>
              <img
                src={LogoSamitraLand}
                alt="logo-footer-samitra"
                className="h-[90px] object-contain"
              />
            </div>
          </div>

          {/* Line Seperator */}
          <div className="w-full h-[1px] border-b-[1px] border-gray-700 mt-10 mb-4"></div>

          <div className="w-full flex justify-between items-center font-inter text-[14px]">
            <div className="w-full flex gap-x-10">
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
                className="flex gap-x-2 items-center text-gray-600 hover:text-red-500"
              >
                <AiFillYoutube className="size-6" /> <h2>YouTube</h2>
              </a>
              <a
                href="https://wa.me/6285736207240"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-2 items-center text-gray-600 hover:text-green-500"
              >
                <RiWhatsappFill className="size-6" />
                <h2>+62 85736207240</h2>
              </a>
            </div>

            <div className="w-full flex gap-x-5 justify-end items-center text-white text-[14px] flex-wrap gap-y-3">
              <a
                onClick={() => navigate("/house-type/arvia-type-62")}
                className="hover:underline transition-all cursor-pointer"
              >
                Arvia
              </a>
              <div className="rounded-full size-1 bg-white"></div>
              <a
                onClick={() => navigate("/house-type/zyra-type-72")}
                className="hover:underline transition-all cursor-pointer"
              >
                Zyra
              </a>
              <div className="rounded-full size-1 bg-white"></div>
              <a
                onClick={() => navigate("/house-type/liora-type-92")}
                className="hover:underline transition-all cursor-pointer"
              >
                Liora
              </a>
              <div className="rounded-full size-1 bg-white"></div>
              <a
                onClick={() => navigate("/about")}
                className="hover:underline transition-all cursor-pointer"
              >
                About Samitra
              </a>
              <div className="rounded-full size-1 bg-white"></div>
              <a
                onClick={() => navigate("/news-and-event")}
                className="hover:underline transition-all cursor-pointer"
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
              className="font-bold hover:underline transition-all"
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
        <div className="w-full flex h-full bg-samitra-blackfooter px-8 py-16 flex-col gap-y-2">
          <div className="w-full grid grid-cols-1 gap-x-4">
            {/* Left Side */}
            <div className="flex flex-col w-full gap-x-20 text-[14px] items-start gap-y-8">
              <img
                src={LogoSamitraWhite2}
                alt="logo-footer-samitra"
                className="h-[70px] object-contain"
              />

              <div className="flex flex-col gap-y-2 text-white">
                <h2>Marketing Office</h2>
                <p className="text-gray-600">
                  Jl. Urip Sumoharjo No. 26, <br /> Kota Madiun
                </p>
              </div>
              <div className="flex flex-col gap-y-2 text-white">
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
            <div className="w-full flex gap-y-4 flex-col">
              <div className="w-full flex gap-x-5 justify-start items-center text-white text-[14px] flex-wrap gap-y-3 mb-4">
                <a
                  onClick={() => navigate("/house-type/arvia-type-62")}
                  className="hover:underline transition-all cursor-pointer"
                >
                  Arvia
                </a>
                <div className="rounded-full size-1 bg-white"></div>
                <a
                  onClick={() => navigate("/house-type/zyra-type-72")}
                  className="hover:underline transition-all cursor-pointer"
                >
                  Zyra
                </a>
                <div className="rounded-full size-1 bg-white"></div>
                <a
                  onClick={() => navigate("/house-type/liora-type-92")}
                  className="hover:underline transition-all cursor-pointer"
                >
                  Liora
                </a>
                <div className="rounded-full size-1 bg-white"></div>
                <a
                  onClick={() => navigate("/about")}
                  className="hover:underline transition-all cursor-pointer"
                >
                  About Samitra
                </a>
                <div className="rounded-full size-1 bg-white"></div>
                <a
                  onClick={() => navigate("/news-and-event")}
                  className="hover:underline transition-all cursor-pointer"
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
                className="flex gap-x-2 items-center text-gray-600 hover:text-red-500"
              >
                <AiFillYoutube className="size-6" /> <h2>YouTube</h2>
              </a>
              <a
                href="https://wa.me/6285736207240"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-2 items-center text-gray-600 hover:text-green-500"
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
              className="font-bold hover:underline transition-all"
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
