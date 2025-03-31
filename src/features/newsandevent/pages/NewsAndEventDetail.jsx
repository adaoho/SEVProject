import { BsArrowUpRight } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SeoHelmet from "../../../components/layout/SeoHelmet";
import Header from "../../../components/ui/Header";
import ContactUs from "../../../components/ui/ContactUs";
import Footer from "../../../components/ui/Footer";
import {
  useFetchPostsDetails,
  useFetchRandomPosts,
} from "../../../stores/mainAction";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { toast } from "sonner";
import CardNews from "../../../components/ui/CardNews";
import { BgHomePage } from "../../home/assets/export-assets";
import ScrollToTop from "../../../hooks/ScrollToTop";
import "../../../assets/styles/wordpress-style.css";

const NewsAndEventDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { data, isLoading, isSuccess } = useFetchPostsDetails(slug);
  const { data: dataOther, isSucess: successOther } = useFetchRandomPosts(5);
  const getOther = dataOther?.filter((data) => data?.slug !== slug);
  const currentUrl = window.location.href;

  const [pdfUrl, setPdfUrl] = useState(null);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast.success("Link copied to clipboard!", {
          position: "bottom-center",
          duration: 3000,
          style: { maxWidth: "80vw", fontSize: "14px", padding: "10px" },
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://content.anagatalaw.com/wp-content/themes/twentytwentyfive/style.css";
    document.head.appendChild(link);
  }, []);

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = {
      year: "numeric",
      month: "long",
      day: "2-digit",
      timeZone: "Asia/Jakarta",
    };
    const formattedDate = date.toLocaleDateString("en-GB", options);

    return formattedDate;
  }

  const ContentWithLineBreaks = ({ htmlContent }) => {
    const contentWithBreaks = htmlContent
      .split("</p>")
      .map((item, index) => {
        return index < htmlContent.split("</p>")?.length - 1
          ? item + "</p>"
          : item + "</p>";
      })
      .join("");

    const contentWithLinks = contentWithBreaks.replace(
      /<a\b([^>]*)>/g,
      '<a $1 class="underline cursor-pointer text-blue-500 break-all">'
    );

    return (
      <div
        className="font-inter leading-[34px] text-[18px] break-words"
        dangerouslySetInnerHTML={{ __html: contentWithLinks }}
      />
    );
  };

  const extractPdfLink = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const link = doc.querySelector("a[href$='.pdf']");
    return link ? link.href : null;
  };

  useEffect(() => {
    if (data) {
      const link = extractPdfLink(data);
      setPdfUrl(link);
    }
  }, [data]);

  return (
    <>
      {isSuccess && (
        <SeoHelmet
          title={data?.at(0)?.title?.rendered}
          description={data?.at(0)?.excerpt?.rendered}
        />
      )}

      <ScrollToTop>
        {isSuccess && (
          <>
            <section
              id="hero-samitra-ecovillage-about-us"
              className="h-[650px] w-screen flex flex-col relative items-center"
            >
              <Header />

              {/* Hero Section */}
              <div className="w-full h-full bg-black/70 z-10 absolute flex flex-col lg:grid lg:grid-cols-2 gap-x-20 gap-y-4 justify-center items-center lg:items-end lg:pt-[5%] md:pt-[15%] pt-[30%] px-8 lg:px-24 py-24">
                <img
                  src={data?.at(0)?.featured_image_url}
                  alt=""
                  className="w-full h-[70%] object-cover rounded-xl"
                />

                <div className="flex flex-col text-white h-[70%] justify-end gap-y-5">
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: data?.at(0)?.title?.rendered,
                    }}
                    className="font-bold text-[32px] lg:text-[40px] text-left leading-[45px] lg:leading-[52px] truncate-threeline"
                  />

                  <div className="flex flex-col gap-x-2 w-full gap-y-3 flex-wrap text-[14px] ">
                    <h1>{formatDate(data?.at(0)?.date)}</h1>
                    <div className="flex gap-x-3">
                      Share on:{" "}
                      <div className="flex gap-x-3 items-center">
                        <FiCopy
                          onClick={handleCopy}
                          className="size-4 cursor-pointer  hover:text-ang-prm-blue transition-all"
                        />
                        <a
                          href={`https://wa.me/?text=${encodeURIComponent(
                            currentUrl
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsWhatsapp className="size-4 hover:text-green-700 transition-all cursor-pointer" />
                        </a>
                        <a
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                            currentUrl
                          )}&title=${encodeURIComponent(
                            "Check this out!"
                          )}&summary=${encodeURIComponent(
                            "Interesting article I found!"
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillLinkedin className="size-5 hover:text-blue-700 transition-all cursor-pointer" />
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            currentUrl
                          )}&text=${encodeURIComponent("Check this out!")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaXTwitter className="size-4 hover:text-gray-900 transition-all cursor-pointer" />
                        </a>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            currentUrl
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillFacebook className="size-5 hover:text-blue-800 transition-all cursor-pointer" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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

            <div className="flex gap-y-2 w-full h-fit pb-[3rem] justify-center items-start bg-white pt-[5%]">
              <div className="flex flex-col px-8 max-w-[820px] gap-y-6 w-full wordpress-content overflow-hidden">
                <ContentWithLineBreaks
                  htmlContent={data?.at(0)?.content?.rendered}
                />

                {data?.at(0)?.acf?.source && (
                  <div
                    onClick={() =>
                      window.open(data?.at(0)?.acf?.source, "_blank")
                    }
                    className="bg-samitra-green text-white rounded-lg px-3 py-1 w-fit flex justify-center items-center gap-x-2 cursor-pointer transition-all z-10 hover:shadow-lg hover:bg-ang-prm-red"
                  >
                    Source of Article
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Other Practice Areas */}
        <section
          id="other-practices-section"
          className="w-full flex bg-samitra-graybg px-8 lg:px-24 h-fit flex-col gap-y-6 pt-14 pb-14 lg:pb-24"
        >
          <div className="flex flex-col gap-y-6 w-full">
            <div className="flex gap-x-4 items-start">
              <div
                onClick={() => navigate("/news-and-event")}
                className="flex gap-x-2 items-center group cursor-pointer transition-all justify-between w-full"
              >
                <h1 className="text-[24px] lg:text-[32px] text-ang-prm-text  ">
                  Other News and <br className="block lg:hidden" /> Events
                </h1>
                <BsArrowUpRight className="size-6 mt-0.5 group-hover:text-ang-prm-red transition-all group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {successOther ? (
            <div className="w-full flex justify-center items-center h-[420px] ">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-8 gap-y-7 lg:gap-y-0 mt-6">
              {getOther?.slice(0, 4)?.map((data, index) => {
                return <CardNews key={"news-and-event" + index} data={data} />;
              })}
            </div>
          )}
        </section>

        <ContactUs />
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default NewsAndEventDetail;
