const { default: styled } = require("@emotion/styled")

const Footer = () => {
    return (
        <StyledFooter>
            <p>webdread © 2020r.</p>
            <p>version 1.0</p>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-shrink: 0;
    text-transform: uppercase;
`