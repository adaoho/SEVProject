import React from "react";
import { DummyPicture } from "../../features/home/assets/export-assets";
import { useNavigate } from "react-router-dom";

const CardNews = ({ data }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <>
      <div className="w-full hidden lg:flex flex-col gap-y-5 min-h-[460px]">
        <img
          src={data?.featured_image_url}
          alt=""
          className="h-[250px] w-full rounded-xl object-cover"
        />

        <div className="flex flex-col gap-y-3 flex-1 justify-center">
          <h4 className="text-[14px] text-gray-500 font-inter">
            {formatDate(data?.date)}
          </h4>
          <h1
            dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}
            className="font-plusjakarta text-[24px] font-semibold truncate-twoline"
          />
        </div>

        <p
          dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered }}
          className="font-inter text-[14px] text-gray-600 truncate-twoline"
        />

        <button
          type="button"
          className="button-samitra-green text-white w-fit mt-2"
          onClick={() => navigate("/news-and-event/" + data?.slug)}
        >
          Read More
        </button>
      </div>

      <div className="w-full flex lg:hidden gap-y-5 gap-x-4 h-[120px]">
        <img
          src={data?.featured_image_url}
          alt=""
          className="h-full w-[100px] rounded-xl object-cover"
        />

        <div className="flex flex-col gap-y-1 gap-x-4 items-start h-full">
          <h4 className="text-[12px] text-gray-500 font-inter">
            {formatDate(data?.date)}
          </h4>
          <h1
            dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}
            className="font-plusjakarta text-[16px] font-semibold truncate-twoline"
          />

          {/* <p
            dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered }}
            className="font-inter text-[12px] text-gray-600 truncate-twoline"
          /> */}

          <button
            type="button"
            className="button-samitra-green text-white w-fit mt-2 text-[12px]"
            onClick={() => navigate("/news-and-event/" + data?.slug)}
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default CardNews;
