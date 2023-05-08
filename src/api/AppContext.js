import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [stage, setStage] = useState(1);
  const stages = [1, 2, 3, 4];

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
      switch (e.keyCode) {
        case 37:
          if (stage > 1) {
            setStage(stage - 1);
          }
          break;
        case 39:
          if (stage < stages.length) {
            setStage(stage + 1);
          }
          break;
      }
    };

    window.onkeydown = keyHandler;
  });

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

      if (deltaY < 0 && stage > 1) {
        setStage(stage - 1);
      } else if (deltaY > 0 && stage < stages.length) {
        setStage(stage + 1);
      }
    }, 100);
    window.onwheel = handleWheel;
  });

  return (
    <AppContext.Provider value={{ mouseCoord, stage, setStage, stages }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
