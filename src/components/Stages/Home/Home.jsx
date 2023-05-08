/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Section from "@/components/Layout/Section/Section";
import Image from "next/image";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";
import { keyframes, css } from "@emotion/react";

const Home = () => {
  const { mouseCoord } = useContext(AppContext);
  let mouseX = mouseCoord.x / 150;
  let mouseY = mouseCoord.y / 150;

  const pulse = keyframes`
  0%, 100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
`;

  return (
    <HomeContainer withHeight column>
      <TextImagesContainer>
        <Image
          fill
          style={{ objectFit: "contain" }}
          className="above"
          src="/images/home/name_1.png"
          alt="First name first layer"
        />
        <Image
          fill
          style={{ objectFit: "contain" }}
          className="above"
          src="/images/home/name_2.png"
          alt="First name first layer"
        />
        <Image
          fill
          style={{
            objectFit: "contain",
            transform: `translate(${mouseX}px, ${mouseY}px)`,
          }}
          className="below"
          src="/images/home/lastname_1.png"
          alt="Last name first layer"
        />
        <Image
          fill
          style={{
            objectFit: "contain",
            transform: `translate(${-mouseX}px, ${-mouseY}px)`,
          }}
          className="below second"
          src="/images/home/lastname_2.png"
          alt="Last name second layer"
        />
        <Image
          fill
          style={{ objectFit: "contain" }}
          className="relative"
          src="/images/home/lastname_3.png"
          alt="Last name third layer"
        />
      </TextImagesContainer>
      <h2
        css={css`
          animation: ${pulse} 2s ease infinite;
          pointer-events: none;
          width: max-content;
          margin: auto;
        `}
        className="pulse-title"
      >
        front end developer
      </h2>
    </HomeContainer>
  );
};

export default Home;

// STYLES

const HomeContainer = styled(Section)``;

const TextImagesContainer = styled.div`
  width: inherit;
  height: 100%;
  align-self: center;
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }

  img.above {
    z-index: 2;
    width: 25% !important;
    top: -75% !important;
  }

  img.below {
    z-index: 1;
  }

  img.second {
    top: 1px;
  }

  img.relative {
    position: relative;
    top: 2.5%;
    left: 0.25%;
  }
`;
