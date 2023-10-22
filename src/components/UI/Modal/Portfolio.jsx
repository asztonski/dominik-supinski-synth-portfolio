import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import Image from "next/image";

const PortfolioContent = ({ selectedItem }) => {
  return (
    <PortfolioModal>
      <h3>{selectedItem.name}</h3>
      <h4 className="year">Year: {selectedItem.year}</h4>
      <p>{selectedItem.about}</p>
      <ImageContainer>
        <Image
          alt={selectedItem.alt + "modal"}
          src={selectedItem.asset}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
        />
      </ImageContainer>
      <h5 className="technologies">
        Technologies: <i>{selectedItem.technologies}</i>
      </h5>
      <a target="_blank" href={selectedItem.address}>
        Live version
      </a>
    </PortfolioModal>
  );
};

export default PortfolioContent;

const PortfolioModal = styled.div`
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
  &.portfolio-modal {
    p {
      text-align: center;
      width: 90%;
    }
    h3 {
      font-size: clamp(2rem, 8vw, 3rem);
    }
    h5 {
      text-align: center;
      padding: 0.5rem 0.25rem !important;
      width: 75%;
    }
  }
`;

const ImageContainer = styled.div`
  width: 45%;
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
