import styled from "@emotion/styled";
import CustomButton from "@/components/UI/Button/Button";
import CustomLink from "@/components/UI/Link/StyledLink";
import { theme } from "@/api/theme";
import img from "../../../../public/images/about/dominik.png";
import Image from "next/image";
import { AppContext } from "@/api/AppContext";
import { useContext, useEffect, useState } from "react";
import Wrapper from "@/components/Layout/Wrapper/Wrapper";
import Modal from "@/components/UI/Modal/Modal";
import { aboutCopy } from "@/api/about";
import GlitchSquare from "@/components/Decor/Square/GlitchSquare";

const SKILLS = [
  ["HTML", 4],
  ["CSS", 4],
  ["JavaScript", 3],
  ["React.js", 3],
  ["Next.js", 2],
];

const renderHandler = (colorIcons, id) => {
  const emptyIcons = SKILLS.length - colorIcons;
  const colorIconArr = Array.from({ length: colorIcons });
  const emptyIconArr = Array.from({ length: emptyIcons });

  return [
    ...colorIconArr.map((_, index) => (
      <span key={`colored-icon-${index}`} className="progress-icon colored" />
    )),
    ...emptyIconArr.map((_, index) => (
      <span key={`blank-icon-${index}`} className="progress-icon blank" />
    )),
  ];
};

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
          {isMobile ? (
            <PhotoBox>
              <Image src={img} alt="Photo of Dominik Supinski" />
            </PhotoBox>
          ) : null}
          <SkillsBox>
            <Skills>
              {SKILLS.map((skill, id) => (
                <SkillRow key={id}>
                  <div className="skill-title">
                    <span>{skill[0]}</span>
                  </div>
                  <IconBox>{renderHandler(skill[1], id)}</IconBox>
                </SkillRow>
              ))}
            </Skills>
          </SkillsBox>
          <ButtonsWrapper>
            {!isMobile ? (
              <CustomButton
                onClick={() => setStage(stage + 1)}
                content="see portfolio"
              />
            ) : (
              <CustomLink content="see portfolio" href="#portfolio" />
            )}
            <CustomButton
              onClick={() => (modalHandler(), setModalContent(aboutCopy))}
              content="read bio"
            />
          </ButtonsWrapper>
        </InfoBox>
        {!isMobile ? (
          <PhotoBox>
            <Image src={img} alt="Photo of Dominik Supinski" />
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
      {/* <GlitchSquare translateX={50} translateY={80} order={1} />
      <GlitchSquare translateX={50} translateY={25} delay={15} order={2} /> */}
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
  width: min-content;
  z-index: 1;
  h2 {
    white-space: nowrap;
  }
  p {
    margin: 2rem 0 4rem;
    width: 85%;
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
    }
  }
`;

const SkillsBox = styled.div`
  width: 50%;
  margin-bottom: 4rem;
  @media (max-width: ${theme.breakpoints.md}) {
    width: 100% !important;
    margin: 0 auto 4rem;
  }
`;

const Skills = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  @media (max-width: ${theme.breakpoints.md}) {
    align-items: center;
    /* width: auto; */
  }
`;

const IconBox = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  .progress-icon {
    width: 1rem;
    height: 1rem;
    border: 1px solid ${theme.colors.accent};
    display: block;
    transform: rotate(-45deg);
  }
  .colored {
    background: ${theme.colors.extra};
  }
  @media (max-width: ${theme.breakpoints.md}) {
    gap: 1.25rem;
  }
`;

const SkillRow = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .skill-title {
    span {
      width: 5rem;
      display: block;
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    /* max-width: 360px; */
    width: 100%;
  }
`;

const PhotoBox = styled.div`
  position: relative;
  pointer-events: none;
  width: 50%;
  max-width: 816px;
  img {
    position: absolute;
    inset: 0 0 -10% auto;
    margin: auto 0;
    height: auto;
    width: 60vh;
    max-width: 625px;
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
  }
`;
