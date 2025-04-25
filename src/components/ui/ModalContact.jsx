import { BiChevronLeft } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgSoftwareDownload } from "react-icons/cg";
import { Button, Dialog } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalContact } from "../../stores/mainSlices";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { dataMarketing, urlBrochure } from "../../constant/dataSupport";

const ModalContact = () => {
  const dispatch = useDispatch();
  const { modalContact } = useSelector((state) => state.main);
  const [selectedMarketing, setSelectedMarketing] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [nameUser, setNameUser] = useState("");

  const CardMarketing = ({ data }) => {
    return (
      <div
        onClick={() => setSelectedMarketing(data?.id)}
        className={`group flex flex-col items-center w-full gap-y-3 h-[270px] p-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer ${
          selectedMarketing === data?.id
            ? "bg-samitra-green/10 border-samitra-green border-[1px]"
            : "bg-white border-[1px] border-white hover:bg-samitra-green/10"
        }`}
      >
        <img
          src={data?.image}
          alt=""
          className="size-[180px] rounded-lg object-cover"
        />
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[16px] font-semibold">{data?.name}</h2>
          <div className="flex items-center font-normal gap-x-1">
            <FaWhatsapp className="size-3" />
            <h2 className="text-[13px]">+{data?.phone}</h2>
          </div>
        </div>
      </div>
    );
  };

  const onCloseHandler = () => {
    dispatch(setModalContact(false));
    setSelectedMarketing(null);
    setCurrentPage(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameUser.trim()) {
      const message = encodeURIComponent(
        `Hallo saya ${nameUser}, bolehkah saya mengetahui Samitra Ecovillage lebih lanjut?`
      );
      const phoneNumber = selectedMarketing
        ? dataMarketing[selectedMarketing - 1]?.phone
        : "6285736207240";
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappURL, "_blank");
    }
  };

  return (
    <Dialog
      children
      open={modalContact}
      handler={onCloseHandler}
      size="lg"
      className="relative z-50 xl:flex flex-col items-center justify-center p-8 font-sans bg-white gap-y-10 min-w-[500px] hidden"
    >
      <AiFillCloseCircle
        className="absolute text-gray-500 transition-all bg-white rounded-full cursor-pointer -right-3 size-10 -top-3 hover:text-samitra-green"
        onClick={onCloseHandler}
      />

      <div className="flex flex-col text-center">
        <h1 className="text-black text-[32px] font-semibold">
          You’re almost there
        </h1>
        <h1 className="text-black text-[14px] font-inter">
          Select Your Marketing Team and Get Talking
        </h1>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col items-center w-full gap-y-6"
        >
          {currentPage === 1 ? (
            <>
              <div className="grid grid-cols-4 gap-x-3">
                {dataMarketing.map((data, index) => (
                  <CardMarketing key={"marketing" + index} data={data} />
                ))}
              </div>

              <Button
                children
                className="flex items-center w-32 h-10 button-green gap-x-1"
                type="submit"
                disabled={selectedMarketing === null}
                onClick={() => setCurrentPage(2)}
              >
                Next
              </Button>
            </>
          ) : currentPage === 2 ? (
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col items-center w-[80%] h-full gap-y-6 -mt-3"
            >
              <div className="flex flex-col items-start w-full font-normal gap-y-1">
                <h1>Full Name</h1>
                <input
                  value={nameUser}
                  onChange={(e) => setNameUser(e.target.value)}
                  className="w-full h-full py-2 pl-4 pr-3 text-black
                   transition duration-300 bg-transparent border-[1px] border-gray-200 rounded-lg shadow-sm placeholder:opacity-70 text-slate-700 text-md ease focus:outline-none focus:border-samitra-green focus:border-[1px] hover:border-slate-300 focus:shadow "
                  placeholder="Type your name ..."
                />
              </div>

              <div className="flex justify-between w-full">
                {/* Back Button */}
                <div
                  onClick={() => {
                    setCurrentPage(1);
                    setNameUser("");
                  }}
                  className="flex items-center mb-2 -ml-2 font-normal text-gray-500 transition-all cursor-pointer gap-x-1 w-fit hover:text-samitra-green"
                >
                  <BiChevronLeft className="size-6" />
                  Back
                </div>

                <Button
                  children
                  className="flex items-center h-10 w-fit button-green gap-x-1"
                  type="submit"
                  disabled={nameUser?.split("")?.length < 3}
                >
                  <FaWhatsapp />
                  Chat Right Now
                </Button>

                <div className="w-10"></div>
              </div>
            </form>
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="h-[1px] w-full border-b-[1px] border-dashed border-gray-500"></div>

      <div
        onClick={() => window.open(urlBrochure, "__blank")}
        className="flex items-center justify-center w-full font-light text-black transition-all duration-300 ease-in-out cursor-pointer h-fit gap-x-3 hover:text-samitra-green"
      >
        <CgSoftwareDownload className="size-5" />
        <h2 className="font-inter text-[14px]">
          You can also download our brochure here
        </h2>
      </div>
    </Dialog>
  );
};

export default ModalContact;
