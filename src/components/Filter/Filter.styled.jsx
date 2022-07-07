import styled from 'styled-components'

export const Label = styled.label`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.primary};
`
    
export const Input = styled.input`
  min-width: ${p => p.theme.sizes.s};
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus {
  border-color: ${p => p.theme.colors.accent};
}
`