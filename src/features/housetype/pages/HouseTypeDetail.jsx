import { AiOutlineLeft, AiOutlineZoomIn } from "react-icons/ai";
import React, { useState } from "react";
import { BgHomePage } from "../../home/assets/export-assets";
import Header from "../../../components/ui/Header";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import {
  BluePrintHouse,
  IconBathroom,
  IconBedroom,
  IconCarport,
} from "../assets/export-assets";
import ContactUs from "../../../components/ui/ContactUs";
import Footer from "../../../components/ui/Footer";
import EcoFriendly from "../../../components/ui/EcoFriendly";
import ScrollToTop from "../../../hooks/ScrollToTop";
import {
  houseSpesification,
  listDataHouseType,
  virtualTour,
} from "../../../constant/dataHouseType";
import { IconsVirtualTourWhite } from "../../../assets/icons/export-assets";
import { useNavigate, useParams } from "react-router-dom";
import ModalShowPicture from "../../../components/ui/ModalShowPicture";
import MobileHouseTypeDetail from "./MobileHouseTypeDetail";

const HouseTypeDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalPicture, setModalPicture] = useState({
    modal: false,
    selectedImage: "",
    title: "",
  });
  const dataDetail = listDataHouseType?.find((data) => data?.slug === slug);

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
              src={dataDetail?.slider_image?.at(0)?.image}
              alt="homepage-samitra-ecovillage"
              className="h-full w-full object-cover absolute transition-opacity duration-700 opacity-0"
              onLoad={(e) => {
                e.currentTarget.classList.remove("opacity-0");
                e.currentTarget.previousSibling.remove();
              }}
            />

            <div className="grid grid-cols-2 z-10 items-start justify-center px-24 overflow-hidden h-full w-full gap-x-12 pb-[9%] pt-[11%]">
              <div className="relative w-full h-full rounded-xl overflow-hidden flex">
                {/* <div className="relative w-full h-full"> */}
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                >
                  {dataDetail?.slider_image?.map((data, index) => {
                    return (
                      <SwiperSlide>
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
                  })}
                  <div className="absolute w-full bg-gradient-to-t z-10 bottom-0 h-[100px] px-8 from-black to-transparent flex justify-end items-center">
                    {/* <div className="px-4 py-2 rounded-xl bg-white text-gray-800">
                      <h1>
                        {dataDetail?.slider_image?.[activeIndex]?.title ||
                          "House Type"}
                      </h1>
                    </div> */}

                    <div className="flex gap-x-1 items-center text-white z-10">
                      <AiFillLeftCircle className="size-11 main-prev cursor-pointer transition-colors hover:text-samitra-green" />
                      <AiFillRightCircle className="size-11 main-next cursor-pointer transition-colors hover:text-samitra-green" />
                    </div>
                  </div>
                </Swiper>
              </div>

              <div className="w-full flex flex-col gap-y-10 text-white justify-end h-full">
                <div className="flex flex-col gap-y-1 h-fit">
                  <div
                    onClick={() => navigate("/house-type")}
                    className="flex gap-x-4 items-center cursor-pointer hover:underline transition-all"
                  >
                    <AiOutlineLeft className="size-5" />
                    <h2 className="text-[24px]">House Type</h2>
                  </div>
                  <h1 className="text-[62px] font-bold">
                    {dataDetail?.title} - {dataDetail?.type}
                  </h1>
                </div>

                <div className="flex flex-col h-fit">
                  <div className="border-b-[1px] border-t-[1px] border-gray-300 h-20 flex items-center w-full justify-between">
                    <h2 className="text-[24px] font-medium">Building Area</h2>
                    <h2 className="text-[24px] font-bold">
                      {dataDetail?.building_area}m<sup>2</sup>
                    </h2>
                  </div>
                  <div className="border-b-[1px] border-gray-300 h-20 flex items-center w-full justify-between">
                    <h2 className="text-[24px] font-medium">Land Area</h2>
                    <h2 className="text-[24px] font-bold">
                      {dataDetail?.land_area}m<sup>2</sup>
                    </h2>
                  </div>
                </div>

                <div className="w-full grid grid-cols-3 gap-x-5">
                  <div className="w-full bg-samitra-blackgreen/60 flex justify-center items-center flex-col gap-y-1 pb-8 pt-4 rounded-xl">
                    <div className="flex gap-x-3 items-center">
                      <h2 className="text-[5rem] font-bold">
                        {dataDetail?.basic?.bedroom}
                      </h2>
                      <img
                        src={IconBedroom}
                        alt=""
                        className="h-14 opacity-0 w-14 object-contain transition-opacity"
                        onLoad={(e) => {
                          e.currentTarget.classList.remove("opacity-0");
                        }}
                      />
                    </div>
                    <h2 className="text-[18px]">Bedroom</h2>
                  </div>
                  <div className="w-full bg-samitra-blackgreen/60 flex justify-center items-center flex-col gap-y-1 pb-8 pt-4 rounded-xl">
                    <div className="flex gap-x-3 items-center">
                      <h2 className="text-[5rem] font-bold">
                        {dataDetail?.basic?.bathroom}
                      </h2>
                      <img
                        src={IconBathroom}
                        alt=""
                        className="h-14 opacity-0 w-14 object-contain transition-opacity"
                        onLoad={(e) => {
                          e.currentTarget.classList.remove("opacity-0");
                        }}
                      />
                    </div>
                    <h2 className="text-[18px]">Bathroom</h2>
                  </div>
                  <div className="w-full bg-samitra-blackgreen/60 flex justify-center items-center flex-col gap-y-1 pb-8 pt-4 rounded-xl">
                    <div className="flex gap-x-3 items-center">
                      <h2 className="text-[5rem] font-bold">
                        {dataDetail?.basic?.carport}
                      </h2>
                      <img
                        src={IconCarport}
                        alt=""
                        className="h-14 opacity-0 w-14 object-contain transition-opacity"
                        onLoad={(e) => {
                          e.currentTarget.classList.remove("opacity-0");
                        }}
                      />
                    </div>
                    <h2 className="text-[18px]">Carport</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Spesification */}
          <section
            id="about-samitra-ecovillage"
            className="w-full px-24 py-20 grid grid-cols-2 h-full gap-x-12 bg-samitra-graybg text-white relative"
          >
            <div className="w-full flex sticky top-48 h-fit">
              <img
                src={BluePrintHouse}
                alt=""
                className="object-contain max-w-[85%]"
              />
            </div>

            <div className="w-full flex flex-col justify-start gap-y-5 text-samitra-blackfooter">
              <h1 className="text-[30px] font-semibold flex-wrap">
                {dataDetail?.title} - {dataDetail?.type} Spesification
              </h1>

              <div className="flex flex-col gap-y-4 relative">
                {houseSpesification?.map((data, index) => {
                  return (
                    <div
                      key={"spesification" + index}
                      className="w-full flex pl-11 relative"
                    >
                      <div className="flex w-full border-b-[1px] border-gray-400 pb-4 pt-3 justify-between gap-x-8">
                        <h2 className="font-bold text-[18px]">{data?.title}</h2>
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: data?.description,
                          }}
                          className="text-[14px] text-right"
                        />
                      </div>
                      {data?.number && (
                        <div className="absolute rounded-full size-7 flex justify-center items-center bg-samitra-green text-white left-0 top-3">
                          {data?.number}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section
            id="about-samitra-ecovillage"
            className="w-full px-24 py-20 grid grid-cols-2 h-full gap-x-24 bg-white text-samitra-blackcopyright relative"
          >
            {/* Photo Selection */}
            <div className="flex flex-col gap-y-10">
              <div className="flex flex-col gap-y-8">
                <h2 className="font-semibold text-[38px] leading-10">
                  Discover your Future Home, Designed for You
                </h2>
                <p>
                  At Samitra Ecovillage, we believe that a home should do more
                  than just shelter—it should nurture. Rooted in sustainability
                  .{" "}
                </p>
              </div>

              <div className="w-full grid grid-cols-2 gap-x-4 sticky top-48 h-fit gap-y-8">
                <div className="flex flex-col gap-y-2 max-h-[700px]">
                  <div
                    className="relative group overflow-hidden rounded-b-xl cursor-pointer"
                    onClick={() => {
                      setModalPicture({
                        modal: true,
                        selectedImage:
                          dataDetail?.blueprint?.first_floor?.image,
                        title: dataDetail?.blueprint?.first_floor?.title,
                      });
                    }}
                  >
                    <img
                      src={dataDetail?.blueprint?.first_floor?.image}
                      alt=""
                      className="w-full h-full rounded-xl object-cover transition-opacity duration-700 opacity-0"
                      onLoad={(e) => {
                        e.currentTarget.classList.remove("opacity-0");
                      }}
                    />

                    <div
                      className="absolute h-[100px] rounded-b-xl bottom-0 w-full bg-gradient-to-t from-black to-transparent flex gap-x-2 items-center text-white justify-center pt-10
                        translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                    >
                      <AiOutlineZoomIn />
                      Click to Zoom In
                    </div>
                  </div>
                  <h2 className="font-bold">Lantai 1</h2>
                </div>
                <div className="flex flex-col gap-y-2 max-h-[700px]">
                  <div
                    className="relative group overflow-hidden rounded-b-xl cursor-pointer"
                    onClick={() => {
                      setModalPicture({
                        modal: true,
                        selectedImage:
                          dataDetail?.blueprint?.second_floor?.image,
                        title: dataDetail?.blueprint?.second_floor?.title,
                      });
                    }}
                  >
                    <img
                      src={dataDetail?.blueprint?.second_floor?.image}
                      alt=""
                      className="w-full h-full rounded-xl object-cover transition-opacity duration-700 opacity-0"
                      onLoad={(e) => {
                        e.currentTarget.classList.remove("opacity-0");
                      }}
                    />

                    <div
                      className="absolute h-[100px] rounded-b-xl bottom-0 w-full bg-gradient-to-t from-black to-transparent flex gap-x-2 items-center text-white justify-center pt-10
                        translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                    >
                      <AiOutlineZoomIn />
                      Click to Zoom In
                    </div>
                  </div>
                  <h2 className="font-bold">Lantai 2</h2>
                </div>

                <button
                  type="button"
                  className="button-samitra-gray-green text-white flex gap-x-3 items-center w-fit col-span-2"
                  onClick={() => window.open(virtualTour, "__blank")}
                >
                  <img src={IconsVirtualTourWhite} alt="" className="h-6" />
                  Take a Virtual Tour
                </button>
              </div>
            </div>

            {/* Photo Selection */}
            <div className="flex flex-col gap-y-5">
              <div className="w-full flex flex-col gap-y-5">
                <h2 className="font-bold text-[18px] pb-4 border-b-[1px] border-gray-400">
                  Eksterior
                </h2>

                <div className="w-full grid grid-cols-3 gap-3">
                  {dataDetail?.eksterior?.map((data, index) => {
                    return (
                      <div
                        key={"eksterior-images" + index}
                        className="relative group overflow-hidden rounded-b-xl cursor-pointer h-[10rem]"
                        onClick={() => {
                          setModalPicture({
                            modal: true,
                            selectedImage: data?.image,
                            title: data?.title,
                          });
                        }}
                      >
                        <img
                          src={data?.image}
                          alt=""
                          className="w-full h-full rounded-xl object-cover transition-opacity duration-700 opacity-0"
                          onLoad={(e) => {
                            e.currentTarget.classList.remove("opacity-0");
                            e.currentTarget.previousSibling.remove();
                          }}
                        />

                        <div
                          className="absolute h-[100px] rounded-b-xl bottom-0 w-full bg-gradient-to-t from-black to-transparent flex gap-x-2 items-center text-white justify-center pt-10 text-[14px]
                        translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                        >
                          <AiOutlineZoomIn />
                          Click to Zoom In
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-5">
                <h2 className="font-bold text-[18px] pb-4 border-b-[1px] border-gray-400">
                  Interior
                </h2>

                <div className="w-full grid grid-cols-3 gap-3">
                  {dataDetail?.interior?.map((data, index) => {
                    return (
                      <div
                        key={"interior-images" + index}
                        className="relative group overflow-hidden rounded-b-xl cursor-pointer h-[10rem]"
                        onClick={() => {
                          setModalPicture({
                            modal: true,
                            selectedImage: data?.image,
                            title: data?.title,
                          });
                        }}
                      >
                        <img
                          src={data?.image}
                          alt=""
                          className="w-full h-full rounded-xl object-cover transition-opacity duration-700 opacity-0"
                          onLoad={(e) => {
                            e.currentTarget.classList.remove("opacity-0");
                            e.currentTarget.previousSibling.remove();
                          }}
                        />

                        <div
                          className="absolute h-[100px] rounded-b-xl bottom-0 w-full bg-gradient-to-t from-black to-transparent flex gap-x-2 items-center text-white justify-center pt-10 text-[14px]
                        translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                        >
                          <AiOutlineZoomIn />
                          Click to Zoom In
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

      <ModalShowPicture
        modalPicture={modalPicture}
        setModalPicture={setModalPicture}
      />

      <MobileHouseTypeDetail />
    </>
  );
};

export default HouseTypeDetail;
