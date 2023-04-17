import styled from "@emotion/styled"
import { theme } from "@/api/theme"

const Button = ({ content }) => {
    return (
        <StyledButton>{content}</StyledButton>
    )
}

export default Button

const StyledButton = styled.button`
    border: 1px solid ${theme.colors.accent};
    padding: 1rem;
`