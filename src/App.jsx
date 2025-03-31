import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./features/home/pages/HomePage";
import About from "./features/about/pages/About";
import HouseType from "./features/housetype/pages/HouseType";
import HouseTypeDetail from "./features/housetype/pages/HouseTypeDetail";
import NewsAndEvent from "./features/newsandevent/pages/NewsAndEvent";
import NewsAndEventDetail from "./features/newsandevent/pages/NewsAndEventDetail";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  const mainRouter = createBrowserRouter([
    {
      element: <HomePage />,
      path: "/*",
    },
    {
      element: <About />,
      path: "/about/",
    },
    {
      element: <HouseType />,
      path: "/house-type/",
    },
    {
      element: <HouseTypeDetail />,
      path: "/house-type/:slug",
    },
    {
      element: <NewsAndEvent />,
      path: "/news-and-event/",
    },
    {
      element: <NewsAndEventDetail />,
      path: "/news-and-event/:slug",
    },
    {
      element: <Location />,
      path: "/location/",
    },
  ]);

  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
}

export default App;
