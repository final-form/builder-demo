import styled, { css } from 'styled-components'
import { primary, secondary, danger, success } from '.'

const makeButtonColor = color => css`
  color: white !important;
  &:visited {
    color: white !important;
  }
  background-image: linear-gradient(
    ${color.lighten(0.1)},
    ${color.darken(0.1)}
  ) !important;
  border: 1px solid ${color.darken(0.1)};
  &:hover {
    background-image: linear-gradient(${color.lighten(0.15)}, ${color});
    &[disabled] {
      background-image: linear-gradient(
        ${color.lighten(0.1)},
        ${color.darken(0.1)}
      ) !important;
    }
  }
`
const colorStyles = {
  primary: makeButtonColor(primary),
  secondary: makeButtonColor(secondary),
  danger: makeButtonColor(danger),
  success: makeButtonColor(success)
}

const Button = styled.button`
  white-space: nowrap;
  display: inline-block;
  @include myriad-pro;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-image: linear-gradient(#eee, #ddd);
  font-weight: bold;
  text-decoration: none;
  line-height: 1.3em;
  color: #222;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(#ddd, #ccc);
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  ${props => props.primary && colorStyles.primary};
  ${props => props.secondary && colorStyles.secondary};
  ${props => props.danger && colorStyles.danger};
  ${props => props.success && colorStyles.success};
  ${props =>
    props.mini
      ? css`
          padding: 5px 10px;
          font-size: 15px;
        `
      : css`
          padding: 10px 15px;
          font-size: 20px;
        `};
`
export default Button
