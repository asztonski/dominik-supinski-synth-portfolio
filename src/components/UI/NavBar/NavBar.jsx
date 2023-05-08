/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";
import { theme } from "@/api/theme";
import { css } from "@emotion/react";

const NavBar = () => {
  const { stage, setStage, stages } = useContext(AppContext);
  const stagesNumber = stages.length;
  // const [direction, setDirection] = useState(null);

  // useEffect(() => {
  //   setPrevStage(stage);
  //   if (stage > prevStage) {
  //     setDirection("increasing");
  //   } else if (stage < prevStage) {
  //     setDirection("decreasing");
  //   }
  //   console.log(direction);
  // }, [stage, prevStage]);

  // Button handlers

  const leftBtnHandler = () => {
    if (stage > 1) {
      setStage(stage - 1);
    } else return false
  };

  const rightBtnHandler = () => {
    if (stage < stagesNumber) {
      setStage(stage + 1);
    } else return false
  };

  return (
    <NavBarWrapper>
      <button onClick={leftBtnHandler} className="arrow-btn">
        <img className="arrow-left" src="images/svg/arrow_left.png" alt="" />
      </button>
      <MiddleBar className="footer-item">
        {stages.map((id) => (
          <NavSquare
            className={`nav-btn ${stage === id ? "active" : ""}`}
            key={id}
            onClick={() => setStage(id)}
          />
        ))}
      </MiddleBar>
      <button onClick={rightBtnHandler} className="arrow-btn">
        <img className="arrow-right" src="images/svg/arrow_right.png" alt="" />
      </button>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  .arrow-btn {
    width: 30px;
    height: 1px;
    padding: 1rem 0;
    border: none;
    position: relative;
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      position: absolute;
      z-index: 1;
      transition: 0.2s ease-in;
    }
    :hover {
      img.arrow-left {
        transform: translateX(-50%);
      }
      img.arrow-right {
        transform: translateX(50%);
      }
    }
    :after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background: white;
      left: 0;
    }
  }
`;

const MiddleBar = styled.div`
  width: 230px;
  height: 1px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
  .active {
    :after {
      transform: translateY(100%);
    }
  }
  .nav-btn.active {
    transform: rotate(0deg);
  }
`;

const NavSquare = styled.button`
  height: 10px;
  width: 10px;
  border: 1px solid white;
  display: block;
  z-index: 1;
  transform: rotate(-45deg);
  transition: ${`${theme.transitionTime}s`} ease;
  position: relative;
  overflow: hidden;
  :before, :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform ${`${theme.transitionTime}s`} ease-in;
    left: 0;
    bottom: 0;
    /* transform: translateY(-50%); */
  }
  :after {
    background: black;
  }
  :before {
    background: white;
  }
  &:hover {
    transform: rotate(0deg);
  }
`;
