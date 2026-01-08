/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import CustomButton from "@/components/UI/Button/Button";
import CustomLink from "@/components/UI/Link/StyledLink";
import { theme } from "@/api/theme";
import { AppContext } from "@/api/AppContext";
import Wrapper from "@/components/Layout/Wrapper/Wrapper";
import Modal from "@/components/UI/Modal/Modal";
import { aboutCopy } from "@/api/about";
import { HorizontalTicker } from "react-infinite-ticker";
import PhotoBox from "@/components/Layout/Container/PhotoBox";

const FRONTEND_SKILLS = [
  "React",
  "TypeScript",
  "Tailwind",
  "Next.js",
  "Figma",
  "Vite",
  "Storybook",
];

const BACKEND_SKILLS = [
  "Node.js",
  "Express",
  "Mongoose",
  "REST",
  "GraphQL",
  "Node.js",
  "Express",
  "CQRS",
];

const OTHER_SKILLS = [
  "MongoDB",
  "Testing: TDD, A/B testing, Unit tests, Integration tests",
  "CI/CD",
  "Gitflow",
  "Agile: Scrum, Kanban",
  "AI tools",
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let length = shuffled.length - 1; length > 0; length--) {
    const randomNumber = Math.floor(Math.random() * (length + 1));
    [shuffled[length], shuffled[randomNumber]] = [
      shuffled[randomNumber],
      shuffled[length],
    ];
  }
  return shuffled;
};

const SKILL_GROUPS = [FRONTEND_SKILLS, BACKEND_SKILLS, OTHER_SKILLS];

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
  const [shuffledSkillsArray, setShuffledSkillsArray] = useState([]);

  useEffect(() => {
    const newShuffledSkillsArray = SKILL_GROUPS.map((skillGroup) =>
      shuffleArray(skillGroup)
    );
    setShuffledSkillsArray(newShuffledSkillsArray);
  }, []);

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
            I'm Dominik — I build production-ready SaaS apps and websites. I
            love exploring new digital horizons. Get to know me through my work.
            Let's create something exceptional together!{" "}
            {/* <br className="desktop" /> */}
            <a href="/reference_letter.pdf" download="Reference-letter.pdf">
              [ Reference letter ]
            </a>
            <a
              href="Dominik_Supinski_-_CV_-_2026.pdf"
              download="Dominik_Supinski_-_CV_-_2026.pdf"
            >
              [ Resume ]
            </a>
          </p>

          {isMobile ? <PhotoBox /> : null}
          <SkillsBox>
            {shuffledSkillsArray.map((shuffledSkills, id) => (
              <SkillRow key={id}>
                <p>
                  {id === 0
                    ? "frontend:"
                    : id === 1
                    ? "backend:"
                    : "other skills:"}
                </p>
                <HorizontalTicker
                  key={id}
                  reverse={id === 1 ? true : false}
                  duration={10000}
                >
                  {shuffledSkills.map((singleSkill, index) => (
                    <SingleSkill key={index}>{singleSkill}</SingleSkill>
                  ))}
                </HorizontalTicker>
              </SkillRow>
            ))}
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
  gap: 2.5rem;
  h2 {
    white-space: nowrap;
  }
  p {
    width: 85%;
    max-width: 800px;
    a {
      color: ${theme.colors.extra};
      position: relative;
      font-weight: bold;
      font-style: italic;
      white-space: nowrap;
      /* text-decoration: underline; */
      text-shadow: 1px 1px 1px ${theme.colors.accent};
      text-transform: uppercase;
      /* :after {
        content: "";
        height: 2px;
        width: 0;
        position: absolute;
        left: 2px;
        top: 135%;
        transition: 0.74s ease;
        background: ${theme.colors.extra};
        z-index: 99;
        opacity: 1 !important;
      }
      :hover:after {
        width: 96%;
      } */
      :nth-child(2) {
        margin-left: 0.5rem;
      }
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    gap: 1rem;
    overflow: hidden;
    p {
      margin: 2rem 0 0;
      width: auto;
      padding-right: 4px;
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
  margin-bottom: 3.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: ${theme.breakpoints.md}) {
    div {
      width: 200% !important;
      max-width: unset;
      position: relative;
    }
  }
`;

const SkillRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  @media (max-width: ${theme.breakpoints.md}) {
    gap: 0.35rem;
  }
  p {
    width: auto !important;
    white-space: nowrap;
    text-transform: uppercase;
    margin: 0;
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 0.65rem;
    }
  }
`;

const SingleSkill = styled.span`
  font-size: 1.5rem;
  height: max-content;
  white-space: nowrap;
  font-style: italic;
  padding: 0 1rem;
  /* text-shadow: -0.0625rem -0.0625rem 0 ${theme.colors.hover},
    0.0625rem 0.0625rem 0 ${theme.colors.accent}; */
  text-shadow: 1px 1px 1px ${theme.colors.hover};
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
