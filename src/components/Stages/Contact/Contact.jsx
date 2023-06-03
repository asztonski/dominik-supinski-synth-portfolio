import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import img from "../../../../public/images/contact/dominik_vector.png";
import Image from "next/image";
import Wrapper from "@/components/Layout/Wrapper/Wrapper";
import { contactItems } from "@/api/contact";
import Form from "@/components/UI/Form/Form";

const Contact = () => {
  return (
    <ContactSection className="bottom contact">
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
                    <div
                      className="link-item"
                      dangerouslySetInnerHTML={{ __html: item.link }}
                    />
                  </ContactLink>
                ))}
              </ContactInfo>
            </InfoBox>
            <Form />
          </ContentWrapper>
        </ContactInfoWrapper>
        <PhotoBox>
          <Image src={img} alt="Drawnings of Dominik Supinski" />
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
  /* justify-content: space-between; */
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
  .info-item {
    /* flex-basis: 0;
    flex: 1 1 0px; */
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
