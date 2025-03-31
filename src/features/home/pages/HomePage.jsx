import Aos from "aos";
import React, { useEffect, useState } from "react";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import { AiOutlineZoomIn } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
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
import useWindowHeight from "../../../hooks/useWindowHeight";
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
import {
  BgHomePage,
  DummyPicture,
  OurStory1,
  OurStory2,
  OurStory3,
} from "../assets/export-assets";
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
  const windowHeight = useWindowHeight();
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
        <div className="hidden xl:block">
          <section
            id="hero-samitra-ecovillage"
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

              <motion.button
                initial={{ y: "50%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "50%", opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                type="button"
                onMouseEnter={() => setIsHoverVirtualTour(true)}
                onMouseLeave={() => setIsHoverVirtualTour(false)}
                onClick={() => window.open(virtualTour, "__blank")}
                className="flex justify-center gap-x-2 items-center px-4 py-2 bg-white rounded-xl w-fit hover:bg-samitra-green hover:text-white transition-colors"
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
                Take a Virtual Tour
              </motion.button>

              {/* Card House Type */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="w-full grid grid-cols-3 xl:grid-cols-4 mt-2 gap-x-6 h-fit"
              >
                {listDataHouseType?.map((data, index) => {
                  return (
                    <motion.div
                      key={"card-house-type" + index}
                      variants={textVariants}
                      className="w-full bg-samitra-blackgreen h-fit flex flex-col gap-y-4 justify-between items-start p-5 pb-8 opacity-60 rounded-xl text-white group hover:bg-samitra-green group hover:text-white transition-colors cursor-pointer duration-400"
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
                      <div className="w-full flex justify-between items-center">
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
            className="w-full px-24 py-20 grid grid-cols-3 h-full gap-x-12 bg-samitra-gray text-white"
          >
            <div className="flex flex-col col-span-2 h-full w-full gap-y-7 items-start ">
              <div className="w-full grid grid-cols-3 h-[180px] gap-x-4">
                {dataAboutFirstSection?.map((data, index) => {
                  return (
                    <img
                      key={"about-first-section" + index}
                      src={data?.image}
                      alt=""
                      className="w-full h-[11rem] object-cover rounded-xl"
                    />
                  );
                })}
              </div>

              <div className="flex flex-col gap-y-5 w-full">
                <h2 className="font-plusjakarta text-[38px] leading-[45px] font-medium">
                  Our Story: Where <br /> Sustainability Meets Home
                </h2>
                <p className="font-inter text-[14px] text-gray-500 leading-6 max-w-[90%]">
                  At Samitra Ecovillage, we believe that a home should do more
                  than just shelter—it should nurture. Rooted in sustainability
                  and modern innovation, we are redefining community living by
                  harmonizing nature with contemporary comforts.{" "}
                </p>
              </div>
            </div>
            <div className="flex h-full w-full flex-col">
              <div className="bg-gray-300 w-full rounded-xl h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.499028196727!2d111.49973337588449!3d-7.629357475448871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf9202af62d3%3A0xe478dc16d3340a2!2sSamitra%20Ecovillage!5e0!3m2!1sid!2sid!4v1741460781755!5m2!1sid!2sid"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale rounded-xl"
                ></iframe>
              </div>

              <div className="w-full flex justify-between h-fit py-4 gap-x-4">
                {distanceToSamitra?.map((data, index) => {
                  return (
                    <div
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

              <div className="w-full grid grid-cols-2 gap-x-2 mt-4">
                <button
                  onClick={() => navigate("/about")}
                  type="button"
                  className="button-samitra-green text-white"
                >
                  About Us
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/otJGtBza5xvV7qCP8",
                      "__blank"
                    )
                  }
                  type="button"
                  className="button-samitra-outline-white text-white"
                >
                  Go to Location
                </button>
              </div>
            </div>
          </section>

          {/* Site Plan Section */}
          <section
            id="site-plan-samitra-ecovillage"
            className="w-full px-24 pt-20 flex flex-col h-full bg-samitra-green gap-y-5 pb-24"
          >
            <div className="w-full flex justify-center items-center flex-col text-center text-white">
              <h3 className="font-plusjakarta text-[18px]">Site Plan</h3>
              <h1 className="font-medium text-[38px] font-plusjakarta">
                A Visionary Layout for A Better Way of Living
              </h1>
              <p className="font-inter">
                A thoughtfully designed master plan that blends modern living
                with nature, creating a sustainable and harmonious community.
              </p>
            </div>

            {/* Site Plan Image */}
            <div className="relative">
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
                className="w-full rounded-xl h-full my-12 transition-opacity duration-700 opacity-0 bg-samitra-green"
                onLoad={(e) => {
                  e.currentTarget.classList.remove(
                    "opacity-0",
                    "bg-samitra-green"
                  );
                }}
              />

              <div className="w-full absolute justify-center items-center h-fit top-4 flex">
                <img
                  src={IconsCompassNorth}
                  alt="compas-north-icon"
                  className="h-16"
                />
              </div>
            </div>

            <div className="w-full overflow-scroll flex gap-x-12 font-plusjakarta text-white ">
              {listDataFacilities?.map((data, index) => {
                return (
                  <div key={"facilities" + index} className="relative">
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

            <div className="grid grid-cols-4 w-full items-start h-full gap-5 mt-8">
              {findGalleryImage?.gallery?.map((data, index) => {
                return (
                  <div
                    key={"gallery-images" + index}
                    className="relative group overflow-hidden rounded-b-xl cursor-pointer"
                    onClick={() => {
                      setModalPicture({
                        modal: true,
                        selectedImage: data?.image,
                        title: data?.title,
                      });
                    }}
                  >
                    {/* Skeleton Loader */}
                    <div className="absolute inset-0 animate-pulse rounded-xl flex justify-center items-center"></div>

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
              <div className="w-full flex justify-center items-center mt-12">
                <button
                  type="button"
                  className="button-samitra-gray text-white w-fit"
                  onClick={() =>
                    navigate("/house-type/" + findGalleryImage?.slug)
                  }
                >
                  <div className="flex gap-x-12 items-center">
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
            <div className="bg-black/70 absolute w-full h-full z-10 flex justify-center items-center flex-col gap-y-3">
              <h2 className="font-plusjakarta font-medium text-[42px] text-white text-center">
                Step Inside. Experience Your <br /> Future Home in 360°
              </h2>
              <button
                type="button"
                className="button-samitra-green text-white flex gap-x-3 items-center"
                onClick={() => window.open(virtualTour, "__blank")}
              >
                <img src={IconsVirtualTourWhite} alt="" className="h-6" />
                Take a Virtual Tour
              </button>
            </div>
            <img
              src={VirtualTourBanner}
              alt="samitra-contact"
              className="object-cover h-full w-full absolute opacity-0 blur-lg"
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
            <div className="relative w-full h-full rounded-xl overflow-hidden flex">
              {/* <div className="relative w-full h-full"> */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.autoplay.start();
                  }, 100);
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                navigation={{
                  prevEl: ".main-prev",
                  nextEl: ".main-next",
                }}
                className="relative rounded-3xl"
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}
                speed={1000}
                loop={sliderFacilities.length > 1}
                loopAdditionalSlides={sliderFacilities.length}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                observer={true}
                observeParents={true}
              >
                {sliderFacilities.map((data, index) => (
                  <SwiperSlide key={"data-facilities" + index}>
                    <img
                      src={data?.image}
                      alt="photo-dummy"
                      className="w-full h-full object-cover rounded-3xl opacity-0"
                      onLoad={(e) => {
                        e.currentTarget.classList.remove("opacity-0");
                      }}
                    />
                  </SwiperSlide>
                ))}
                <div className="absolute w-full bg-gradient-to-t z-10 bottom-0 h-[120px] px-8 from-black to-transparent flex justify-between items-center">
                  <div className="px-4 py-2 rounded-xl bg-white text-gray-800">
                    <h1>
                      {sliderFacilities?.[activeIndex]?.title || "House Type"}
                    </h1>
                  </div>

                  <div className="flex gap-x-1 items-center text-white z-10">
                    <AiFillLeftCircle className="size-11 main-prev cursor-pointer transition-colors hover:text-samitra-green" />
                    <AiFillRightCircle className="size-11 main-next cursor-pointer transition-colors hover:text-samitra-green" />
                  </div>
                </div>
              </Swiper>
            </div>

            <div className="w-full flex flex-col gap-y-16">
              <div className="flex flex-col gap-y-4 text-white items-start">
                <h1 className="font-plusjakarta text-[38px] font-semibold">
                  Facilities for a Sustainable & Comfortable Life
                </h1>
                <p className="font-inter text-[14px] text-gray-300">
                  Experience a lifestyle where convenience meets sustainability.
                  Every facility at Samitra Ecovillage is designed to support
                  well-being, community, and eco-friendly living.
                </p>
              </div>

              <div className="w-full grid grid-cols-2 gap-x-8 gap-y-10 text-white">
                {facilitiesList?.map((data, index) => {
                  return (
                    <div
                      key={"facilitiesList" + index}
                      className="flex gap-x-6 items-start"
                    >
                      <img
                        src={data?.icon}
                        alt="gate-samitra-ecovillage"
                        className="h-16 object-contain"
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
            className="bg-white w-full px-24 py-20 flex flex-col gap-y-10 h-full"
          >
            <div className="flex flex-col gap-y-1 items-start w-full">
              <h2 className="font-plusjakarta text-[16px]">News and Event</h2>
              <div
                onClick={() => navigate("/news-and-event")}
                className="w-full flex justify-between items-center group cursor-pointer"
              >
                <span className="font-plusjakarta text-[38px] group-hover:text-samitra-green transition-all">
                  Our Latest Updates for You
                </span>
                <BsArrowUpRight className="size-8 group-hover:text-samitra-green transition-all" />
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-x-8 items-center">
              {dataNews?.posts?.map((data, index) => {
                return <CardNews key={"news-event" + index} data={data} />;
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
