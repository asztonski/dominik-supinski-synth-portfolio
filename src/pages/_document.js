import { Html, Head, Main, NextScript } from "next/document";
import styled from "@emotion/styled";
import { theme } from "@/api/theme";
import { useEffect } from "react";

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
  color: ${theme.colors.primary};
`;
