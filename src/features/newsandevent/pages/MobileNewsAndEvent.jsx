import React, { useState } from "react";
import Header from "../../../components/ui/Header";
import Footer from "../../../components/ui/Footer";
import ContactUs from "../../../components/ui/ContactUs";
import PaginationPage from "../../../components/ui/PaginationPage";
import ScrollToTop from "../../../hooks/ScrollToTop";
import { BgHomePage } from "../../home/assets/export-assets";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import CardNews from "../../../components/ui/CardNews";
import { useFetchAllPost } from "../../../stores/mainAction";

const MobileNewsAndEvent = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(18);

  const { data: dataNews, isLoading: isLoadingAllPost } = useFetchAllPost(
    page,
    limit
  );

  return (
    <>
      <ScrollToTop>
        <div className="block xl:hidden ">
          <section
            id="hero-samitra-ecovillage-about-us"
            className="h-[280px] w-screen flex flex-col relative items-center"
          >
            <Header />

            {/* Hero Section */}
            <div className="w-full h-full bg-black/70 z-10 absolute flex justify-center items-center pt-[10%]">
              <h1 className="text-[32px] font-bold text-white">
                News and Event
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
            id="news-and-event-samitra-ecovillage"
            className="bg-white px-8 w-full flex flex-col py-10 gap-12"
          >
            {isLoadingAllPost ? (
              <>
                <div className="grid col-span-3 w-full mt-20">
                  <div className="w-full flex justify-center items-start h-96">
                    <div className="loader"></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {dataNews?.posts?.map((data, index) => {
                  return <CardNews key={"news" + index} data={data} />;
                })}

                <div className="w-full grid justify-center items-center h-fit col-span-3 my-5">
                  <PaginationPage
                    active={page}
                    setActive={setPage}
                    totalPages={dataNews?.totalPages || 1}
                  />
                </div>
              </>
            )}
          </section>

          <ContactUs />
          <Footer />
        </div>
      </ScrollToTop>
    </>
  );
};

export default MobileNewsAndEvent;
