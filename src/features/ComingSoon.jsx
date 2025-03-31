import { FaWhatsapp } from "react-icons/fa";
import { Button, Input } from "@material-tailwind/react";
import MainBackground from "../src/assets/images/main-background.jpeg";
import LogoSamitraWhite from "../src/assets/logo/logo-samitra-white.png";
import LogoSamitra from "../src/assets/logo/logo-samitra.png";
import { useState } from "react";

function ComingSoon() {
  const [nameChat, setNameChat] = useState("");
  const nameChange = (element) => {
    const { value } = element.target;
    setNameChat(value);
  };

  const onSubmitChat = (e) => {
    const phoneNumber = `6285736207240`;
    const message = encodeURIComponent(
      `Hallo, saya ${nameChat}! Saya tertarik dengan Samitra Ecovillage, bisakah dikirimkan informasi lebih lanjut?`
    );
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
      "_blank",
      "rel=noopener noreferrer"
    );
    setNameChat("");
  };

  return (
    <>
      <div className="bg-samitra-800">
        {/* Desktop View */}
        <div className="hidden xl:flex w-full items-center justify-center h-screen">
          <div className="w-1/2 flex justify-center items-center h-full">
            <img
              src={MainBackground}
              alt="samitra-main-background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 flex justify-center items-center bg-samitra-800 h-full relative">
            <div className="absolute top-8">
              <img
                src={LogoSamitraWhite}
                alt=""
                className="object-contain h-20"
              />
            </div>

            <div className="flex flex-col gap-y-1 h-fit">
              <div className="border-[1px] border-gray-400 flex justify-center items-center p-10 rounded-xl flex-col gap-y-2 text-white mx-8 mb-2">
                <h1 className="font-poppins text-[30px] text-left leading-7 font-bold w-full ">
                  Exciting Changes are Underway
                </h1>

                <div className="w-full flex flex-col gap-y-1 mt-4">
                  <h1>Sent me more the information!</h1>
                  <Input
                    maxLength={16}
                    placeholder="Type your name ..."
                    className="appearance-none !border-t-blue-gray-200 placeholder:text-gray-300 placeholder:opacity-100 focus:!border-samitra-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onChange={nameChange}
                  />
                  <Button
                    className="mt-4 flex w-full justify-center items-center gap-x-1 hover:bg-samitra-900 hover:text-white"
                    fullWidth
                    color="white"
                    onClick={nameChat ? onSubmitChat : null}
                  >
                    <FaWhatsapp className="size-4" />
                    CHAT ME
                  </Button>
                </div>
              </div>
              {/* <div className="flex gap-x-2 justify-center items-center text-white">
                Follow our Instagram
              </div> */}
            </div>

            <div className="absolute flex justify-center items-center w-fit px-4 py-1 rounded-xl bottom-8 text-white gap-x-2">
              <h1>
                Member of:{" "}
                <a
                  href="https://www.instagram.com/samitraland/"
                  target="_blank"
                  style={{ appearance: "none" }}
                  className="underline"
                >
                  Samitra Land
                </a>
              </h1>
              |
              <h1>
                Site by:{" "}
                <a
                  href="https://www.instagram.com/mantrarupa/"
                  target="_blank"
                  style={{ appearance: "none" }}
                  className="underline"
                >
                  Mantrarupa
                </a>
              </h1>
            </div>
          </div>
        </div>

        {/* Phone View */}
        <div className="flex flex-col xl:hidden w-screen items-center justify-center h-[50rem] relative">
          <div className="absolute top-8 z-20">
            <img
              src={LogoSamitraWhite}
              alt=""
              className="object-contain h-20"
            />
          </div>
          <div className="w-full flex justify-center items-center h-[40%] relative">
            <div className="bg-black/30 h-full w-full absolute z-0"></div>
            <img
              src={MainBackground}
              alt="samitra-main-background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex justify-center items-center bg-samitra-800 h-[60%] relative">
            <div className="border-[1px] border-gray-400 flex justify-center items-center p-10 rounded-xl flex-col gap-y-2 text-white m-8 mb-20">
              <h1 className="font-poppins text-[30px] text-left leading-8 font-bold w-full ">
                Exciting Changes are Underway
              </h1>

              <div className="w-full flex flex-col gap-y-1 mt-4">
                <h1>Sent me more the information!</h1>
                <Input
                  maxLength={16}
                  placeholder="Type your name ..."
                  className="appearance-none !border-t-blue-gray-200 placeholder:text-gray-300 placeholder:opacity-100 focus:!border-samitra-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none text-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={nameChange}
                />
                <Button
                  className="mt-4 flex w-full justify-center items-center gap-x-1 hover:bg-samitra-900 hover:text-white"
                  fullWidth
                  color="white"
                  onClick={onSubmitChat}
                >
                  <FaWhatsapp className="size-4" />
                  CHAT ME
                </Button>
              </div>
            </div>

            <div className="absolute flex justify-center gap-x-2 items-center w-full bottom-8 text-white text-[14px]">
              <h1>
                Member of:{" "}
                <a
                  href="https://www.instagram.com/samitraland/"
                  target="_blank"
                  style={{ appearance: "none" }}
                  className="underline"
                >
                  Samitra Land
                </a>
              </h1>
              |
              <h1>
                Site by:{" "}
                <a
                  href="https://www.instagram.com/mantrarupa/"
                  target="_blank"
                  style={{ appearance: "none" }}
                  className="underline"
                >
                  Mantrarupa
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
