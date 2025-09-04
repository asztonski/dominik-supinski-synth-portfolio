import styled from "@emotion/styled";
import { theme } from "@/api/theme";

const AboutContent = ({ content }) => {
  return (
    <AboutModal>
      <h3>{content.heading}</h3>
      {content.copy.map((job, id) => (
        <Container
          style={{
            borderBottom: `${
              id === 0 || id === 1 ? `1px solid ${theme.colors.hover}` : ""
            }`,
          }}
          key={id}
        >
          <Box>
            <Company>
              <p>
                {job.companyUrl ? (
                  <CompanyLink
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${job.company} website`}
                  >
                    {job.company}
                  </CompanyLink>
                ) : (
                  job.company
                )}
                <span>{job.location}</span>
              </p>
              <JobTitle>{job.title}</JobTitle>
            </Company>
            <p>{job.date}</p>
          </Box>

          {job.summary && <Summary>{job.summary}</Summary>}

          <List>
            {job.skills.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </List>
        </Container>
      ))}
    </AboutModal>
  );
};

export default AboutContent;

const AboutModal = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: auto;
  h3 {
    font-size: 4rem;
    text-align: center;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1rem;
    align-items: flex-start;
    h3 {
      margin: 0.25rem 0 0;
      font-size: 2rem;
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

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.25rem;
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const Company = styled.div`
  p {
    display: flex;
    gap: 0.5rem;
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
`;

const CompanyLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const JobTitle = styled.p`
  font-weight: normal !important;
  color: #9f9f9f;
`;

const Summary = styled.p`
  margin: 0.75rem 0 0;
  line-height: 1.7;
`;

const List = styled.ul`
  margin: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  li {
    line-height: 1.6;
  }
`;
