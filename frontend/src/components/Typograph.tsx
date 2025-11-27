import styled, { css } from "styled-components";

type Variant = "title" | "subtitle" | "body" | "label";

interface TypographyProps {
  variant?: Variant;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const variantStyles = {
  title: css`
    font-size: ${({ theme }) => theme.fonts.sizes.title};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
  `,
  subtitle: css`
    font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
    font-weight: ${({ theme }) => theme.fonts.weights.medium};
  `,
  body: css`
    font-size: ${({ theme }) => theme.fonts.sizes.body};
    font-weight: ${({ theme }) => theme.fonts.weights.regular};
  `,
  label: css`
    font-size: ${({ theme }) => theme.fonts.sizes.label};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
  `,
};

const StyledTypography = styled.p<{ variant: Variant }>`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.default};

  ${({ variant }) => variantStyles[variant]}
`;

export function Typography({ variant = "body", children, style }: TypographyProps) {
  return <StyledTypography variant={variant} style={style}>{children}</StyledTypography>;
}