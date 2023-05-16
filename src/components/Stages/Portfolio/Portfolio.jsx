import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import Section from "@/components/Layout/Section/Section";
import Image from "next/image";
import CloseBtn from "@/components/UI/Button/CloseBtn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselItems } from "@/api/portfolio";
import { AppContext } from "@/api/AppContext";
import { useContext, useState } from "react";

const Portfolio = () => {
  const { sliderSettings, isModalOpen, setIsModalOpen } =
    useContext(AppContext);

  const [selectedItem, setSelectedItem] = useState();

  const modalHandler = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <PortfolioContainer withHeight>
      <CarouselWrapper>
        <Slider {...sliderSettings}>
          {carouselItems.map((item, id) => (
            <CarouselItem
              onClick={() => modalHandler(item)}
              className="carousel-item"
              key={id}
              target="_blank"
            >
              <Image fill alt={item.alt} src={item.asset} />
            </CarouselItem>
          ))}
        </Slider>
      </CarouselWrapper>

      {isModalOpen && selectedItem && (
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
      )}
    </PortfolioContainer>
  );
};

export default Portfolio;

const PortfolioContainer = styled(Section)``;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 0 auto;
  .slick-slider {
    display: flex;
    gap: 3rem;
    .slick-list {
      display: inherit;
      flex-direction: column;
      .slick-track {
        display: inherit;
        gap: 0.1px;
      }
    }
  }
`;

const CarouselItem = styled.div`
  width: 80% !important;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  display: flex !important;
  margin: auto;
  img {
    transition: 2s ease-out;
  }
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${theme.colors.other};
    opacity: 0.5;
    content: "";
    z-index: 1;
    transition: 0.34s ease-in;
  }
  &:hover {
    &:before {
      opacity: 0;
    }
    img {
      transform: scale(1.1);
      transition: 8s ease-in;
    }
  }
`;

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
  backdrop-filter: blur(3px);
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
  }
  &::after {
    width: 100%;
    height: 100%;
    content: "";
    background: ${theme.colors.other};
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
    margin: 0 0 4rem;
  }
  img {
    width: auto;
    height: 100%;
  }
`;
