import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [mouseCoord, setMouseCoords] = useState({x: 0, y: 0});

  useEffect(() => {

    const handleMouseMove = (e) => {
        setMouseCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <AppContext.Provider value={{ mouseCoord }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
