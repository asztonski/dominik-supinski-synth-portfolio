import styled from "@emotion/styled";
import Button from "@/components/UI/Button/Button";
import { theme } from "@/api/theme";
import img from "../../../../public/images/about/dominik.png";
import Image from "next/image";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";
import Section from "@/components/Layout/Section/Section";

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
  const { stage, setStage } = useContext(AppContext);

  return (
    <AboutContainer className="bottom">
      <InfoBox>
        <h2>About me</h2>
        <p>
          My name is Dominik Supiński. I create websites and web applications. I
          love exploring new digital horizons. Get to know me through my work.
          Let's create something amazing together!
        </p>
        <SkillsBox>
          <Skills>
            {SKILLS.map((skill, id) => (
              <SkillRow>
                <div key={id} className="skill-title">
                  <span>{skill[0]}</span>
                </div>
                <IconBox key={id}>{renderHandler(skill[1], id)}</IconBox>
              </SkillRow>
            ))}
          </Skills>
        </SkillsBox>
        <Button onClick={() => setStage(stage + 1)} content="SEE PORTFOLIO" />
      </InfoBox>
      <PhotoBox>
        <Image src={img} alt="Photo of Dominik Supinski" />
      </PhotoBox>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled(Section)`
  width: 100%;
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
`;

const SkillsBox = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;

const Skills = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
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
    width: 8rem;
  }
`;

const PhotoBox = styled.div`
  position: relative;
  pointer-events: none;
  width: 50%;
  max-width: 816px;
  img {
    position: absolute;
    bottom: -35%;
    right: 0;
    height: auto;
    width: 60vh;
    max-width: 625px;
  }
`;
