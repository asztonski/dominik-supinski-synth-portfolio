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

const Modal = ({ selectedItem, style, setIsModalOpen, id, content }) => {
  const { setIsModalRendered, isModalRendered, stage } = useContext(AppContext);

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
          {id === "about-modal" && content ? (
            <ModalContent className="about-modal">
              <h3>{content.title}</h3>
              <p
                className="copy"
                dangerouslySetInnerHTML={{ __html: content.content }}
              />
            </ModalContent>
          ) : null}
          {id === "portfolio-modal" ? (
            <ModalContent className="portfolio-modal">
              <h3>{selectedItem.name}</h3>
              <h5>
                <span>Year: {selectedItem.year}</span>
                <span>Technologies: {selectedItem.technologies}</span>
              </h5>
              <p>{selectedItem.about}</p>
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
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  padding: 2rem;
  z-index: 10;
  backdrop-filter: blur(0);
  animation: ${blurAnim} 0.3s ease-in forwards;
  transition: opacity 0.2s ease-in-out;
  overflow: hidden;
  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    /* height: 90%; */
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
    width: 85% !important;
    border-width: 2rem 0.25rem 0.25rem;
    max-height: none;
    min-height: none;
    height: 80%;
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
`;

const ModalContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  &.about-modal {
    h3 {
      font-size: 2rem;
      margin: 0 0 1.5rem;
    }
    .copy {
      font-size: 1.4rem;
    }
  }

  &.portfolio-modal {
    h3 {
      font-size: 3rem;
      margin: 0 0 2rem;
    }
    h5 {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      font-size: 1.25rem;
    }
    p {
      max-width: 75%;
      margin: 2rem 0 4rem;
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
      font-weight: bold;
      margin: 2rem 0 0;
      /* border: 1px solid ${theme.colors.extra}; */
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0.5rem;
    &.about-modal {
      padding: 1rem;
      align-items: flex-start;
      h3 {
        margin: 0;
      }
      .copy {
        font-size: 1rem;
        margin: 1rem 0;
      }
    }
    &.portfolio-modal {
      p {
        text-align: center;
      }

      h5 {
        span {
          text-align: center;
        }
      }
    }
  }
`;

const ImageContainer = styled.div`
  width: 45%;
  aspect-ratio: 1 / 1;
  position: relative;
  img {
    object-fit: cover;
    inset: 0;
    margin: auto;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    width: 75% !important;
    max-width: 400px;
  }
`;
