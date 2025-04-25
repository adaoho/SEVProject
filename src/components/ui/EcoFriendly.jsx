import { BsPlayCircle } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { listEcoFeature, virtualTour } from "../../constant/dataHouseType";
import { BiChevronsRight } from "react-icons/bi";
import { Type72Image7 } from "../../assets/images/housetype/export-assets";
import VideoSamitra from "../../assets/videos/samitra-video.mp4";
import { Dialog } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setModalVideo } from "../../stores/mainSlices";
import Aos from "aos";

const EcoFriendly = () => {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const handler = () => setIsDesktop(mediaQuery.matches);
    handler(); // set initial state
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    Aos.init({
      disable: false,
      duration: 700,
      easing: "ease-out-cubic",
    });
    return () => Aos.refresh();
  }, []);

  return (
    <>
      {/* Eco Friendly Section Desktop */}
      <section
        id="about-samitra-ecovillage"
        className="flex-col hidden w-full h-full px-24 py-28 xl:flex gap-y-10 gap-x-5 bg-samitra-graybg"
      >
        <div className="flex gap-x-5 h-[245px] w-full">
          <div className="flex flex-col items-start flex-1 h-full gap-y-7">
            <h2
              data-aos="fade-up"
              // data-aos-delay="50"
              className="font-plusjakarta text-[38px] leading-[45px] font-medium truncate-threeline"
            >
              The First and Only <br />
              Eco-Friendly Housing in Madiun.
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              className="font-inter text-[14px] text-gray-500 leading-6 max-w-[90%] truncate-threeline"
            >
              Samitra Ecovillage offers a healthy, sustainable, and comfortable
              living environment, designed to enhance well-being and harmony
              with nature.
            </p>
          </div>
          <div className="flex gap-x-4 w-fit">
            {listEcoFeature?.slice(0, 3)?.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 50}
                key={"eco-feature" + index}
                className="bg-samitra-blackgreen h-full w-[250px] rounded-xl flex flex-col gap-y-2 text-white relative items-end justify-end"
              >
                <img
                  src={data?.image}
                  alt=""
                  className="rounded-t-xl w-full object-cover absolute top-0 h-[50%] transition-opacity duration-500 opacity-0"
                  onLoad={(e) => {
                    e.currentTarget.classList.remove("opacity-0");
                  }}
                />
                <div className="flex flex-col gap-y-1 p-4 h-[50%]">
                  <h1
                    dangerouslySetInnerHTML={{ __html: data?.title }}
                    className="text-[18px] font-medium max-w-[80%]"
                  />
                  <p
                    dangerouslySetInnerHTML={{ __html: data?.description }}
                    className="text-[12px] text-gray-400 truncate-threeline font-inter"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-x-5 h-[245px]">
          {listEcoFeature?.slice(3, 5)?.map((data, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 50}
              key={"eco-feature" + index}
              className="bg-samitra-blackgreen h-full w-[250px] rounded-xl flex flex-col gap-y-2 text-white relative items-end justify-end"
            >
              <img
                src={data?.image}
                alt=""
                className="rounded-t-xl w-full object-cover absolute top-0 h-[50%] transition-opacity duration-500 opacity-0"
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                }}
              />
              <div className="flex flex-col gap-y-1 p-4 h-[50%]">
                <h1
                  dangerouslySetInnerHTML={{ __html: data?.title }}
                  className="text-[18px] font-medium max-w-[90%]"
                />
                <p
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                  className="text-[12px] text-gray-400 truncate-threeline font-inter"
                />
              </div>
            </div>
          ))}

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="relative flex flex-col flex-1 h-full bg-samitra-blackgreen rounded-xl"
          >
            <video
              src={VideoSamitra}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsReady(true)}
              className={`rounded-xl w-full object-cover top-0 h-full transition-opacity duration-500" ${
                isReady ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="absolute inset-0 flex flex-col justify-center w-full h-full p-12 text-white bg-black/60 rounded-xl gap-y-3">
              <h2 className="text-[24px] font-medium">
                Live More Comfortably at Samitra Ecovillage
              </h2>
              <p className="text-[14px] text-gray-500">
                Stay in a cool, healthy, and eco-friendly home <br /> with
                outstanding features
              </p>

              <span
                onClick={() => dispatch(setModalVideo(true))}
                className="text-white text-[14px] flex gap-x-2 mt-1 items-center cursor-pointer hover:text-samitra-green transition-colors hover:underline"
              >
                <BsPlayCircle /> Play Video
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Friendly Section Mobile */}
      <section
        id="about-samitra-ecovillage"
        className="flex flex-col w-full h-full px-8 py-12 xl:hidden gap-x-5 bg-samitra-graybg"
      >
        <div className="flex flex-col w-full h-full gap-y-5">
          <div className="flex flex-col items-start flex-1 h-full gap-y-4">
            <h2
              data-aos="fade-up"
              className="font-plusjakarta text-[2rem] leading-[45px] font-medium"
            >
              The First and Only <br />
              Eco-Friendly Housing in Madiun.
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              className="font-inter text-[14px] text-gray-500 leading-6"
            >
              Samitra Ecovillage offers a healthy, sustainable, and comfortable
              living environment, designed to enhance well-being and harmony
              with nature.
            </p>
          </div>
          <div className="relative flex flex-col flex-1 h-full bg-samitra-blackgreen rounded-xl">
            <video
              src={VideoSamitra}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsReady(true)}
              className={`rounded-xl w-full object-cover top-0 h-[180px] transition-opacity duration-500" ${
                isReady ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="absolute inset-0 flex flex-col justify-center w-full h-full p-8 text-white bg-black/60 rounded-xl gap-y-4">
              <h2 className="text-[16px] font-medium">
                Live More Comfortably <br /> at Samitra Ecovillage
              </h2>

              <span
                onClick={() => dispatch(setModalVideo(true))}
                className="text-white text-[14px] flex gap-x-2 items-center cursor-pointer hover:text-samitra-green transition-colors hover:underline"
              >
                <BsPlayCircle /> Play Video
              </span>
            </div>
          </div>

          <div className="h-[1px] w-full border-b-[1px] border-dashed border-gray-400 my-2"></div>

          <div className="flex flex-col w-full h-full gap-y-4">
            {listEcoFeature?.map((data, index) => (
              <div
                key={"eco-feature" + index}
                className="bg-samitra-blackgreen h-[100px] w-full rounded-xl flex text-white overflow-hidden"
              >
                <img
                  src={data?.image}
                  alt=""
                  className="w-[50%] h-full object-cover rounded-l-xl opacity-0"
                  onLoad={(e) => {
                    e.currentTarget.classList.remove("opacity-0");
                  }}
                />

                <div className="flex w-[50%] h-full text-left justify-center items-center p-4">
                  <h1
                    dangerouslySetInnerHTML={{ __html: data?.title }}
                    className="text-[14px] font-medium w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={openDialog}
        handler={() => setOpenDialog(false)}
        className="flex items-center justify-center w-full bg-transparent"
      >
        <div className="p-3 bg-ang-prm-black rounded-3xl">
          <iframe
            src="https://drive.google.com/file/d/1UpC9plu25Zwx4TMTjfG_MVgc7Rek2j6j/preview"
            width={isDesktop ? "720" : "320"}
            height="405"
            allowFullScreen
            className="rounded-3xl"
            tabIndex="-1"
          />
        </div>
      </Dialog>
    </>
  );
};

export default EcoFriendly;
