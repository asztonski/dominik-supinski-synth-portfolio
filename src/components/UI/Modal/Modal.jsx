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
  const { setIsModalRendered } = useContext(AppContext);

  const closeBtnHandler = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalRendered(false);
    }, 300);
  };

  return (
    <ItemModal style={style}>
      <ModalWindow>
        <CloseBtn onClick={closeBtnHandler} />
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
  right: -9%;
  bottom: 0;
  top: 0;
  padding: 2rem;
  z-index: 10;
  backdrop-filter: blur(0);
  animation: ${blurAnim} 0.3s ease-in forwards;
  transition: 0.2s ease-in-out;
`;

const ModalWindow = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 60%;
  max-height: 85%;
  min-height: 50%;
  height: max-content;
  padding: 2rem;
  button {
    right: 3.5%;
    top: 3.5%;
    transition: 1s cubic-bezier(0.54, -0.01, 0.48, 1);
    &:hover {
      transform: rotate(-180deg);
    }
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
`;

const ModalContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    /* border: 1px solid ${theme.colors.extra}; */
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
