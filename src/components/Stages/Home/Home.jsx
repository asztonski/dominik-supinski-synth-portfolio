/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Image from "next/image";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";
import { keyframes, css } from "@emotion/react";
import { theme } from "@/api/theme";
import Wrapper from "@/components/Layout/Wrapper/Wrapper";

const Home = ({ id, observer }) => {
  const { mouseHomeCoord } = useContext(AppContext);
  let mouseX = mouseHomeCoord.x / 150;
  let mouseY = mouseHomeCoord.y / 150;

  const pulse = keyframes`
  0%, 100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
`;

  return (
    <HomeSection ref={observer} id={id}>
      <Wrapper column withHeight>
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
            className="below relative"
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
      </Wrapper>
    </HomeSection>
  );
};

export default Home;

// STYLES

const HomeSection = styled.section`
  height: 100%;
  .pulse-title {
    font-size: 2rem;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    .pulse-title {
      font-size: 1rem;
      margin: 1rem auto 0;
    }
  }
`;

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
  @media (max-width: ${theme.breakpoints.md}) {
    height: 10rem;
    img.above {
      width: 60% !important;
      max-width: 600px;
      height: auto;
    }
    img.below {
      width: 80% !important;
      max-width: 600px;
    }
  }
`;
