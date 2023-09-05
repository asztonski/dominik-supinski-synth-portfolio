/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";
import { theme } from "@/api/theme";

const menuListArr = ["home", "about", "portfolio", "contact"];

const MenuList = ({ className }) => {
  const { stage, setStage, isMobile } = useContext(AppContext);

  return (
    <StyledNavBox className={className}>
      <nav>
        <ul>
          {!isMobile
            ? menuListArr.map((link, id) => (
                <li key={id} className={stage === id + 1 ? "active" : ""}>
                  <button
                    tabIndex={id + 1}
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
              ))
            : null}
          <li>
            <a tabIndex="5" href="mailto:supinski.dev@gmail.com">
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
          <li>
            <a
              className="github-link"
              target="_blank"
              href="https://github.com/asztonski"
              tabIndex="6"
            >
              <svg
                viewBox="0 0 98 96"
                width="98"
                height="96"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      {!isMobile ? (
        <AbsoluteElement className={`absolute-element ${`stage-` + stage}`}>
          <div className="back"></div>
          <div className="front"></div>
        </AbsoluteElement>
      ) : null}
    </StyledNavBox>
  );
};

export default MenuList;

const StyledNavBox = styled.div`
  position: relative;
  overflow: hidden;
  nav {
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
              strokewidth: 2px;
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
        .github-link {
          width: 30px;
          height: auto;
          position: relative;
          display: block;
          align-items: center;
          justify-content: center;
          svg {
            width: 100%;
            height: 100%;
            fill: ${theme.colors.accent};
            transition: 0.34s ease-in-out;
          }
          &:hover {
            svg {
              fill: ${theme.colors.hover};
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
        &.active {
          pointer-events: none;
        }
      }
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    ul {
      gap: 1rem !important;
      .msg-icon,
      .github-link {
        width: 1.5rem !important;
      }
    }
  }
`;

const AbsoluteElement = styled.div`
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
    width: 52.5%;
  }
`;
