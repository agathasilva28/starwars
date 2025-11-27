import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fonts.sizes.body};
  border-radius: 17px;
  cursor: pointer;
`;

export default function Button ({children, onClick, style}: ButtonProps) {
  return (
    <StyledButton onClick={onClick} style={style}>
      {children}
    </StyledButton>
  )
}