import styled from "@emotion/styled";
import NavBar from "@/components/UI/NavBar/NavBar";
import { theme } from "@/api/theme";
import { useContext } from "react";
import { AppContext } from "@/api/AppContext";

const Footer = () => {
  const { isMobile, isModalOpen } = useContext(AppContext);

  return (
    <StyledFooter style={{ zIndex: `${isModalOpen ? "0" : "3"}` }}>
      <FooterWrapper>
        <div className="footer-item">
          <p>webdread © 2023 </p>
        </div>
        {!isMobile ? <NavBar className="nav-bar" /> : null}
        <div className="footer-item">
          <p>version 1.0</p>
        </div>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  padding: 0 2rem;
  @media (max-width: ${theme.breakpoints.md}) {
    background: black;
    bottom: 0;
    margin-top: 0.5rem;
    padding: 0;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  width: 100%;
  z-index: 1;
  flex-shrink: 0;
  .footer-item,
  .nav-bar {
    flex: 1;
  }
  .footer-item {
    &:last-of-type {
      p {
        width: max-content;
        margin: auto 0 auto auto;
      }
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1rem;
  }
`;
