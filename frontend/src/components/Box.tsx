import styled from "styled-components";

type BoxProps = {
  children: React.ReactNode;
  width?: string;
  style?: React.CSSProperties;
};

export default function Box ({children, width, style}: BoxProps) {
  const StyledBox = styled.section`
    width: ${width || 'auto'};
    background: ${({ theme }) => theme.colors.background.secondary};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: 2px;
    box-shadow: 0 0.5px 1px 0 ${({ theme }) => theme.colors.shadow};
  `;

  return (
    <StyledBox style={style}>
      {children}
    </StyledBox>
  )
}