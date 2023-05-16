import { useContext } from "react";
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

const Modal = ({ selectedItem }) => {
  const { setIsModalOpen } = useContext(AppContext);

  return (
    <ItemModal>
      <ModalWindow>
        <CloseBtn onClick={() => setIsModalOpen(false)} />
        <ModalContent>
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.about}</p>
          <Image
            alt={selectedItem.alt + "modal"}
            src={selectedItem.asset}
            width={300}
            height={300}
          />
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
`;

const ModalWindow = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 60%;
  height: 75%;
  padding: 4rem;
  button {
    right: 3.5%;
    top: 3.5%;
    transition: 0.34s ease;
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
    margin: 0 0 2rem;
  }
  p {
    margin: 0 auto 4rem;
    max-width: 75%;
  }
  img {
    width: auto;
    height: 100%;
  }
`;
