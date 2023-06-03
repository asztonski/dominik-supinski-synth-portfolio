import styled from "@emotion/styled";
import CustomButton from "@/components/UI/Button/Button";
import { theme } from "@/api/theme";
import img from "../../../../public/images/about/dominik.png";
import Image from "next/image";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";
import Wrapper from "@/components/Layout/Wrapper/Wrapper";

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

const About = () => {
  const { stage, setStage, isMobile } = useContext(AppContext);

  return (
    <AboutSection className="bottom">
      <Wrapper>
        <InfoBox>
          <h2>About me</h2>
          <p>
            My name is Dominik and I like to create websites and web apps. I
            love exploring new digital horizons. Get to know me through my work.
            Let's create something amazing together!
          </p>
          {isMobile && (
            <PhotoBox>
              <Image src={img} alt="Photo of Dominik Supinski" />
            </PhotoBox>
          )}
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
          <CustomButton
            onClick={() => setStage(stage + 1)}
            content="SEE PORTFOLIO"
          />
        </InfoBox>
        {!isMobile && (
          <PhotoBox>
            <Image src={img} alt="Photo of Dominik Supinski" />
          </PhotoBox>
        )}
      </Wrapper>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  width: 100%;
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
  }
  @media (max-width: ${theme.breakpoints.md}) {
    p {
      margin: 2rem 0 0;
    }
  }
`;

const SkillsBox = styled.div`
  width: 75%;
  margin-bottom: 4rem;
`;

const Skills = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  @media (max-width: ${theme.breakpoints.md}) {
    align-items: center;
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
    max-width: 360px;
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
    margin: 1rem 0 3rem;
    img {
      position: unset;
      width: 100%;
      inset: 0;
    }
  }
`;
