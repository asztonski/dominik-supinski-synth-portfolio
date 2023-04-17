
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Image from "next/image";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";
import { keyframes, css } from "@emotion/react";


const Main = () => {

  const { mouseCoord } = useContext(AppContext)
  let mouseX = mouseCoord.x / 150;
  let mouseY = mouseCoord.y / 150;

  const pulse = keyframes`
  0%, 100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
`

  return <StyledMain>
    <Home>
      <TextImagesContainer>
        <Image fill style={{ objectFit: 'contain' }} className="above" src="/images/home/name_1.png" alt="First name first layer" />
        <Image fill style={{ objectFit: 'contain' }} className="above" src="/images/home/name_2.png" alt="First name first layer" />
        <Image fill style={{ objectFit: 'contain', transform: `translate(${mouseX}px, ${mouseY}px)` }} className="below" src="/images/home/lastname_1.png" alt="Last name first layer" />
        <Image fill style={{ objectFit: 'contain', transform: `translate(${-mouseX}px, ${-mouseY}px)` }} className="below second" src="/images/home/lastname_2.png" alt="Last name second layer" />
        <Image fill style={{ objectFit: 'contain' }} className="relative" src="/images/home/lastname_3.png" alt="Last name third layer" />
      </TextImagesContainer>
      <p css={css`
      animation: ${pulse} 2s ease infinite;
    `}>front end developer</p>
    </Home>
  </StyledMain>;
};

export default Main;

const StyledMain = styled.main`
  flex: 1 0 auto;
`;

const Home = styled.div`
  margin: auto;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;
  gap: 4rem;
  p {
    font-size: 2.75rem;
  }
`

const TextImagesContainer = styled.div`
  width: 100%;
  min-height: 35%;
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
    left: .25%;
  }
`