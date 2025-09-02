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
  const [isLoaded, setIsLoaded] = useState(false);

  // --- BEZPIECZNY SETTER DLA STAGE (KLAMROWANIE 1..4) ---
  const MIN_STAGE = 1;
  const MAX_STAGE = stages;
  const clampStage = (n) => Math.min(MAX_STAGE, Math.max(MIN_STAGE, n));
  const setStageSafe = (next) =>
    setStage((prev) =>
      clampStage(typeof next === "function" ? next(prev) : next)
    );

  ////////// URL HANDLER ////////////

  const router = useRouter();
  const isFirstRender = useRef(true);

  // helper: mapowanie stage -> hash
  const stageToHash = (s) => {
    if (s === 1) return ""; // bez # na Home
    if (s === 2) return "#about";
    if (s === 3) return "#portfolio";
    if (s === 4) return "#contact";
    return "";
  };

  // throttle znaczników historii
  const lastHashWriteAt = useRef(0);

  // ZMIANA URL NA PODSTAWIE STAGE — **JEDYNA ZMIENIONA SEKCJA**
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isMobile) return; // na mobile nie dotykamy hasha

    if (isFirstRender.current) {
      // pomiń 1. render
      isFirstRender.current = false;
      return;
    }

    const nextHash = stageToHash(stage);
    const currentHash = window.location.hash;

    // jeśli nic się nie zmienia — wyjdź
    if (currentHash === nextHash) return;

    // prosty throttle (>=200 ms)
    const now = Date.now();
    if (now - lastHashWriteAt.current < 200) return;

    try {
      const base = window.location.pathname + window.location.search;
      history.replaceState(null, "", base + nextHash);
      lastHashWriteAt.current = now;
    } catch (err) {
      // zabezpieczenie przed "The operation is insecure"
      console.warn("Hash update skipped:", err);
    }
  }, [stage, isMobile]);
  // --------- KONIEC ZMIENIONEJ SEKCJI ---------

  // Scroll the page after refresh
  const path = router.asPath;
  useEffect(() => {
    if (path === "/#about") {
      setStageSafe(2);
    }
    if (path === "/#portfolio") {
      setStageSafe(3);
    }
    if (path === "/#contact") {
      setStageSafe(4);
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
            setStageSafe((s) => s - 1);
          }
          break;
        case "ArrowRight":
          if (stage < stages) {
            setStageSafe((s) => s + 1);
          }
          break;

        // Tab navigation
        case "Tab":
          if (stage === 1) {
            if (tabIndex === 6) {
              e.preventDefault();
              setStageSafe(2);
            }
          }
          if (stage === 2) {
            if (tabIndex === 8) {
              e.preventDefault();
              setStageSafe(3);
            }
          }
          if (stage === 3) {
            if (tabIndex === 10) {
              e.preventDefault();
              setStageSafe(4);
            }
          }
          if (stage === 4) {
            if (tabIndex === 17) {
              e.preventDefault();
              setStageSafe(1);
            }
          }
      }
    }, 400);
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
          setStageSafe((s) => s - 1);
        } else if (deltaY > 0 && stage < stages) {
          setStageSafe((s) => s + 1);
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
    centerMode: isMobile ? true : false,
    centerPadding: "0",
    autoplay: isMobile ? true : false,
    autoplaySpeed: 8000,
    speed: isMobile ? 1500 : 500,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    swipe: isTablet ? true : false,
    // lazyLoad: true,
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
        setStage: setStageSafe, // wystawiamy bezpieczny setter
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
