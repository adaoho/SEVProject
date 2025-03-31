import React, { useState } from "react";
import Header from "../../../components/ui/Header";
import Footer from "../../../components/ui/Footer";
import ContactUs from "../../../components/ui/ContactUs";
import ScrollToTop from "../../../hooks/ScrollToTop";
import { BgHomePage } from "../../home/assets/export-assets";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import {
  DummyProfile,
  IconA,
  IconA2,
  IconI,
  IconM,
  IconR,
  IconS,
  IconSamitra,
  IconT,
  LogoSamitraLand,
} from "../assets/export-assets";
import MobileAbout from "./MobileAbout";
import {
  dataAboutFirstSection,
  dataAboutSamitraLandCare,
  dataAboutSlider,
  dataMemberSamitra,
} from "../../../constant/dataAbout";

const About = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const listOfCore = [
    { icon: IconS, title: "Sholat Tepat Waktu", subtitle: "Praying on Time" },
    {
      icon: IconA,
      title: "Aktif Berkolaborasi",
      subtitle: "Actively Collaborating",
    },
    {
      icon: IconM,
      title: "Mudah Beradaptasi",
      subtitle: "Easily Adaptable",
    },
    {
      icon: IconI,
      title: "Instropeksi Berkelanjutan",
      subtitle: "Continuous Self-reflection",
    },
    {
      icon: IconT,
      title: "Terus Berinovasi",
      subtitle: "Constantly Innovating",
    },
    {
      icon: IconR,
      title: "Rajin Bersedekah",
      subtitle: "Diligently Sharing Kindness",
    },
    {
      icon: IconA2,
      title: "Aktualisasi Target",
      subtitle: "Achieving Targets",
    },
  ];

  return (
    <>
      <ScrollToTop>
        <div className="hidden xl:block">
          <section
            id="hero-samitra-ecovillage-about-us"
            className="h-[400px] w-screen flex flex-col relative items-center"
          >
            <Header />

            {/* Hero Section */}
            <div className="w-full h-full bg-black/70 z-10 absolute flex justify-center items-center pt-[5%]">
              <h1 className="text-white font-bold text-[62px]">
                About Samitra
              </h1>
            </div>

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
          </section>

          <section
            id="vission-mission-section"
            className="w-full flex justify-center items-center h-full px-24 gap-y-20 bg-white pb-40 pt-28 flex-col"
          >
            <div className="grid grid-cols-3 w-full h-[230px] gap-x-5">
              {dataAboutFirstSection?.map((data, index) => {
                return (
                  <div
                    key={"about-first-section" + index}
                    className="w-full flex justify-center items-center h-[270px]"
                  >
                    <img
                      src={data?.image}
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-y-10 w-full justify-start text-[#27272A]">
              <h2 className="text-left text-[40px] font-semibold leading-[50px]">
                Our Purpose, Our Promise: <br /> Sustainable Homes, Innovative
                Living
              </h2>

              <div className="w-full grid grid-cols-2 gap-x-20 flex-wrap text-[16px] text-gray-700">
                <div className="flex flex-col gap-y-2">
                  <h2 className="font-bold">VISION</h2>
                  <p className="font-inter leading-8">
                    Becoming a real estate company that continuously innovates
                    and prioritizes customer satisfaction, with a goal of
                    developing a 5-hectare residential area within the next five
                    years in Madiun Raya.
                  </p>
                </div>
                <div className="flex flex-col gap-y-2 w-full flex-wrap">
                  <h2 className="font-bold">MISSION</h2>
                  <ul className="list-decimal pl-4 leading-8 font-inter">
                    <li>
                      Continuously innovating to provide high-quality and
                      well-designed housing products.
                    </li>
                    <li>
                      Developing both the hard and soft skills of our team by
                      fostering a positive work culture to achieve customer
                      satisfaction.
                    </li>
                    <li>
                      Strengthening collaboration with stakeholders to
                      successfully and efficiently achieve the development
                      target of a 5-hectare residential area within the next
                      five years.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-x-20 flex-wrap text-[16px] mt-10">
                <div className="relative w-full h-full rounded-3xl overflow-hidden flex">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    onSwiper={(swiper) => {
                      setTimeout(() => {
                        swiper.autoplay.start();
                      }, 100);
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    navigation={{
                      prevEl: ".prev-about",
                      nextEl: ".next-about",
                    }}
                    className="relative rounded-3xl max-h-[450px]"
                    spaceBetween={20}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    speed={1000}
                    loop={true}
                    autoplay={{
                      disableOnInteraction: false,
                    }}
                  >
                    {dataAboutSlider?.map((data, index) => {
                      return (
                        <SwiperSlide key={"data-slider-image" + index}>
                          <img
                            src={data?.image}
                            alt="photo-dummy"
                            className="w-full h-full object-cover rounded-3xl opacity-0"
                            onLoad={(e) => {
                              e.currentTarget.classList.remove("opacity-0");
                            }}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>

                  <div className="absolute w-full bg-gradient-to-t z-10 bottom-0 h-[100px] px-8 from-black to-transparent flex justify-end items-center">
                    <div className="flex gap-x-1 items-center text-white z-10">
                      <AiFillLeftCircle className="size-11 prev-about cursor-pointer transition-colors hover:text-samitra-green" />
                      <AiFillRightCircle className="size-11 next-about cursor-pointer transition-colors hover:text-samitra-green" />
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-start flex-col gap-y-7">
                  <h2 className="text-left text-[40px] font-semibold leading-[50px]">
                    Our Journey of Growth <br /> and Contribution.
                  </h2>
                  <p className="font-inter leading-8 text-[16px] text-gray-700">
                    PT. Samitra Berkelimpahan Property, known as Samitra Land,
                    has over five years of experience in the property industry,
                    continuously striving to contribute to economic development
                    in Madiun and its surrounding areas.
                    <br />
                    <br />
                    Through years of experience and continuous learning, the
                    company has grown and evolved in line with its strategic
                    plans.
                  </p>
                  <div className="flex gap-x-10">
                    <div className="bg-samitra-green w-[10px] h-full"></div>
                    <p className="font-inter leading-8 text-[16px] text-gray-500">
                      The trust given by various stakeholders inspires Samitra
                      Land to continue innovating and creating with passion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="samitra-ecovillage-core-value"
            className="bg-samitra-gray w-full px-24 flex flex-col justify-start items-center py-32 text-white"
          >
            <div className="flex flex-col items-center gap-y-5">
              <h2 className="text-left text-[40px] leading-[50px]">
                Our Core Values: The Foundation of Samitra Land
              </h2>
              <p className="font-inter leading-8 text-center w-full">
                At Samitra Land, our core values drive innovation, integrity,
                and excellence. We create high-quality homes <br /> and
                thriving, sustainable communities through forward-thinking
                solutions and strong collaborations.
              </p>
            </div>

            <div className="h-[1px] w-full border-b-[1px] border-dashed border-gray-400 my-14"></div>

            <div className="flex flex-col gap-y-5 w-full items-center justify-start">
              <img src={IconSamitra} alt="" className="" />
              <div className="flex gap-4 w-full items-center flex-wrap justify-center gap-x-20 gap-y-10 mt-10">
                {/* Icon S */}
                {listOfCore?.map((data, index) => {
                  return (
                    <div
                      key={"core-value" + index}
                      className="flex gap-x-4 justify-center items-center"
                    >
                      <img src={data?.icon} alt="" className="h-14" />
                      <div className="flex flex-col">
                        <h2 className="text-[18px] font-semibold">
                          {data?.title}
                        </h2>
                        <h4 className="text-[14px] italic text-gray-500">
                          {data?.subtitle}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section
            id="about-samitra-ecovillage-our-team"
            className="w-full bg-samitra-graybg px-24 flex flex-col gap-y-10 py-28"
          >
            <div className="w-full grid grid-cols-2 gap-x-20">
              <div className="flex flex-col gap-y-10">
                <h2 className="text-left text-[40px] leading-[50px] font-semibold">
                  Our Team: <br />
                  Building with Purpose
                </h2>
                <div className="flex gap-x-10 items-center">
                  <h2 className="font-inter text-[14px] text-gray-700">
                    Developed by
                  </h2>
                  <img src={LogoSamitraLand} alt="" className="h-28" />
                </div>
              </div>
              <div className="flex flex-col gap-y-10">
                <p className="text-left text-[16px] leading-[32px] font-inter text-gray-700">
                  Get to know the passionate professionals behind Samitra Land.
                  With expertise, innovation, and a commitment to excellence,
                  our team works together to create high-quality housing and
                  thriving communities for a better future.
                </p>
                <button
                  type="button"
                  className="button-samitra-green text-white w-fit"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/samitraland/",
                      "__blank"
                    )
                  }
                >
                  Discover Samitra Land
                </button>
              </div>
            </div>

            <div className="h-[1px] w-full border-b-[1px] border-gray-400 my-14"></div>

            <div className="grid grid-cols-4 w-full gap-10">
              {dataMemberSamitra?.map((data, index) => {
                return (
                  <div
                    key={"profile-person" + index}
                    className="flex flex-col gap-y-7 h-fit"
                  >
                    <img
                      src={data?.image}
                      alt=""
                      className="h-[280px] object-cover rounded-2xl"
                    />
                    <div className="flex flex-col gap-y-2 items-start w-full h-full">
                      <div className="border-[1px] text-[16px] font-bold border-samitra-green text-samitra-green rounded-xl flex justify-center items-center w-fit px-2 py-2 truncate">
                        {data?.name}
                      </div>
                      <h2 className="text-gray-700 text-[14px]">
                        {data?.title}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section
            id="samitra-land-care"
            className="bg-samitra-green w-full px-24 py-32 flex flex-col items-center gap-y-20"
          >
            <div className="flex flex-col gap-y-10 text-white items-center">
              <h2 className="text-center text-[40px] leading-[50px]">
                Samitra Land Care: <br /> Giving Back, Growing Together
              </h2>
              <p className="text-center text-[16px] leading-[32px] font-inter w-[80%] text-gray-200">
                Samitra Land Care is a social responsibility program initiated
                by Samitra Land, a housing developer, to support the wider
                community. This program focuses on various aspects, including
                economic, social, and environmental initiatives. One of its
                regular activities is providing aid to orphans and
                underprivileged individuals, which takes place every second
                Friday of the month.
                <br />
                <br />
                The ultimate goal of Samitra Land Care is to become a social
                initiative that spreads meaningful benefits to communities
                across Indonesia.
              </p>
            </div>

            <div className="w-full grid grid-cols-3 gap-8 h-[240px]">
              {dataAboutSamitraLandCare?.map((data, index) => {
                return (
                  <img
                    key={"samitra-land-care" + index}
                    src={data?.image}
                    alt=""
                    className="w-full object-cover rounded-xl h-[240px]"
                  />
                );
              })}
            </div>
          </section>
          <ContactUs />
          <Footer />
        </div>
      </ScrollToTop>

      <MobileAbout />
    </>
  );
};

export default About;
