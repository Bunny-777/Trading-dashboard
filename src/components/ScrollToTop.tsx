import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Try scrolling the window
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // If Dashboard has a scrollable div, scroll that too
    const container = document.getElementById("main-content");
    if (container) {
      container.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
