import { Typography } from './Typograph'
import styled, { useTheme } from 'styled-components';

export default function Message({children}: {children?: React.ReactNode}) {
  const theme = useTheme();
  const StyledSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `;

  return (
    <StyledSection>
      <Typography style={{ fontWeight: theme.fonts.weights.bold, color: theme.colors.text.disabled, textAlign: 'center' }}>
        {children}
      </Typography>
    </StyledSection>
  )
}