import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import Wrapper from "@/components/Layout/Wrapper/Wrapper";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselItems } from "@/api/portfolio";
import { AppContext } from "@/api/AppContext";
import { useContext, useEffect, useState } from "react";
import Modal from "@/components/UI/Modal/Modal";

const Portfolio = ({ id, observer }) => {
  const {
    sliderSettings,
    isModalRendered,
    isModalOpen,
    setIsModalOpen,
    isMobile,
    modalHandler,
  } = useContext(AppContext);

  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    if (isModalOpen === false) {
      setSelectedItem(null);
    }
  }, [isModalOpen]);

  return (
    <PortfolioSection ref={observer} id={id} className="portfolio">
      <Wrapper withHeight>
        {isMobile ? <h2>Portfolio</h2> : null}
        <CarouselWrapper>
          <Slider {...sliderSettings}>
            {carouselItems.map((item, id) => (
              <CarouselItem
                onClick={() => (modalHandler(item), setSelectedItem(item))}
                className="carousel-item"
                key={id}
                target="_blank"
              >
                <Image
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                  alt={item.alt}
                  src={item.asset}
                />
              </CarouselItem>
            ))}
          </Slider>
        </CarouselWrapper>

        {isModalRendered && selectedItem ? (
          <Modal
            id="portfolio-modal"
            style={{ opacity: `${isModalOpen ? "1" : "0"}` }}
            selectedItem={selectedItem}
            setIsModalOpen={setIsModalOpen}
          />
        ) : null}
      </Wrapper>
    </PortfolioSection>
  );
};

export default Portfolio;

const PortfolioSection = styled.section`
  height: 100%;
  .wrapper {
    width: 100% !important;
  }
  .left-btn {
    &:hover {
      transform: translateX(-20%);
    }
  }
  .right-btn {
    &:hover {
      transform: translateX(20%);
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    margin: 4rem 0 !important;
    min-height: unset !important;
    justify-content: flex-start !important;
    .wrapper {
      flex-direction: column !important;
      height: auto !important;
    }
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 0 auto;
  max-width: none !important;
  width: 90%;
  div {
    max-width: inherit;
  }
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
  @media (max-width: ${theme.breakpoints.md}) {
    height: auto;
    margin: 4rem 0 0;
    div {
      height: inherit;
    }
    .slick-slider {
      gap: 0;
      .slick-list {
        .slick-track {
          .slick-slide {
            align-self: center;
          }
          div {
            height: auto;
          }
        }
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
  @media (max-width: ${theme.breakpoints.md}) {
    width: 90% !important;
    max-width: 450px !important;
  }
`;
