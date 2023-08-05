import { createContext, useState, useEffect, useRef } from "react";
import ArrowBtn from "@/components/UI/Button/ArrowBtn";
import { theme } from "./theme";
import Container from "@/components/Layout/Container/Container";
import { useRouter } from "next/router";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // States
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [stage, setStage] = useState(1);
  const stages = 4;
  const stageItems = Array.from({ length: stages }, (_, index) => index + 1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRendered, setIsModalRendered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  ////////// URL HANDLER ////////////

  // Change URL based on stage
  const router = useRouter();
  const isFirstRender = useRef(true);
  let path = router.asPath;

  useEffect(() => {
    if (!isMobile) {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      if (stage === 1) {
        window.location.hash = "";
        return;
      }
      if (stage === 2) {
        window.location.hash = "about";
        return;
      }
      if (stage === 3) {
        window.location.hash = "portfolio";
        return;
      }
      if (stage === 4) {
        window.location.hash = "contact";
        return;
      }
    }
  });

  // Scroll the page after refresh
  useEffect(() => {
    if (path === "/#about") {
      setStage(2);
    }
    if (path === "/#portfolio") {
      setStage(3);
    }
    if (path === "/#contact") {
      setStage(4);
    }
  }, [path]);

  // Detect screen size to handle responsivness
  useEffect(() => {
    const phoneBreakpoint = parseInt(theme.breakpoints.md, 10);
    const tabletBreakpoint = parseInt(theme.breakpoints.lg, 10);

    const handleResize = () => {
      if (window.innerWidth < phoneBreakpoint) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }

      if (window.innerWidth < tabletBreakpoint) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
    };

    // Initial screen size check
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme.breakpoints.md]);

  //_______________________________

  // NAVIGATE THE PAGE

  // Debounce function to prevent bugs with changing stages too fast
  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  // KEYBOARD NAVIGATION
  useEffect(() => {
    const keyHandler = debounce((e) => {
      const tabIndex = e.target.tabIndex;

      if (isModalRendered === true || isFocused === true) {
        return;
      }

      switch (e.key) {
        // Arrows navigation
        case "ArrowLeft":
          if (stage > 1) {
            setStage(stage - 1);
          }
          break;
        case "ArrowRight":
          if (stage < stages) {
            setStage(stage + 1);
          }
          break;

        // Tab navigation
        case "Tab":
          if (stage === 1) {
            if (tabIndex > 5) {
              e.preventDefault();
              setStage(2);
            }
          }
          if (stage === 2) {
            if (tabIndex > 7) {
              e.preventDefault();
              setStage(3);
            }
          }
          if (stage === 3) {
            if (tabIndex > 9) {
              e.preventDefault();
              setStage(4);
            }
          }
          if (stage === 4) {
            if (tabIndex > 15) {
              e.preventDefault();
              setStage(1);
            }
          }
      }
    }, 200);
    window.onkeydown = keyHandler;

    return () => {
      window.onkeydown = null;
    };
  }, [isModalRendered, isFocused, stage, stages]);

  // MOUSE NAVIGATION
  useEffect(() => {
    const handleWheel = debounce((e) => {
      const deltaY = e.deltaY;

      if (!isModalRendered && !isMobile) {
        if (deltaY < 0 && stage > 1) {
          setStage(stage - 1);
        } else if (deltaY > 0 && stage < stages) {
          setStage(stage + 1);
        }
      }
    }, 100);

    window.onwheel = handleWheel;
  });

  //_____________________________________
  // COSMETICS

  // Mouse move event handler
  const [mouseHomeCoord, setMouseHomeCoords] = useState({ x: 0, y: 0 });
  const [mouseContactCoord, setMouseContactCoords] = useState({ x: 0, y: 0 });

  // Home mouse handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (stage === 1) {
        setMouseHomeCoords({ x: e.clientX, y: e.clientY });
      }
    };

    if (stage === 1) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [stage]);

  // Contact mouse handler
  useEffect(() => {
    const handleContactMove = (e) => {
      if (stage === 4) {
        setMouseContactCoords({ x: e.clientX, y: e.clientY });
      }
    };

    if (stage === 4) {
      window.addEventListener("mousemove", handleContactMove);
    } else {
      window.removeEventListener("mousemove", handleContactMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleContactMove);
    };
  }, [stage]);

  //__________________________

  // PORTFOLIO
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <ArrowBtn leftBtn />,
    nextArrow: <ArrowBtn rightBtn />,
    infinite: true,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "0",
    autoplay: false,
    speed: 500,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    swipe: isTablet ? true : false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Modal Handler
  const modalHandler = () => {
    setIsModalRendered(true);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 200);
  };

  return (
    <AppContext.Provider
      value={{
        isMobile,
        mouseHomeCoord,
        mouseContactCoord,
        stage,
        setStage,
        stages,
        stageItems,
        sliderSettings,
        isModalOpen,
        setIsModalOpen,
        isModalRendered,
        setIsModalRendered,
        isFocused,
        setIsFocused,
        modalHandler,
      }}
    >
      <Container>{children}</Container>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
