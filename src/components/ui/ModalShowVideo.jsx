import { Dialog } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalVideo } from "../../stores/mainSlices";

const ModalShowVideo = () => {
  const dispatch = useDispatch();
  const { modalShowVideo } = useSelector((state) => state.main);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 720px)");
    const handler = () => setIsDesktop(mediaQuery.matches);
    handler();
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Dialog
      open={modalShowVideo}
      handler={() => dispatch(setModalVideo(false))}
      size="xs"
      className="flex items-center justify-center w-fit bg-transparent h-[300px]"
    >
      <div className="p-3 bg-ang-prm-black rounded-3xl">
        <iframe
          src="https://drive.google.com/file/d/1UpC9plu25Zwx4TMTjfG_MVgc7Rek2j6j/preview"
          width={isDesktop ? "720" : "350"}
          height="405"
          allowFullScreen
          className="rounded-3xl"
          tabIndex="-1"
        />
      </div>
    </Dialog>
  );
};

export default ModalShowVideo;
