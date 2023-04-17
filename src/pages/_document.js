import { Html, Head, Main, NextScript } from "next/document";
import styled from "@emotion/styled";
import { theme } from "@/api/theme";

export default function Document() {

  return (
    <Html lang="en">
      <Head />
        <StyledBody>
          <Main />
          <NextScript />
        </StyledBody>
    </Html>
  );
}

const StyledBody = styled.body`
  p {
    color: ${theme.colors.primary};
  }
`;
