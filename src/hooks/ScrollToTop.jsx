import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     lerp: 0.1,
  //     wheelMultiplier: 1,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy(); // Cleanup on unmount
  //   };
  // }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0 });
    setTimeout(() => {
      html.style.scrollBehavior = "";
    }, 100);
  }, [pathname]);

  return <div className="overflow-hidden">{children}</div>;
};

export default ScrollToTop;
