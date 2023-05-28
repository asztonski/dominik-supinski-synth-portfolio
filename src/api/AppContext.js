import { createContext, useState, useEffect } from "react";
import ArrowBtn from "@/components/UI/Button/ArrowBtn";
import { theme } from "./theme";
import Container from "@/components/Layout/Container/Container";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true);
  const [stage, setStage] = useState(1);
  const stages = 4;
  const stageItems = Array.from({ length: stages }, (_, index) => index + 1);
  const [isModalRendered, setIsModalRendered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Detect screen size

  useEffect(() => {
    const breakpoint = parseInt(theme.breakpoints.md, 10);

    const handleResize = () => {
      if (window.innerWidth < breakpoint) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
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

  // Home logo handler

  const [mouseCoord, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (stage === 1) {
        setMouseCoords({ x: e.clientX, y: e.clientY });
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

      if (!isModalRendered) {
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

  return (
    <AppContext.Provider
      value={{
        isMobile,
        mouseCoord,
        stage,
        setStage,
        stages,
        stageItems,
        sliderSettings,
        isModalRendered,
        setIsModalRendered,
        isFocused,
        setIsFocused,
      }}
    >
      <Container>{children}</Container>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
