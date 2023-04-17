import styled from "@emotion/styled";
import { theme } from "@/api/theme";

const Header = () => {
  return (
    <StyledHeader>
      <a href="">
        <img src="images/logo.png" alt="Dominik Supinski's Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <button>HOME</button>
          </li>
          <li>
            <button>ABOUT</button>
          </li>
          <li>
            <button>PORTFOLIO</button>
          </li>
          <li>
            <button>CONTACT</button>
          </li>
          <li>
            <button>
                <img src="images/icon_mail.png" alt="Mail Icon" />
            </button>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  nav {
    ul {
      display: flex;
      gap: 3rem;
      align-items: center;
      li {
        list-style: none;
        button {
            color: ${theme.colors.accent};
            border: none;
        }
      }
    }
  }
`;
