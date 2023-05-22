import styled from "@emotion/styled";
import NavBar from "@/components/UI/NavBar/NavBar";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-item">
        <p>webdread © 2023r.</p>
      </div>
      <NavBar />
      <div className="footer-item">
        <p>version 1.0</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  width: 100%;
  padding: 0 2rem;
  z-index: 1;
  .footer-item {
    flex: 1;
    display: flex;
    :first-child {
      margin-left: auto;
      justify-content: flex-start;
    }
    :last-child {
      margin-right: auto;
      justify-content: flex-end;
    }
  }
`;
