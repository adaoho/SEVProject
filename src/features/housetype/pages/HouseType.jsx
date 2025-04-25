import React, { useEffect, useRef, useState } from "react";
import Header from "../../../components/ui/Header";
import ScrollToTop from "../../../hooks/ScrollToTop";
import { BgHomePage } from "../../home/assets/export-assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import {
  houseTypeSlider,
  listDataHouseType,
} from "../../../constant/dataHouseType";
import EcoFriendly from "../../../components/ui/EcoFriendly";
import ContactUs from "../../../components/ui/ContactUs";
import Footer from "../../../components/ui/Footer";
import { BsArrowUpRight } from "react-icons/bs";
import MobileHouseType from "./MobileHouseType";
import Aos from "aos";

const HouseType = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    Aos.refreshHard();
  }, [listDataHouseType]);

  return (
    <>
      <ScrollToTop>
        <div className="hidden xl:block">
          <section
            id="hero-samitra-ecovillage-detail-house-type"
            className="relative flex flex-col items-center w-screen h-screen"
          >
            <Header />

            {/* Hero Section */}
            <div className="absolute z-10 w-full h-full bg-black/70"></div>

            <div
              id="page-loader"
              className="fixed inset-0 flex items-center justify-center"
            >
              <div className="loader"></div>
            </div>

            <div className="absolute w-full h-full overflow-hidden ">
              <img
                data-aos="zoom-out"
                src={BgHomePage}
                alt="homepage-samitra-ecovillage"
                className="object-cover w-full h-full transition-opacity duration-700 opacity-0"
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                  const loader = document.getElementById("page-loader");
                  if (loader) loader.remove();
                }}
              />
            </div>

            <div className="grid grid-cols-1 z-10 items-start justify-center px-24 overflow-hidden h-full w-full gap-y-5 pb-[8%] pt-[12%]">
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                className="relative flex w-full h-full overflow-hidden rounded-xl"
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  navigation={{
                    prevEl: ".main-prev",
                    nextEl: ".main-next",
                  }}
                  className="relative rounded-3xl"
                  spaceBetween={20}
                  slidesPerView={1}
                  centeredSlides={true}
                  speed={1000}
                  loop={true}
                  autoplay={{
                    disableOnInteraction: false,
                  }}
                >
                  {houseTypeSlider?.map((data, index) => {
                    return (
                      <SwiperSlide key={"dataHouseType" + index}>
                        <img
                          src={data?.image}
                          alt="photo-dummy"
                          className={`object-cover w-full h-full rounded-3xl transition-opacity duration-500`}
                        />
                      </SwiperSlide>
                    );
                  })}
                  <div className="absolute w-full bg-gradient-to-t z-10 bottom-0 h-[120px] px-8 from-black to-transparent flex justify-end items-center ">
                    <div
                      onClick={() =>
                        navigate(
                          "/house-type/" + houseTypeSlider?.[activeIndex]?.slug
                        )
                      }
                      className="flex items-center px-4 py-2 text-gray-800 transition-all bg-white cursor-pointer rounded-xl gap-x-4 hover:bg-samitra-green hover:text-white"
                    >
                      <h1>
                        Go to {houseTypeSlider?.[activeIndex]?.title} Details
                      </h1>
                      <BsArrowUpRight className="size-4" />
                    </div>
                  </div>
                </Swiper>
              </div>

              <div className="flex flex-col justify-end w-full h-full text-white gap-y-10">
                <div className="grid w-full grid-cols-3 gap-x-5">
                  {listDataHouseType?.map((data, index) => {
                    return (
                      <div data-aos="fade-up" data-aos-delay={index * 150}>
                        <div
                          onClick={() => {
                            setActiveIndex(index);
                            swiperRef.current?.slideToLoop(index);
                          }}
                          key={"options-house-type" + index}
                          className={`${
                            index === activeIndex
                              ? "bg-samitra-green"
                              : "bg-samitra-blackgreen/60 cursor-pointer"
                          } w-full flex justify-center items-center flex-col gap-y-1 py-6 px-6 rounded-xl transition-all`}
                        >
                          <div className="flex flex-col items-start w-full gap-x-3 gap-y-2">
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
