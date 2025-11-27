import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.containers.header};
  background: ${({ theme }) => theme.colors.background.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md}
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes.logo};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary}
`;

export default function Header () {
  return (
    <StyledHeader>
      <Logo>SWStarter</Logo>
    </StyledHeader>
  )
}