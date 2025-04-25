import Aos from "aos";
import React, { useEffect, useState } from "react";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import { AiOutlineZoomIn } from "react-icons/ai";
import { BsArrowUpRight, BsFillPlayCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { VirtualTourBanner } from "../../../assets/images/export-assets";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import ModalShowPicture from "../../../components/ui/ModalShowPicture";
import Footer from "../../../components/ui/Footer";
import ContactUs from "../../../components/ui/ContactUs";
import Header from "../../../components/ui/Header";
import {
  listDataHouseType,
  virtualTour,
} from "../../../constant/dataHouseType";
import {
  dataPictureSite,
  facilitiesList,
  listDataFacilities,
  sliderFacilities,
} from "../../../constant/dataFacilities";
import { BgHomePage } from "../assets/export-assets";
import {
  IconsCompassNorth,
  IconsVirtualTourBlack,
  IconsVirtualTourWhite,
} from "../../../assets/icons/export-assets";
import EcoFriendly from "../../../components/ui/EcoFriendly";
import ScrollToTop from "../../../hooks/ScrollToTop";
import MobileHomePage from "./MobileHomePage";
import { distanceToSamitra } from "../../../constant/dataSupport";
import CardNews from "../../../components/ui/CardNews";
import { useFetchAllPost } from "../../../stores/mainAction";
import { dataAboutFirstSection } from "../../../constant/dataAbout";
import { setModalVideo } from "../../../stores/mainSlices";
import LazyLoad from "react-lazyload";

const HomePage = () => {
  const [isHoverVirtualTour, setIsHoverVirtualTour] = useState(false);
  const [isHoverZoom, setIsHoverZoom] = useState(false);
  const [tabSitePlanIndex, setTabSitePlanIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalPicture, setModalPicture] = useState({
    modal: false,
    selectedImage: "",
    title: "",
  });
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  const { data: dataNews, isLoading: isLoadingAllPost } = useFetchAllPost(
    page,
    limit
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const findGalleryImage = listDataFacilities?.find(
    (data) => data?.id === tabSitePlanIndex
  );

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: {
          duration: 1,
          ease: [0.9, -0.02, 0.39, 1],
        },
        opacity: {
          duration: 0.8,
          delay: 0.2,
          ease: [0.9, -0.02, 0.39, 1],
        },
      },
    },
  };

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
      <ScrollToTop>
        <div className="hidden xl:block ">
          <section
            id="hero-samitra-ecovillage"
            className="relative flex flex-col items-center w-screen h-screen"
          >
            <Header />

            {/* Hero Section */}
            <div className="absolute z-10 w-full h-full bg-black/70"></div>

            <div className="fixed inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>

            <img
              data-aos="zoom-out"
              src={BgHomePage}
              alt="homepage-samitra-ecovillage"
              className="absolute object-cover w-full h-full transition-opacity duration-700 opacity-0"
              onLoad={(e) => {
                e.currentTarget.classList.remove("opacity-0");
                e.currentTarget.previousSibling.remove();
              }}
            />

            <div className="flex flex-col z-10 items-start justify-center px-24 overflow-hidden h-full w-full gap-y-9 pt-[7%]">
              <motion.h1
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="text-white font-plusjakarta overflow-hidden text-[2.9rem] h-fit flex flex-col font-medium"
              >
                <motion.div variants={containerVariants}>
                  <motion.div variants={textVariants}>
                    A Better Way of Living,
                  </motion.div>
                  <motion.div variants={textVariants}>
                    Designed for the Future
                  </motion.div>
                </motion.div>
              </motion.h1>

              <div className="flex items-center gap-x-3">
                <motion.button
                  initial={{ y: "50%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "50%", opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                  type="button"
                  onMouseEnter={() => setIsHoverVirtualTour(true)}
                  onMouseLeave={() => setIsHoverVirtualTour(false)}
                  onClick={() => window.open(virtualTour, "__blank")}
                  className="flex items-center justify-center px-4 py-2 transition-colors bg-white gap-x-2 rounded-xl w-fit hover:bg-samitra-green hover:text-white"
                >
                  <img
                    src={
                      isHoverVirtualTour
                        ? IconsVirtualTourWhite
                        : IconsVirtualTourBlack
                    }
                    alt=""
                    className="h-5"
                  />
                  Virtual Tour
                </motion.button>
                <motion.button
                  initial={{ y: "50%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "50%", opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                    ease: "easeInOut",
                  }}
                  type="button"
                  // onClick={() => window.open(virtualTour, "__blank")}
                  onClick={() => dispatch(setModalVideo(true))}
                  className="flex items-center justify-center px-4 py-2 transition-colors bg-white gap-x-2 rounded-xl w-fit hover:bg-samitra-green hover:text-white"
                >
                  <BsFillPlayCircleFill className="size-4" />
                  Play Video
                </motion.button>
              </div>

              {/* Card House Type */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="grid w-full grid-cols-3 mt-2 xl:grid-cols-4 gap-x-6 h-fit"
              >
                {listDataHouseType?.map((data, index) => {
                  return (
                    <motion.div
                      key={"card-house-type" + index}
                      variants={textVariants}
                      className="flex flex-col items-start justify-between w-full p-5 pb-8 text-white transition-colors cursor-pointer bg-samitra-blackgreen h-fit gap-y-4 opacity-60 rounded-xl group hover:bg-samitra-green hover:text-white duration-400"
                      onClick={() => navigate("/house-type/" + data?.slug)}
                    >
                      <img
                        src={data?.thumbnail}
                        alt=""
                        className="h-[70%] w-full object-cover rounded-lg opacity-0"
                        onLoad={(e) => {
                          e.currentTarget.classList.remove("opacity-0");
                        }}
                      />
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col gap-y-1 font-plusjakarta">
                          <h1 className="font-semibold text-[20px] ">
                            {data?.title}
                          </h1>
                          <h1>{data?.type}</h1>
                        </div>
                        <BsArrowUpRight className="size-8" />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          <EcoFriendly />

          {/* About Section */}
          <section
            id="about-samitra-ecovillage"
            className="grid w-full h-full grid-cols-3 px-24 py-20 text-white gap-x-12 bg-samitra-gray"
          >
            <div className="flex flex-col items-start w-full h-full col-span-2 gap-y-7 ">
              <div className="w-full grid grid-cols-3 h-[180px] gap-x-4">
                {dataAboutFirstSection?.map((data, index) => {
                  return (
                    <img
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                      // key={"about-first-section" + index}
                      src={data?.image}
                      alt=""
                      className="w-full h-[11rem] object-cover rounded-xl"
                    />
                  );
                })}
              </div>

              <div className="flex flex-col w-full gap-y-5">
                <h2
                  data-aos="fade-up"
                  className="font-plusjakarta text-[38px] leading-[45px] font-medium"
                >
                  Our Story: Where <br /> Sustainability Meets Home
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="50"
                  className="font-inter text-[14px] text-gray-500 leading-6 max-w-[90%]"
                >
                  At Samitra Ecovillage, we believe that a home should do more
                  than just shelter—it should nurture. Rooted in sustainability
                  and modern innovation, we are redefining community living by
                  harmonizing nature with contemporary comforts.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full h-full">
              <div
                data-aos="fade-up"
                className="bg-gray-300 w-full rounded-xl h-[200px]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.499028196727!2d111.49973337588449!3d-7.629357475448871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf9202af62d3%3A0xe478dc16d3340a2!2sSamitra%20Ecovillage!5e0!3m2!1sid!2sid!4v1741460781755!5m2!1sid!2sid"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale rounded-xl"
                ></iframe>
              </div>

              <div className="flex justify-between w-full py-4 h-fit gap-x-4">
                {distanceToSamitra?.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      key={"distance-samitra" + index}
                      className="flex flex-col gap-y-1"
                    >
                      <h2 className="font-plusjakarta text-[32px] font-medium">
                        {data?.distance}min
                      </h2>
                      <p className="font-inter text-gray-500 text-[14px]">
                        {data?.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="grid w-full grid-cols-2 mt-4 gap-x-2">
                <button
                  data-aos="fade-up"
                  data-aos-delay="100"
                  onClick={() => navigate("/about")}
                  type="button"
                  className="text-white button-samitra-green"
                >
                  About Us
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="150"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/otJGtBza5xvV7qCP8",
                      "__blank"
                    )
                  }
                  type="button"
                  className="text-white button-samitra-outline-white"
                >
                  Go to Location
                </button>
              </div>
            </div>
          </section>

          {/* Site Plan Section */}
          <section
            id="site-plan-samitra-ecovillage"
            className="flex flex-col w-full h-full px-24 pt-20 pb-24 bg-samitra-green gap-y-5"
          >
            <div className="flex flex-col items-center justify-center w-full text-center text-white">
              <h3 data-aos="fade-up" className="font-plusjakarta text-[18px]">
                Site Plan
              </h3>
              <h1
                data-aos="fade-up"
                data-aos-delay="50"
                className="font-medium text-[38px] font-plusjakarta"
              >
                A Visionary Layout for A Better Way of Living
              </h1>
              <p data-aos="fade-up" data-aos-delay="100" className="font-inter">
                A thoughtfully designed master plan that blends modern living
                with nature, creating a sustainable and harmonious community.
              </p>
            </div>

            {/* Site Plan Image */}
            <div data-aos="fade-up" className="relative">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                src={
                  dataPictureSite?.find((data) => data?.id === tabSitePlanIndex)
                    .image
                }
                alt=""
                className="w-full h-full my-12 transition-opacity duration-700 opacity-0 rounded-xl bg-samitra-green"
                onLoad={(e) => {
                  e.currentTarget.classList.remove(
                    "opacity-0",
                    "bg-samitra-green"
                  );
                }}
              />

              <div className="absolute flex items-center justify-center w-full h-fit top-4">
                <img
                  data-aos="zoom-out"
                  data-aos-delay="250"
                  src={IconsCompassNorth}
                  alt="compas-north-icon"
                  className="h-16"
                />
              </div>
            </div>

            <div className="flex w-full overflow-scroll text-white gap-x-12 font-plusjakarta ">
              {listDataFacilities?.map((data, index) => {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    data-aos-offset="-100"
                    key={"facilities" + index}
                    className="relative"
                  >
                    <span
                      key={"Tab Site Plan" + index}
                      onClick={() => setTabSitePlanIndex(data?.id)}
                      className={`flex flex-col gap-y-1 ${
                        tabSitePlanIndex == data?.id
                          ? "text-white font-plusjakarta underline text-[16px]"
                          : "hover-effect-tab opacity-70"
                      }`}
                    >
                      {data?.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="grid items-start w-full h-full grid-cols-4 gap-5 mt-8">
              {findGalleryImage?.gallery?.map((data, index) => {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    data-aos-offset="-100"
                    key={"gallery-images" + index}
                    className="relative overflow-hidden cursor-pointer group rounded-b-xl"
                    onClick={() => {
                      setModalPicture({
                        modal: true,
                        selectedImage: data?.image,
                        title: data?.title,
                      });
                    }}
                  >
                    {/* Skeleton Loader */}
                    <div className="absolute inset-0 flex items-center justify-center animate-pulse rounded-xl"></div>

                    {/* Actual Image */}
                    <img
                      src={data?.image}
                      alt=""
                      className="w-full h-[250px] rounded-xl object-cover transition-opacity duration-700 opacity-0"
                      onLoad={(e) => {
                        e.currentTarget.classList.remove("opacity-0");
                        e.currentTarget.previousSibling.remove();
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
                );
              })}
            </div>

            {findGalleryImage?.slug !== "" && (
              <div
                data-aos="fade-up"
                data-aos-offset="-100"
                className="flex items-center justify-center w-full mt-12"
              >
                <button
                  type="button"
                  className="text-white button-samitra-gray w-fit"
                  onClick={() =>
                    navigate("/house-type/" + findGalleryImage?.slug)
                  }
                >
                  <div className="flex items-center gap-x-12">
                    More About {findGalleryImage?.title}{" "}
                    <BsArrowUpRight className="size-4" />
                  </div>
                </button>
              </div>
            )}
          </section>

          {/* Virtual Tour Section */}
          <section
            id="virtual-tour-section"
            className="h-[390px] w-full relative"
          >
            <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full bg-black/70 gap-y-3">
              <h2
                data-aos="fade-up"
                className="font-plusjakarta font-medium text-[42px] text-white text-center"
              >
                Step Inside. Experience Your <br /> Future Home in 360°
              </h2>
              <button
                data-aos="fade-up"
                data-aos-delay="50"
                type="button"
                className="flex items-center text-white button-samitra-green gap-x-3"
                onClick={() => window.open(virtualTour, "__blank")}
              >
                <img src={IconsVirtualTourWhite} alt="" className="h-6" />
                Take a Virtual Tour
              </button>
            </div>
            <img
              src={VirtualTourBanner}
              alt="samitra-contact"
              className="absolute object-cover w-full h-full opacity-0 blur-lg"
              onLoad={(e) => {
                e.currentTarget.classList.remove("opacity-0", "blur-lg");
              }}
            />
          </section>

          {/* Facilities Section */}
          <section
            id="virtual-tour-section"
            className="h-[839px] w-full relative grid grid-cols-2 bg-samitra-gray px-24 py-32 gap-x-16"
          >
            <div
              data-aos="fade-up"
              className="relative flex w-full h-full overflow-hidden rounded-xl"
            >
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
                slidesPerView={1}
                centeredSlides={true}
                speed={700}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {sliderFacilities.map((data, index) => (
                  <SwiperSlide key={"data-facilities" + index}>
                    <img
                      src={data?.image}
                      alt="photo-dummy"
                      className="object-cover w-full h-full opacity-0 rounded-3xl"
                      onLoad={(e) => {
                        e.currentTarget.classList.remove("opacity-0");
                      }}
                    />
                  </SwiperSlide>
                ))}
                <div className="absolute w-full bg-gradient-to-t z-10 bottom-0 h-[120px] px-8 from-black to-transparent flex justify-between items-center">
                  <div className="px-4 py-2 text-gray-800 bg-white rounded-xl">
                    <h1>
                      {sliderFacilities?.[activeIndex]?.title || "House Type"}
                    </h1>
                  </div>

                  <div className="z-10 flex items-center text-white gap-x-1">
                    <AiFillLeftCircle className="transition-colors cursor-pointer size-11 main-prev hover:text-samitra-green" />
                    <AiFillRightCircle className="transition-colors cursor-pointer size-11 main-next hover:text-samitra-green" />
                  </div>
                </div>
              </Swiper>
            </div>

            <div className="flex flex-col w-full gap-y-16">
              <div className="flex flex-col items-start text-white gap-y-4">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="font-plusjakarta text-[38px] font-semibold"
                >
                  Facilities for a Sustainable & Comfortable Life
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-offset="-50"
                  className="font-inter text-[14px] text-gray-300"
                >
                  Experience a lifestyle where convenience meets sustainability.
                  Every facility at Samitra Ecovillage is designed to support
                  well-being, community, and eco-friendly living.
                </p>
              </div>

              <div className="grid w-full grid-cols-2 text-white gap-x-8 gap-y-10">
                {facilitiesList?.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={index * 150}
                      data-aos-offset="-50"
                      key={"facilitiesList" + index}
                      className="flex items-start gap-x-6"
                    >
                      <img
                        src={data?.icon}
                        alt="gate-samitra-ecovillage"
                        className="object-contain h-16"
                      />
                      <div className="flex flex-col font-plusjakarta">
                        <h2 className="text-[14px]">Facilities</h2>
                        <h1
                          dangerouslySetInnerHTML={{ __html: data?.title }}
                          className="text-[18px] font-semibold"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section
            id="news-and-event-samitra-ecovillage"
            className="flex flex-col w-full h-full px-24 py-20 bg-white gap-y-10"
          >
            <div className="flex flex-col items-start w-full gap-y-1">
              <h2
                data-aos="fade-up"
                data-aos-delay="50"
                className="font-plusjakarta text-[16px]"
              >
                News and Event
              </h2>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                onClick={() => navigate("/news-and-event")}
                className="flex items-center justify-between w-full cursor-pointer group"
              >
                <span className="font-plusjakarta text-[38px] group-hover:text-samitra-green transition-all">
                  Our Latest Updates for You
                </span>
                <BsArrowUpRight className="transition-all size-8 group-hover:text-samitra-green" />
              </div>
            </div>

            <div className="grid items-center w-full grid-cols-3 gap-x-8">
              {dataNews?.posts?.map((data, index) => {
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    key={"news-event" + index}
                    className="relative"
                  >
                    <CardNews data={data} />
                  </div>
                );
              })}
            </div>
          </section>
          <ContactUs />
          <Footer />
        </div>
      </ScrollToTop>

      <ModalShowPicture
        modalPicture={modalPicture}
        setModalPicture={setModalPicture}
      />

      <MobileHomePage />
    </>
  );
};

export default HomePage;
