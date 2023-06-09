import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import { AppContext } from "@/api/AppContext";
import { useContext } from "react";
import HeaderNav from "@/components/UI/Menu/MenuList";
import BurgerIcon from "@/components/UI/Menu/BurgerIcon";

const Header = () => {
  const { isMobile } = useContext(AppContext);

  return (
    <StyledHeader>
      <HeaderWrapper>
        <img src="images/logo.png" alt="Dominik Supinski's Logo" />
        {/* {!isMobile ? <HeaderNav className="header-nav" /> : <BurgerIcon />} */}
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
    /* justify-content: center; */
    img {
      width: 12.5rem;
    }
  }
`;
