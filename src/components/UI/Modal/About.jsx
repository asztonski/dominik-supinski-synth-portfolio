import styled from "@emotion/styled";
import { theme } from "@/api/theme";

const AboutContent = ({ content }) => {
  return (
    <AboutModal>
      <h3>{content.heading}</h3>
      {content.copy.map((job) => (
        <div>
          <div>
            <div>
              <p>
                {job.company}
                <span>{job.location}</span>
                <p>{job.title}</p>
              </p>
            </div>
            <p>{job.date}</p>
          </div>
        </div>
      ))}
    </AboutModal>
  );
};

export default AboutContent;

const AboutModal = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  h3 {
    font-size: 4rem;
    margin: 0 0 2rem;
  }
  .copy {
    font-size: 1.25rem;
    .year {
      text-shadow: 1px 1px 1px ${theme.colors.hover} !important;
      font-style: italic;
      position: relative;
      width: max-content;
      margin: 0 2rem;
      &::after,
      &::before {
        content: "";
        position: absolute;
        width: 2%;
        height: 100%;
        top: 0;
        bottom: 0;
        margin: auto;
        border-style: solid;
        border-width: 3px;
        z-index: 1;
      }
      &::after {
        right: -2rem;
        border-left: 1px;
        border-color: ${theme.colors.extra};
      }
      &::before {
        left: -2rem;
        border-right: 1px;
        border-color: ${theme.colors.accent};
      }
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0.5rem;
    padding: 1rem;
    align-items: flex-start;
    h3 {
      margin: 1rem 0;
      font-size: 2.5rem;
    }
    .copy {
      font-size: 1rem;
      margin: 1rem 0;
    }
    .year {
      margin: 0 1rem !important;
      &::after {
        right: -1rem !important;
      }
      &::before {
        left: -1rem !important;
      }
    }
  }
`;
