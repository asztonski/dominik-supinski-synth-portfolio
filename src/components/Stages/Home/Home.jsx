/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Image from "next/image";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";
import { keyframes, css } from "@emotion/react";
import { theme } from "@/api/theme";
import Wrapper from "@/components/Layout/Wrapper/Wrapper";
import GlitchSquare from "@/components/Decor/Square/GlitchSquare";

const Home = ({ id, observer }) => {
  const { mouseHomeCoord, isMobile } = useContext(AppContext);
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

  const neonAnim = keyframes`
  from, 2% {
    opacity: 1;
  }
  2%, 4% {
    opacity: 0;
  }
  4%, 4.5% {
    opacity: 1;
  }
  4.5%, 5% {
    opacity: 0;
  }
  5%, 6.2% {
    opacity: 1;
  }
  6.2%, 7% {
    opacity: 0;
  }
  7%, 8% {
    opacity: 1;
  }
  8%, 16% {
    opacity: 0;
  }
  16%, 75% {
    opacity: 1;
  }
  `;

  return (
    <HomeSection ref={observer} id={id}>
      <Wrapper column withHeight>
        <TextImagesContainer>
          <Image
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
            className="above"
            src="/images/home/name_1.png"
            alt="First name first layer"
          />
          <Image
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
            className="above"
            src="/images/home/name_2.png"
            priority
            alt="First name first layer"
            css={css`
              animation: ${neonAnim} 12.5s linear infinite;
            `}
          />
          <Image
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
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
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
            style={{
              objectFit: "contain",
              transform: `translate(${-mouseX}px, ${-mouseY}px)`,
            }}
            className="below second"
            src="/images/home/lastname_2.png"
            alt="Last name second layer"
          />
          <Image
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
            fill
            style={{ objectFit: "contain" }}
            className="below relative"
            src="/images/home/lastname_3.png"
            priority
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
      {/* <GlitchSquare translateX={50} translateY={80} order={1} />
      {!isMobile ? (
        <GlitchSquare translateX={50} translateY={25} delay={7} order={2} />
      ) : null}
      {!isMobile ? (
        <GlitchSquare translateX={10} translateY={80} delay={12} order={3} />
      ) : null}
      <GlitchSquare translateX={70} translateY={40} delay={15} order={4} /> */}
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
  .square-1 {
    inset: -50% 30% 0 0;
  }
  .square-2 {
    inset: -45% -95% 0 0;
  }
  .square-3 {
    inset: 60% 90% 0 0;
  }
  .square-4 {
    inset: 80% 0 0 0;
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
