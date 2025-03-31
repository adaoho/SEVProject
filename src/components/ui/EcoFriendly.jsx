import React from "react";
import { listEcoFeature, virtualTour } from "../../constant/dataHouseType";
import { BiChevronsRight } from "react-icons/bi";
import { Type72Image7 } from "../../assets/images/housetype/export-assets";

const EcoFriendly = () => {
  return (
    <>
      {/* Eco Friendly Section Desktop */}
      <section
        id="about-samitra-ecovillage"
        className="w-full px-24 py-28 hidden xl:flex flex-col gap-y-10 h-full gap-x-5 bg-samitra-graybg"
      >
        <div className="flex gap-x-5 h-[245px] w-full">
          <div className="flex flex-col h-full gap-y-7 items-start flex-1">
            <h2 className="font-plusjakarta text-[38px] leading-[45px] font-medium truncate-threeline">
              The First and Only <br />
              Eco-Friendly Housing in Madiun.
            </h2>
            <p className="font-inter text-[14px] text-gray-500 leading-6 max-w-[90%] truncate-threeline">
              Samitra Ecovillage offers a healthy, sustainable, and comfortable
              living environment, designed to enhance well-being and harmony
              with nature.
            </p>
          </div>
          <div className="flex gap-x-4 w-fit">
            {listEcoFeature?.slice(0, 3)?.map((data, index) => (
              <div
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

          <div className="bg-samitra-blackgreen h-full flex-1 rounded-xl relative flex flex-col">
            <img
              src={Type72Image7}
              alt=""
              className="rounded-xl w-full object-cover absolute top-0 h-full transition-opacity duration-500 opacity-0"
              onLoad={(e) => {
                e.currentTarget.classList.remove("opacity-0");
              }}
            />
            <div className="absolute inset-0 w-full h-full bg-black/60 rounded-xl flex flex-col gap-y-2 justify-center p-12 text-white">
              <h2 className="text-[24px] font-medium">
                Live More Comfortably at Samitra Ecovillage
              </h2>
              <p className="text-[14px] text-gray-500">
                Stay in a cool, healthy, and eco-friendly home <br /> with
                outstanding features
              </p>

              <span
                onClick={() => window.open(virtualTour, "__blank")}
                className="text-white text-[14px] flex gap-x-2 items-center cursor-pointer hover:text-samitra-green transition-colors hover:underline"
              >
                Take a Virtual Tour
                <BiChevronsRight />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Eco Friendly Section Mobile */}
      <section
        id="about-samitra-ecovillage"
        className="w-full px-8 py-12 flex xl:hidden flex-col h-full gap-x-5 bg-samitra-graybg"
      >
        <div className="flex gap-y-5 h-full w-full flex-col">
          <div className="flex flex-col h-full gap-y-4 items-start flex-1">
            <h2 className="font-plusjakarta text-[2rem] leading-[45px] font-medium">
              The First and Only <br />
              Eco-Friendly Housing in Madiun.
            </h2>
            <p className="font-inter text-[14px] text-gray-500 leading-6">
              Samitra Ecovillage offers a healthy, sustainable, and comfortable
              living environment, designed to enhance well-being and harmony
              with nature.
            </p>
          </div>
          <div className="flex gap-y-4 w-full flex-col h-full">
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

          <div className="bg-samitra-blackgreen h-full flex-1 rounded-xl relative flex flex-col">
            <img
              src={Type72Image7}
              alt=""
              className="rounded-xl w-full object-cover top-0 h-[150px] transition-opacity duration-500 opacity-0"
              onLoad={(e) => {
                e.currentTarget.classList.remove("opacity-0");
              }}
            />
            <div className="absolute inset-0 w-full h-full bg-black/60 rounded-xl flex flex-col justify-center p-8 text-white gap-y-4">
              <h2 className="text-[16px] font-medium">
                Live More Comfortably <br /> at Samitra Ecovillage
              </h2>

              <span
                onClick={() => window.open(virtualTour, "__blank")}
                className="text-white text-[14px] flex gap-x-2 items-center cursor-pointer hover:text-samitra-green transition-colors hover:underline"
              >
                Take a Virtual Tour
                <BiChevronsRight />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcoFriendly;
