import styled from 'styled-components'

export const Button = styled.button`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  padding: ${p => p.theme.space[2]}px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: ${p => p.theme.radii.normal};
  border-width: 0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover, :focus {
    background-color: ${p => p.theme.colors.hover};
  }
`;