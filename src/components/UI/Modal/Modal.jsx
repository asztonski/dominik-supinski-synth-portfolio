import { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import CloseBtn from "../Button/CloseBtn";
import Image from "next/image";
import { keyframes } from "@emotion/react";
import { AppContext } from "@/api/AppContext";

const blurAnim = keyframes`
from {
    backdrop-filter: blur(0);
}
to {
    backdrop-filter: blur(3px);
}
`;

const Modal = ({ selectedItem, style, setIsModalOpen }) => {
  const { setIsModalRendered, isModalRendered } = useContext(AppContext);

  const closeBtnHandler = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalRendered(false);
    }, 300);
    console.log(isModalRendered);
  };

  return (
    <ItemModal style={style}>
      <ModalWindow>
        <CloseBtn onClick={closeBtnHandler} />
        <ScrollableContainer>
          <ModalContent>
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.about}</p>
            <h5>Technologies: {selectedItem.technologies}</h5>
            <ImageContainer>
              <Image
                alt={selectedItem.alt + "modal"}
                src={selectedItem.asset}
                fill
              />
            </ImageContainer>
            <a target="_blank" href={selectedItem.address}>
              Live version
            </a>
          </ModalContent>
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
  right: 0;
  bottom: 0;
  top: 0;
  padding: 2rem;
  z-index: 10;
  backdrop-filter: blur(0);
  animation: ${blurAnim} 0.3s ease-in forwards;
  transition: opacity 0.2s ease-in-out;
  overflow: hidden;
  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    width: 90% !important;
    height: 90%;
    inset: 0;
    margin: auto;
  }
`;

const ModalWindow = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 60%;
  max-height: 85%;
  min-height: 50%;
  /* height: max-content; */
  /* overflow: hidden; */
  border: solid ${theme.colors.accent};
  border-width: 3rem 0.5rem 0.5rem;
  padding: 0.25rem 0 1rem;
  button {
    right: 0;
    top: -5%;
    transition: transform 1s cubic-bezier(0.54, -0.01, 0.48, 1);
    background-color: ${theme.colors.extra};
    /* &:hover {
      transform: rotate(-180deg);
    } */
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
    opacity: 0.9;
    z-index: -1;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    border-width: 2rem 0.25rem 0.25rem;
  }
`;

const ScrollableContainer = styled.div`
  overflow: auto;
  height: 100%;
`;

const ModalContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  h3 {
    font-size: 2rem;
  }
  p {
    max-width: 75%;
    margin: 2rem 0;
  }
  img {
    width: auto;
    height: 100%;
    /* margin: 2rem 0; */
  }
  a {
    color: ${theme.colors.extra};
    letter-spacing: 4px;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    font-weight: bold;
    /* border: 1px solid ${theme.colors.extra}; */
  }
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 45%;
  aspect-ratio: 1 / 1;
  position: relative;
  margin: 2rem 0 1rem;
  img {
    object-fit: cover;
    inset: 0;
    margin: auto;
  }
`;
