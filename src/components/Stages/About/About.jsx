/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import CustomButton from "@/components/UI/Button/Button";
import CustomLink from "@/components/UI/Link/StyledLink";
import { theme } from "@/api/theme";
import img from "../../../../public/images/about/dominik.png";
import imgGlitchOne from "../../../../public/images/about/dominik_glitch_1.png";
import imgGlitchTwo from "../../../../public/images/about/dominik_glitch_2.png";
import imgGlitchThree from "../../../../public/images/about/dominik_glitch_3.png";
import Image from "next/image";
import { AppContext } from "@/api/AppContext";
import { useContext, useEffect, useState } from "react";
import Wrapper from "@/components/Layout/Wrapper/Wrapper";
import Modal from "@/components/UI/Modal/Modal";
import { aboutCopy } from "@/api/about";
import { keyframes, css } from "@emotion/react";

const SKILLS = [
  "HTML",
  "CSS",
  "JS Ecma 6",
  "React.js",
  "Next.js",
  "Styled Components",
  "Emotion",
  "Typescript",
  "SCSS",
  "Storybook.js",
  "Three.js",
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let lenght = shuffled.length - 1; lenght > 0; lenght--) {
    const randomNumber = Math.floor(Math.random() * (lenght + 1));
    [shuffled[lenght], shuffled[randomNumber]] = [
      shuffled[randomNumber],
      shuffled[lenght],
    ];
  }
  return shuffled;
};

const skillRows = Array.from({ length: 4 }, (_, id) => id);

const About = ({ id, observer }) => {
  const {
    stage,
    setStage,
    isMobile,
    isModalOpen,
    isModalRendered,
    setIsModalOpen,
    modalHandler,
  } = useContext(AppContext);

  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    if (isModalRendered === false) {
      setModalContent(null);
    }
  }, [isModalRendered]);

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

  return (
    <AboutSection ref={observer} id={id} className="bottom">
      <Wrapper>
        <InfoBox>
          <h2>About me</h2>
          <p>
            My name is Dominik and I like to create websites and web apps. I
            love exploring new digital horizons. Get to know me through my work.
            Let's create something amazing together!
          </p>
          {isMobile ? (
            <PhotoBox>
              <Image
                css={css`
                  inset: 0 0 -10% auto;
                  animation: ${imgAnimOne};
                  z-index: 2;
                `}
                src={img}
                alt="Photo of Dominik Supinski"
              />
              <Image
                className="glitch-img glitch-1"
                css={css`
                  inset: 0 0 -10% auto;
                  animation-name: ${imgAnimTwo};
                `}
                src={imgGlitchOne}
                alt="First Glitched Photo of Dominik Supinski"
              />
              <Image
                className="glitch-img glitch-2"
                css={css`
                  inset: 15% 5% 0 auto;
                  animation: ${imgAnimThree};
                `}
                src={imgGlitchTwo}
                alt="Second Glitched Photo of Dominik Supinski"
              />
              {!isMobile ? (
                <Image
                  className="glitch-img glitch-3"
                  css={css`
                    inset: 15% -8% 0 auto;
                    /* animation: ${imgAnimFour}; */
                  `}
                  src={imgGlitchThree}
                  alt="Third Glitched Photo of Dominik Supinski"
                />
              ) : null}
            </PhotoBox>
          ) : null}
          <SkillsBox>
            {skillRows.map((skill, id) => {
              const shuffledSkills = shuffleArray(SKILLS);
              return (
                <SkillRow key={id}>
                  {shuffledSkills.map((singleSkill, index) => (
                    <SingleSkill key={index}>{singleSkill}</SingleSkill>
                  ))}
                </SkillRow>
              );
            })}
          </SkillsBox>
          <ButtonsWrapper>
            {!isMobile ? (
              <CustomButton
                onClick={() => setStage(stage + 1)}
                content="see portfolio"
                tabIndex={stage !== 2 ? "-1" : "8"}
              />
            ) : (
              <CustomLink content="see portfolio" href="#portfolio" />
            )}
            <CustomButton
              onClick={() => (modalHandler(), setModalContent(aboutCopy))}
              content="read bio"
              tabIndex={stage !== 2 ? "-1" : "7"}
            />
          </ButtonsWrapper>
        </InfoBox>
        {!isMobile ? (
          <PhotoBox>
            <Image
              css={css`
                inset: 0 0 -15% auto;
                animation: ${imgAnimOne};
                z-index: 1;
              `}
              src={img}
              alt="Photo of Dominik Supinski"
            />
            <Image
              className="glitch-img glitch-1"
              css={css`
                inset: 0 0 -10% auto;
              `}
              src={imgGlitchOne}
              alt="First Glitched Photo of Dominik Supinski"
            />
            <Image
              className="glitch-img glitch-2"
              css={css`
                inset: 15% 5% 0 auto;
                animation: ${imgAnimThree};
              `}
              src={imgGlitchTwo}
              alt="Second Glitched Photo of Dominik Supinski"
            />
            <Image
              className="glitch-img glitch-3"
              css={css`
                inset: 15% -8% 0 auto;
                animation: ${imgAnimFour};
              `}
              src={imgGlitchThree}
              alt="Third Glitched Photo of Dominik Supinski"
            />
          </PhotoBox>
        ) : null}
        {isModalRendered ? (
          <Modal
            id="about-modal"
            style={{ opacity: `${isModalOpen ? "1" : "0"}` }}
            setIsModalOpen={setIsModalOpen}
            content={modalContent}
          />
        ) : null}
      </Wrapper>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  width: 100%;
  position: relative;
  .wrapper {
    position: unset !important;
  }
  .square-1 {
    inset: -130% -10% 0 0;
  }
  .square-2 {
    inset: 0 20% 0 0;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    .wrapper {
      flex-direction: column;
    }
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
  h2 {
    white-space: nowrap;
  }
  p {
    margin: 3.5vh 0 6.5vh;
    width: 85%;
    max-width: 800px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    p {
      margin: 2rem 0 0;
      width: auto;
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 3rem;
  align-self: flex-start;
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column-reverse;
    gap: 1.5rem;
    button {
      font-size: 1rem;
      font-weight: 300;
    }
  }
`;

const SkillsBox = styled.div`
  width: 50%;
  margin-bottom: 6.5vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: ${theme.breakpoints.md}) {
    width: 100% !important;
    margin: 0 auto 4rem;
  }
`;

const SkillRow = styled.ul`
  display: flex;
  gap: 3rem;
  width: 90%;
  @media (max-width: ${theme.breakpoints.md}) {
    align-items: center;
    /* width: auto; */
  }
`;

const SingleSkill = styled.span`
  font-size: 1.5rem;
  height: max-content;
  white-space: nowrap;
`;

const PhotoBox = styled.div`
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
    animation-duration: 20s;
    animation-timing-function: step-end;
    animation-iteration-count: infinite;
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
