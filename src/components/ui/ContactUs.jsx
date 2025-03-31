import { FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";
import { ContactUsBanner } from "../../assets/images/export-assets";
import { Button, Input } from "@material-tailwind/react";

const ContactUs = () => {
  const [nameUser, setNameUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameUser.trim()) {
      const message = encodeURIComponent(
        `Hallo saya ${nameUser}, bolehkah saya mengetahui Samitra Ecovillage lebih lanjut?`
      );
      const whatsappURL = `https://wa.me/6285736207240?text=${message}`;
      window.open(whatsappURL, "_blank");
    }
  };

  return (
    <>
      {/* Contact Us Desktop Version */}
      <div className="h-[390px] w-full relative hidden xl:flex">
        <div className="bg-black/70 absolute w-full h-full z-10 grid grid-cols-2 gap-x-7 p-20 px-44">
          <div className="bg-gray-300 w-full rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.499028196727!2d111.49973337588449!3d-7.629357475448871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf9202af62d3%3A0xe478dc16d3340a2!2sSamitra%20Ecovillage!5e0!3m2!1sid!2sid!4v1741460781755!5m2!1sid!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale rounded-xl"
            ></iframe>
          </div>

          <div className="flex flex-col justify-end items-start">
            <h2 className="font-plusjakarta font-medium text-[42px] text-white text-left">
              A Better Way of Living <br /> Starts Now!
            </h2>

            <div className="w-full max-w-[500px] h-10 mt-4">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center gap-x-3 h-full"
              >
                <input
                  value={nameUser}
                  onChange={(e) => setNameUser(e.target.value)}
                  className="w-full h-full bg-transparent placeholder:opacity-70 text-slate-700 text-md border-2 border-slate-200 rounded-lg pl-4 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-samitra-green  focus:border-2 hover:border-slate-300 shadow-sm focus:shadow text-white"
                  placeholder="Type your name ..."
                />

                <Button
                  children
                  className="button-green h-10 w-32 flex gap-x-1 items-center"
                  type="submit"
                >
                  <FaWhatsapp />
                  Chat
                </Button>
              </form>
            </div>
          </div>
        </div>
        <img
          src={ContactUsBanner}
          alt="samitra-contact"
          className="object-cover h-full w-full absolute"
        />
      </div>

      {/* Contact Us Mobile Version */}
      <div className="h-full w-full relative flex xl:hidden">
        <div className="bg-black/70 w-full h-full z-10 grid grid-cols-1 gap-x-7 px-8 py-20">
          <div className="flex flex-col justify-center gap-y-4">
            <div className="bg-gray-300 w-full rounded-xl">
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

            <div className="w-full h-10">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center gap-x-3 h-full"
              >
                <input
                  value={nameUser}
                  onChange={(e) => setNameUser(e.target.value)}
                  className="w-full h-full bg-transparent placeholder:opacity-70 text-slate-700 text-md border-2 border-slate-200 rounded-lg pl-4 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-samitra-green  focus:border-2 hover:border-slate-300 shadow-sm focus:shadow text-white"
                  placeholder="Type your name ..."
                />

                <Button
                  children
                  className="button-green h-10 w-32 flex gap-x-1 items-center"
                  type="submit"
                >
                  <FaWhatsapp />
                  Chat
                </Button>
              </form>
            </div>
          </div>
        </div>
        <img
          src={ContactUsBanner}
          alt="samitra-contact"
          className="object-cover h-full w-full absolute"
        />
      </div>
    </>
  );
};

export default ContactUs;
