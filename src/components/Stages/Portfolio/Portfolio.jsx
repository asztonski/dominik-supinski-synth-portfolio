import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import Section from "@/components/Layout/Section/Section";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselItems } from "@/api/portfolio";
import { AppContext } from "@/api/AppContext";
import { useContext, useState } from "react";
import Modal from "@/components/UI/Modal/Modal";

const Portfolio = () => {
  const { sliderSettings, isModalRendered, setIsModalRendered } =
    useContext(AppContext);

  const [selectedItem, setSelectedItem] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = (item) => {
    setSelectedItem(item);
    setIsModalRendered(true);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 200);
  };

  return (
    <PortfolioContainer className="portfolio" withHeight>
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

      {isModalRendered && selectedItem && (
        <Modal
          style={{ opacity: `${isModalOpen ? "1" : "0"}` }}
          selectedItem={selectedItem}
          setIsModalOpen={setIsModalOpen}
        />
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
