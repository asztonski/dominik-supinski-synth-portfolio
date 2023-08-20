/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import CustomButton from "@/components/UI/Button/Button";
import CustomLink from "@/components/UI/Link/StyledLink";
import { theme } from "@/api/theme";
import { AppContext } from "@/api/AppContext";
import { useContext, useEffect, useState } from "react";
import Wrapper from "@/components/Layout/Wrapper/Wrapper";
import Modal from "@/components/UI/Modal/Modal";
import { aboutCopy } from "@/api/about";
import Slider from "react-slick";
import PhotoBox from "@/components/Layout/Container/PhotoBox";

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

const skillRows = Array.from({ length: 3 }, (_, id) => id);

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
          {isMobile ? <PhotoBox /> : null}
          <SkillsBox>
            {/* {skillRows.map((skill, id) => {
              const shuffledSkills = shuffleArray(SKILLS);
              return (
                <SkillRow key={id}>
                  {shuffledSkills.map((singleSkill, index) => (
                    <SingleSkill key={index}>{singleSkill}</SingleSkill>
                  ))}
                </SkillRow>
              );
            })} */}
          </SkillsBox>
          <ButtonsWrapper>
            {!isMobile ? (
              <CustomButton
                onClick={() => setStage(stage + 1)}
                content="see portfolio"
                tabIndex={stage !== 2 ? -1 : 8}
              />
            ) : (
              <CustomLink content="see portfolio" href="#portfolio" />
            )}
            <CustomButton
              onClick={() => (modalHandler(), setModalContent(aboutCopy))}
              content="read bio"
              tabIndex={stage !== 2 ? -1 : 7}
            />
          </ButtonsWrapper>
        </InfoBox>
        {!isMobile ? <PhotoBox /> : null}
        {isModalRendered ? (
          <Modal
            id="about-modal"
            style={{ opacity: `${isModalOpen ? 1 : 0}` }}
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
  width: 50%;
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
  @media (max-width: ${theme.breakpoints.md}) {
    align-items: center;
  }
`;

const SingleSkill = styled.span`
  font-size: 1.5rem;
  height: max-content;
  white-space: nowrap;
`;
