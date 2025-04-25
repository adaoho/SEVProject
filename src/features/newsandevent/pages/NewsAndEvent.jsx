import React, { useState } from "react";
import Header from "../../../components/ui/Header";
import Footer from "../../../components/ui/Footer";
import ContactUs from "../../../components/ui/ContactUs";
import PaginationPage from "../../../components/ui/PaginationPage";
import ScrollToTop from "../../../hooks/ScrollToTop";
import { BgHomePage } from "../../home/assets/export-assets";
import { useNavigate } from "react-router-dom";
import CardNews from "../../../components/ui/CardNews";
import { useFetchAllPost } from "../../../stores/mainAction";
import MobileNewsAndEvent from "./MobileNewsAndEvent";

const NewsAndEvent = () => {
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
        <div className="hidden xl:block ">
          <section
            id="hero-samitra-ecovillage-about-us"
            className="h-[400px] w-screen flex flex-col relative items-center"
          >
            <Header />

            {/* Hero Section */}
            <div className="w-full h-full bg-black/70 z-10 absolute flex justify-center items-center pt-[5%]">
              <h1
                data-aos="fade-up"
                className="text-white font-bold text-[62px]"
              >
                News & Event
              </h1>
            </div>

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
          </section>

          <section
            id="news-and-event-samitra-ecovillage"
            className="grid w-full grid-cols-3 gap-12 px-24 pt-32 pb-20 bg-white"
          >
            {isLoadingAllPost ? (
              <>
                <div className="grid w-full col-span-3">
                  <div className="flex items-start justify-center w-full h-96">
                    <div className="loader"></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {dataNews?.posts?.map((data, index) => {
                  return <CardNews key={"news" + index} data={data} />;
                })}

                <div className="grid items-center justify-center w-full col-span-3 h-fit mt-14">
                  {dataNews?.totalPosts > 18 && (
                    <PaginationPage
                      active={page}
                      setActive={setPage}
                      totalPages={dataNews?.totalPages || 1}
                    />
                  )}
                </div>
              </>
            )}
          </section>

          <ContactUs />
          <Footer />
        </div>
      </ScrollToTop>

      <MobileNewsAndEvent />
    </>
  );
};

export default NewsAndEvent;
