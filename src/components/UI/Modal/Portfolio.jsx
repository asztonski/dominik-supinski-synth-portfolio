import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import Image from "next/image";

const PortfolioContent = ({ selectedItem }) => {
  return (
    <PortfolioModal>
      <Container>
        <div>
          <h3>{selectedItem.name}</h3>
          <h4 className="year">Year: {selectedItem.year}</h4>
        </div>
        <p>{selectedItem.about}</p>
        <ImageContainer>
          <Image
            alt={selectedItem.alt + "modal"}
            src={selectedItem.asset}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
          />
        </ImageContainer>
        <div>
          <h5 className="technologies">
            Technologies: <i>{selectedItem.technologies}</i>
          </h5>
          <a target="_blank" href={selectedItem.address}>
            Live version
          </a>
        </div>
      </Container>
    </PortfolioModal>
  );
};

export default PortfolioContent;

const PortfolioModal = styled.div`
  padding: 1rem;
  height: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 540px;
  margin: auto;
  gap: 2rem;
  text-align: center;
  h3 {
    font-size: 3rem;
    margin: 0;
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 1.5rem;
    }
  }
  h4 {
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 0.85rem;
    }
  }
  .technologies {
    font-size: 0.8rem;
    padding: 0.5rem 2rem;
    position: relative;
    margin: 0 auto 2rem;
    max-width: 75%;
    text-shadow: 1px 1px 1px ${theme.colors.hover};
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
      border-width: 1px;
      z-index: 1;
    }
    &::after {
      right: 0;
      border-left: 1px;
      border-color: ${theme.colors.extra};
    }
    &::before {
      left: 0;
      border-right: 1px;
      border-color: ${theme.colors.accent};
    }
  }
  a {
    color: ${theme.colors.extra};
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const ImageContainer = styled.div`
  width: 90%;
  aspect-ratio: 1 / 1;
  position: relative;
  img {
    object-fit: cover;
    inset: 0;
    margin: auto;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    width: 75% !important;
    max-width: 400px;
  }
`;
