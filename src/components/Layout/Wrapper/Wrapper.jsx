import styled from "@emotion/styled";

const Wrapper = ({ children, style }) => {
  return (
    <StyledWrapper style={style} className="wrapper">
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;

const StyledWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
