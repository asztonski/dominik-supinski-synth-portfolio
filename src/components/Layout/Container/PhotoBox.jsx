import styled from "@emotion/styled";
import Image from "next/image";
import { keyframes, css } from "@emotion/react";
import img from "../../../../public/images/about/dominik.png";
import imgGlitchOne from "../../../../public/images/about/dominik_glitch_1.png";
import imgGlitchTwo from "../../../../public/images/about/dominik_glitch_2.png";
import imgGlitchThree from "../../../../public/images/about/dominik_glitch_3.png";
import { theme } from "@/api/theme";

const imgAnimOne = keyframes`
  0%, 20%, 23%, 25%, 63%, 100% {
    opacity: 1;
  }
  21%, 24%, 62%, 64%, 78% {
    opacity: 0;
  }
  `;

const imgAnimTwo = keyframes`
  0%, 90% {
    opacity: 1;
  }
  90%,100% {
    opacity: 0;
  }
  `;

const imgAnimThree = keyframes`
  0%, 20%, 23%, 25%, 61%, 63%,72% {
    opacity: 0;
  }
  21%, 24%, 62%, 64%, 73%, 100% {
    opacity: 1;
  }
  `;

const imgAnimFour = keyframes`
  0%,23%, 25%, 64%, 100% {
    opacity: 0;
  }
  24%,63% {
    opacity: 1;
  }
  `;

const PhotoBox = () => {
  return (
    <StyledPhotoBox>
      <Image src={img} alt="Photo of Dominik Supinski" className="about-img" />
      <Image
        className="glitch-img glitch-1"
        src={imgGlitchOne}
        alt="First Glitched Photo of Dominik Supinski"
      />
      <Image
        className="glitch-img glitch-2"
        src={imgGlitchTwo}
        alt="Second Glitched Photo of Dominik Supinski"
      />
      <Image
        className="glitch-img glitch-3"
        src={imgGlitchThree}
        alt="Third Glitched Photo of Dominik Supinski"
      />
    </StyledPhotoBox>
  );
};

export default PhotoBox;

const StyledPhotoBox = styled.div`
  position: relative;
  pointer-events: none;
  width: 50%;
  max-width: 816px;
  img {
    position: absolute;
    margin: auto 0;
    height: auto;
    width: 57.5vh;
    max-width: 625px;
    animation-duration: 20s !important;
    animation-timing-function: step-end !important;
    animation-iteration-count: infinite !important;
  }
  .about-img {
    inset: 0 0 -15% auto;
    animation: ${imgAnimOne};
    z-index: 1;
  }
  .glitch-1 {
    inset: 0 0 -10% auto;
    animation: ${imgAnimTwo};
  }
  .glitch-2 {
    inset: 15% 5% 0 auto;
    animation: ${imgAnimThree};
  }
  .glitch-3 {
    inset: 15% -8% 0 auto;
    animation: ${imgAnimFour};
  }
  @media (max-width: ${theme.breakpoints.md}) {
    align-self: center;
    width: 75% !important;
    max-width: 250px !important;
    margin: 1rem 0 3rem;
    img {
      position: unset;
      width: 100%;
      inset: 0;
    }
    .glitch-img {
      position: absolute !important;
      z-index: -1;
    }
    .glitch-1 {
      top: -1rem;
      display: none;
    }
    .glitch-2 {
      left: 1rem;
    }
    .glitch-3 {
      left: -0.7rem;
      top: 0.7rem;
    }
  }
`;
