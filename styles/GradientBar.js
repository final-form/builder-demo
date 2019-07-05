import styled, { css } from 'styled-components'
import { primaryDarkest } from '.'

export default styled.hr`
  border: none;
  content: '';
  ${({ color }) => {
    if (!color) {
      color = primaryDarkest
    }
    return css`
      background-image: linear-gradient(
        to right,
        ${color.fade(1)} 0%,
        ${color.fade(0.9)} 20%,
        ${color.fade(0.6)} 50%,
        ${color.fade(0.9)} 90%,
        ${color.fade(1)} 100%
      );
    `
  }};
  display: block;
  height: 2px;
  margin: 15px auto !important;
  width: 80% !important;
`
