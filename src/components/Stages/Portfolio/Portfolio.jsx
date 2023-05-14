import styled from "@emotion/styled";
import ArrowBtn from "@/components/UI/Button/ArrowBtn";
import { theme } from "@/api/theme";
import Section from "@/components/Layout/Section/Section";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  {
    name: "runicat",
    address: "https://www.runicat.com/",
    about:
      "[BETA] Runicat is a react web app created for people who want to understand the present and the future through runes. Type your birthdate and let universe works for you!",
    asset: "/images/portfolio/runicat.jpg",
    alt: "Runicat Project Image",
  },
  {
    name: "luna-arte",
    address: "https://www.luna-arte.pl/",
    about:
      "Pixel Perfect website for tattoo & piercing studio in Warsaw, Poland made with UX/UI graphic designer. Pure vanilla project.",
    asset: "/images/portfolio/luna-arte.jpg",
    alt: "Luna-Arte Project Image",
  },
  {
    name: "ainpiracje",
    address: "https://www.ainspiracje.com/",
    about: "Website made for a Austrian Travel Guide. Pure vanilla project.",
    asset: "/images/portfolio/ainspiracje.jpg",
    alt: "Ainspiracje Project Image",
  },
  {
    name: "atlanca",
    address: "https://www.atlanca.com/",
    about: "Website made for a Canary Islands boat rental.",
    asset: "/images/portfolio/atlanca.jpg",
    alt: "Atlanca Project Image",
  },
];

const Portfolio = () => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <ArrowBtn leftBtn onClick={onClick}>
        Previous
      </ArrowBtn>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <ArrowBtn rightBtn onClick={onClick}>
        Previous
      </ArrowBtn>
    );
  };

  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <PortfolioContainer withHeight>
      <CarouselWrapper>
        <Slider {...settings}>
          {carouselItems.map((item, id) => (
            <CarouselItem className="carousel-item" key={id} target="_blank">
              <Image fill alt={item.alt} src={item.asset} />
            </CarouselItem>
          ))}
        </Slider>
      </CarouselWrapper>
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

// const Carousel = styled.div`
//   display: flex;
//   margin: 0 5rem;
//   overflow: hidden;
//   position: absolute;
//   gap: 10rem;
//   transition: transform 0.34s ease-in;
// `;

const CarouselItem = styled.div`
  /* width: 320px; */
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
