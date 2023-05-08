import styled from "@emotion/styled";
import ArrowBtn from "@/components/UI/Button/ArrowBtn";
import { theme } from "@/api/theme";
import Section from "@/components/Layout/Section/Section";
import Image from "next/image";
import { useEffect, useState } from "react";

const carouselItems = [
  {
    name: "runicat",
    address: "https://www.runicat.com/",
    about:
      "[BETA] Runicat is a react web app created for people who want to understand the present and the future through runes. Type your birthdate and let universe works for you!",
    asset: "/images/portfolio/runicat.jpg",
  },
  {
    name: "luna-arte",
    address: "https://www.luna-arte.pl/",
    about:
      "Pixel Perfect website for tattoo & piercing studio in Warsaw, Poland made with UX/UI graphic designer. Pure vanilla project.",
    asset: "/images/portfolio/luna-arte.jpg",
  },
  {
    name: "ainpiracje",
    address: "https://www.ainspiracje.com/",
    about: "Website made for a Austrian Travel Guide. Pure vanilla project.",
    asset: "/images/portfolio/ainspiracje.jpg",
  },
  {
    name: "ainpiracje",
    address: "https://www.ainspiracje.com/",
    about: "Website made for a Austrian Travel Guide. Pure vanilla project.",
    asset: "/images/portfolio/ainspiracje.jpg",
  },
];

const Portfolio = () => {
  const [slide, setSlide] = useState(1);

  const leftBtnHandler = () => {
    if (slide > 1) {
      setSlide(slide - 1);
    } else setSlide(carouselItems.length);
  };

  const rightBtnHandler = () => {
    if (slide < carouselItems.length) {
      setSlide(slide + 1);
    } else setSlide(1);
  };

  return (
    <PortfolioContainer withHeight>
      <ArrowBtn onClick={leftBtnHandler} leftBtn />
      <CarouselWrapper>
        <Carousel style={{ transform: `translateX(${(slide - 1) * -27.5}%)` }}>
          {carouselItems.map((item, id) => (
            <CarouselItem href={item.address} key={id} target="_blank">
              <Image fill src={item.asset} />
            </CarouselItem>
          ))}
        </Carousel>
      </CarouselWrapper>
      <ArrowBtn onClick={rightBtnHandler} rightBtn />
    </PortfolioContainer>
  );
};

export default Portfolio;

const PortfolioContainer = styled(Section)``;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Carousel = styled.div`
  display: flex;
  margin: 0 5rem;
  overflow: hidden;
  position: absolute;
  gap: 10rem;
  transition: transform 0.34s ease-in;
`;

const CarouselItem = styled.a`
  width: 320px;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
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
