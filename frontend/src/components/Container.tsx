import styled from "styled-components";

type ContainerProps = {
  children: React.ReactNode;
};

const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
`;

export default function Container ({children}: ContainerProps) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}