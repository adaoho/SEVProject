import React, { useState } from "react";
import Header from "../../../components/ui/Header";
import ScrollToTop from "../../../hooks/ScrollToTop";
import { BgHomePage } from "../../home/assets/export-assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { listDataHouseType } from "../../../constant/dataHouseType";
import EcoFriendly from "../../../components/ui/EcoFriendly";
import ContactUs from "../../../components/ui/ContactUs";
import Footer from "../../../components/ui/Footer";
import { BsArrowUpRight } from "react-icons/bs";
import MobileHouseType from "./MobileHouseType";

const HouseType = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <ScrollToTop>
        <div className="hidden xl:block">
          <section
            id="hero-samitra-ecovillage-detail-house-type"
            className="h-screen w-screen flex flex-col relative items-center"
          >
            <Header />

            {/* Hero Section */}
            <div className="w-full h-full bg-black/70 z-10 absolute"></div>

            <div className="fixed inset-0 flex justify-center items-center">
              <div className="loader"></div>
            </div>

            <img
              src={BgHomePage}
              alt="homepage-samitra-ecovillage"
              className="h-full w-full object-cover absolute transition-opacity duration-700 opacity-0"
              onLoad={(e) => {
                e.currentTarget.classList.remove("opacity-0");
                e.currentTarget.previousSibling.remove();
              }}
            />

            <div className="grid grid-cols-1 z-10 items-start justify-center px-24 overflow-hidden h-full w-full gap-y-5 pb-[8%] pt-[12%]">
              <div className="relative w-full h-full rounded-xl overflow-hidden flex">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  navigation={{
                    prevEl: ".main-prev",
                    nextEl: ".main-next",
                  }}
                  className="relative rounded-3xl"
                  spaceBetween={20}
                  slidesPerView={"auto"}
                  centeredSlides={true}
                  speed={1000}
                  loop={true}
                  autoplay={{
                    disableOnInteraction: false,
                  }}
                >
                  {listDataHouseType?.[activeIndex]?.slider_image?.map(
                    (data, index) => {
                      return (
                        <SwiperSlide key={"dataHouseType" + index}>
                          <img
                            key={"data-facilities" + index}
                            src={data?.image}
                            alt="photo-dummy"
                            className="w-full h-full object-cover rounded-3xl opacity-0"
                            onLoad={(e) => {
                              e.currentTarget.classList.remove("opacity-0");
                            }}
                          />
                        </SwiperSlide>
                      );
                    }
                  )}
                  <div className="absolute w-full bg-gradient-to-t z-10 bottom-0 h-[120px] px-8 from-black to-transparent flex justify-end items-center ">
                    <div
                      onClick={() =>
                        navigate(
                          "/house-type/" +
                            listDataHouseType?.[activeIndex]?.slug
                        )
                      }
                      className="px-4 py-2 rounded-xl bg-white text-gray-800 flex gap-x-4 items-center cursor-pointer hover:bg-samitra-green hover:text-white transition-all"
                    >
                      <h1>
                        Go to {listDataHouseType?.[activeIndex]?.title} Details
                      </h1>
                      <BsArrowUpRight className="size-4" />
                    </div>
                  </div>
                </Swiper>
              </div>

              <div className="w-full flex flex-col gap-y-10 text-white justify-end h-full">
                <div className="w-full grid grid-cols-3 gap-x-5">
                  {listDataHouseType?.map((data, index) => {
                    return (
                      <div
                        onClick={() => setActiveIndex(index)}
                        key={"options-house-type" + index}
                        className={`${
                          index === activeIndex
                            ? "bg-samitra-green"
                            : "bg-samitra-blackgreen/60 cursor-pointer"
                        } w-full flex justify-center items-center flex-col gap-y-1 py-6 px-6 rounded-xl transition-all`}
                      >
                        <div className="flex gap-x-3 items-start flex-col w-full gap-y-2">
                          <h2 className="text-[1.8rem] font-medium">
                            {data?.title} - {data?.type}
                          </h2>
                          <div className="text-[0.9rem] flex gap-x-2 flex-wrap">
                            <h2>
                              Building Area:{" "}
                              <b className="text-samitra-orange">
                                {" "}
                                {data?.building_area}m<sup>2</sup>
                              </b>
                            </h2>
                            <h2>-</h2>
                            <h2>
                              Landing Area:{" "}
                              <b className="text-samitra-orange">
                                {" "}
                                {data?.land_area}m<sup>2</sup>
                              </b>
                            </h2>
                          </div>
                        </div>
                        <h2 className="text-[18px]">
                          {listDataHouseType.basic?.bedroom}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <EcoFriendly />
          <ContactUs />
          <Footer />
        </div>
      </ScrollToTop>

      <MobileHouseType />
    </>
  );
};

export default HouseType;
