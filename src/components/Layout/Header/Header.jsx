import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import HeaderNav from "@/components/UI/Menu/MenuList";
import Link from "next/link";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";

const Header = () => {
  const { setStage, isMobile } = useContext(AppContext);

  const logoLinkHandler = (e) => {
    if (!isMobile) {
      e.preventDefault();
      setStage(1);
    } else {
      window.location.hash = "";
      window.history.replaceState({}, document.title, window.location.pathname);
      window.location.reload();
    }
  };

  return (
    <StyledHeader>
      <HeaderWrapper>
        <Link
          onClick={(e) => logoLinkHandler(e)}
          className="logo-link"
          href="/"
        >
          <img src="images/logo.png" alt="Dominik Supinski's Logo" />
        </Link>
        <HeaderNav className="header-nav" />
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  padding: 0 2rem;
  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    background: black;
    z-index: 10;
    width: 100%;
    padding: 0;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
  img {
    z-index: 2;
  }
  .header-nav {
    .stage-1 {
      transform: translateX(-40%);
    }
    .stage-2 {
      transform: translateX(-29%);
    }
    .stage-3 {
      transform: translateX(-16%);
    }
    .stage-4 {
      transform: translateX(-5%);
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1rem;
    img {
      width: 12.5rem;
    }
  }
`;
