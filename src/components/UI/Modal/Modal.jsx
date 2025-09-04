import { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import CloseBtn from "../Button/CloseBtn";
import Image from "next/image";
import { keyframes } from "@emotion/react";
import { AppContext } from "@/api/AppContext";
import AboutContent from "./About";
import PortfolioContent from "./Portfolio";

const blurAnim = keyframes`
from { backdrop-filter: blur(0); }
to { backdrop-filter: blur(4px); }
`;

const Modal = ({ selectedItem, style, setIsModalOpen, id, content }) => {
  const { setIsModalRendered } = useContext(AppContext);

  const closeBtnHandler = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsModalRendered(false), 300);
  };

  // (optional) close on Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeBtnHandler();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onBackdropClick = (e) => {
    // Only close if the user clicked the backdrop itself, not inside the modal
    if (e.target === e.currentTarget) {
      closeBtnHandler();
    }
  };

  return (
    <ItemModal
      style={style}
      onClick={onBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <ModalWindow>
        <CloseBtn onClick={closeBtnHandler} />
        <ScrollableContainer>
          {id === "about-modal" && content ? (
            <AboutContent content={content} />
          ) : null}
          {id === "portfolio-modal" ? (
            <PortfolioContent selectedItem={selectedItem} />
          ) : null}
        </ScrollableContainer>
      </ModalWindow>
    </ItemModal>
  );
};

export default Modal;

const ItemModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  margin: auto;
  inset: 0;
  padding: 2rem;
  z-index: 10;
  backdrop-filter: blur(0);
  animation: ${blurAnim} 0.3s ease-in forwards;
  transition: opacity 0.2s ease-in-out;
  overflow: hidden;
  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    inset: 0;
    margin: auto;
    max-width: unset !important;
  }
`;

const ModalWindow = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 60%;
  max-height: 85%;
  min-height: 50%;
  border: solid ${theme.colors.accent};
  border-width: 3rem 0.5rem 0.5rem;
  padding: 0.25rem 0 1rem;
  z-index: 11;
  button {
    right: 0;
    top: -2.45rem;
    transition: transform 1s cubic-bezier(0.54, -0.01, 0.48, 1);
    background-color: ${theme.colors.extra};
  }
  &::after {
    width: 100%;
    height: 100%;
    content: "";
    background: ${theme.colors.other};
    box-shadow: 0 0 10px ${theme.colors.accent}, 0 0 40px ${theme.colors.accent},
      0 0 80px ${theme.colors.accent};
    position: absolute;
    inset: 0;
    margin: auto;
    opacity: 0.925;
    z-index: -1;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    width: 85% !important;
    border-width: 2rem 0.25rem 0.25rem;
    max-height: none;
    min-height: none;
    height: 80%;
    inset: 2rem 0 0 0;
    button {
      top: -1.75rem;
    }
    &::after {
      box-shadow: 0 0 10px ${theme.colors.accent},
        0 0 10px ${theme.colors.accent}, 0 0 20px ${theme.colors.accent};
    }
  }
`;

const ScrollableContainer = styled.div`
  overflow: auto;
  height: 100%;
  h3 {
    margin-top: 2rem;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: 0.5rem;
  }
`;
