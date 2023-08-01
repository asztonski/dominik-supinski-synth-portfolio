import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import Wrapper from "@/components/Layout/Wrapper/Wrapper";
import { contactItems } from "@/api/contact";
import Form from "@/components/UI/Form/Form";
import ContactSvg from "@/assets/svg/ContactSvg";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { AppContext } from "@/api/AppContext";

const Contact = ({ id, observer }) => {
  const [svgEl, isSvgElInView] = useInView({
    threshold: 0.5,
  });

  const { stage } = useContext(AppContext);

  return (
    <ContactSection ref={observer} id={id} className="bottom contact">
      <Wrapper>
        <ContactInfoWrapper>
          <TitleBox>
            <h2>Contact</h2>
          </TitleBox>
          <ContentWrapper>
            <InfoBox>
              <p>Contact me. Let's create something amazing together!</p>
              <ContactInfo>
                {contactItems.map((item, id) => (
                  <ContactLink key={id}>
                    <span>{item.name}</span>
                    <div className="link-item">
                      {item.isLink && item.isMail === false ? (
                        <a
                          tabIndex={stage !== 4 ? "-1" : item.tabIndex}
                          target="_blank"
                          href={item.link}
                        >
                          {item.text}
                        </a>
                      ) : item.isLink && item.isMail ? (
                        <a
                          tabIndex={stage !== 4 ? "-1" : item.tabIndex}
                          href={`mailto:${item.link}`}
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </div>
                  </ContactLink>
                ))}
              </ContactInfo>
            </InfoBox>
            <Form />
          </ContentWrapper>
        </ContactInfoWrapper>
        <PhotoBox>
          <ContactSvg inView={isSvgElInView} observer={svgEl} />
        </PhotoBox>
      </Wrapper>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  @media (max-width: ${theme.breakpoints.md}) {
    .wrapper {
      flex-direction: column !important;
    }
  }
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  gap: 2rem;
`;

const TitleBox = styled.div`
  h2 {
    white-space: nowrap;
    font-size: clamp(3rem, 8vw, 10rem);
    padding-right: 4rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  p {
    width: 75%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const ContactLink = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;
  text-transform: uppercase;
  gap: 2.5rem;
  span {
    min-width: 4rem;
  }
  .link-item {
    color: ${theme.colors.accent};
    font-weight: bold;
    letter-spacing: 1px;
    width: 80%;
    white-space: nowrap;
    * {
      transition: 0.2s ease;
      &:hover {
        color: ${theme.colors.hover};
      }
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    gap: 0;
    .link-item {
      width: auto;
    }
  }
`;

const PhotoBox = styled.div`
  position: relative;
  pointer-events: none;
  width: 50%;
  max-width: 816px;
  svg {
    position: absolute;
    inset: 0 0 -20% auto;
    margin: auto 0;
    height: auto;
    width: 60vh;
    max-width: 625px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    align-self: center;
    width: 75% !important;
    max-width: 250px !important;
    margin: 2rem 0 0;
    svg {
      position: unset;
      width: 100%;
    }
  }
`;
