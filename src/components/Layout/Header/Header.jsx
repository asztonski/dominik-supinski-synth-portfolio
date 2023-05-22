/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import { css, keyframes } from "@emotion/react";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";

const menuListArr = ["home", "about", "portfolio", "contact"];

const Header = () => {
  const { stage, setStage } = useContext(AppContext);

  return (
    <StyledHeader>
      <img src="images/logo.png" alt="Dominik Supinski's Logo" />
      <div className="nav-parent">
        <nav>
          <ul>
            {menuListArr.map((link, id) => (
              <li key={id}>
                <button
                  css={css`
                    position: relative;
                    &:after {
                      content: "${link}";
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      right: 0;
                      top: 0;
                      transition: 0.34s ease-in-out;
                      color: ${theme.colors.hover};
                      opacity: 0;
                      z-index: 1;
                      mix-blend-mode: overlay;
                    }
                    &:hover {
                      &:after {
                        opacity: 1;
                      }
                    }
                  `}
                  className={stage === id + 1 ? "active" : ""}
                  onClick={() => setStage(id + 1)}
                >
                  {link}
                </button>
              </li>
            ))}
            <li>
              <a href="mailto:supinski.dev@gmail.com">
                <svg
                  className="msg-icon"
                  id="Layer_2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 20"
                >
                  <g id="Layer_1-2">
                    <g>
                      <path
                        className="first-path"
                        d="M30,20H0V0H30V20Zm-1.24-17.83H1.18L15.17,11.17,28.76,2.17Zm-9.36,8.63l-4.48,2.2-4.05-2.13c-5.27,3.2-6.86,4.54-8.35,6.97H28.72l-9.33-7.05ZM2.16,4.93V15.03l7.07-5.61L2.16,4.93Zm25.66-.11l-7.04,4.68,7.04,5.5V4.82Z"
                      />
                      <path
                        className="cls-1"
                        d="M28.76,2.17L15.17,11.17,1.18,2.17H28.76Z"
                      />
                      <path
                        className="cls-1"
                        d="M19.39,10.81l9.33,7.05H2.51c1.49-2.43,3.08-3.78,8.35-6.97l4.05,2.13,4.48-2.2Z"
                      />
                      <path
                        className="cls-1"
                        d="M2.16,4.93l7.07,4.48L2.16,15.03V4.93Z"
                      />
                      <path
                        className="cls-1"
                        d="M27.82,4.82V14.99l-7.04-5.5,7.04-4.68Z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
          <div className={`absolute-element ${`stage-` + stage}`}>
            <div className="back"></div>
            <div className="front"></div>
          </div>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
  padding: 0 2rem;
  img {
    z-index: 2;
  }
  .nav-parent {
    position: relative;
  }
  nav {
    position: relative;
    ul {
      display: flex;
      gap: 2.5rem;
      align-items: center;
      li {
        list-style: none;
        button,
        a {
          border: none;
          text-transform: uppercase;
          transition: 0.34s ease-in-out;
          color: white;
          position: relative;
          .btn-border {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            polyline {
              fill: transparent;
              stroke: ${theme.colors.extra};
              stroke-width: 2px;
              stroke-dasharray: 40 460;
              stroke-dashoffset: 40;
            }
          }
          .msg-icon {
            width: 30px;
            * {
              transition: 0.34s ease-in-out;
            }
            path {
              stroke: ${theme.colors.accent};
            }
            .first-path {
              fill: ${theme.colors.accent};
            }
          }
        }
        &:hover {
          .msg-icon {
            path {
              stroke: ${theme.colors.hover};
            }
            .first-path {
              fill: ${theme.colors.hover};
            }
          }
        }
      }
    }
    .absolute-element {
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 180%;
      pointer-events: none;
      transition: ${`${theme.transitionTime * 1.5}s`} ease-in-out;
      mix-blend-mode: multiply;
      .back,
      .front {
        background: ${theme.colors.accent};
        height: 100%;
      }
      .back {
        width: 35%;
      }
      .front {
        width: 50%;
      }
    }
    .stage-1 {
      transform: translateX(-40%);
    }
    .stage-2 {
      transform: translateX(-29%);
    }
    .stage-3 {
      transform: translateX(-15%);
    }
    .stage-4 {
      transform: translateX(0);
    }
  }
`;
