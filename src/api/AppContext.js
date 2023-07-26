import { createContext, useState, useEffect } from "react";
import ArrowBtn from "@/components/UI/Button/ArrowBtn";
import { theme } from "./theme";
import Container from "@/components/Layout/Container/Container";

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

  // Detect screen size
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

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme.breakpoints.md]);

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

  // Nav handlers
  useEffect(() => {
    const keyHandler = (e) => {
      if (isModalRendered === true || isFocused === true) {
        return;
      }

      switch (e.keyCode) {
        case 37:
          if (stage > 1) {
            setStage(stage - 1);
          }
          break;
        case 39:
          if (stage < stages) {
            setStage(stage + 1);
          }
          break;
      }
    };

    window.onkeydown = keyHandler;

    return () => {
      window.onkeydown = null;
    };
  }, [isModalRendered, isFocused, stage, stages]);

  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

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
    autoplay: isModalRendered ? false : true,
    speed: 2000,
    autoplaySpeed: 3000,
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
