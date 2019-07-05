import { css } from 'styled-components'
import createTheme from 'styled-components-theme'

// http://colorschemedesigner.com/csd-3.5/#0U22.w0w0w0w0
export const colors = {
  danger: '#d9534f', // from bootstrap
  success: '#5cb85c', // from bootstrap
  medium: '#1f93b2',
  primary: '#FFA500',
  primaryDarker: '#BF8D30',
  primaryDarkest: '#A66C00',
  primaryLighter: '#FFBC40',
  primaryLightest: '#FFCE73',
  secondary: '#1047A9',
  secondaryDarker: '#29477F',
  secondaryDarkest: '#052A6E',
  secondaryLighter: '#4577D4',
  secondaryLightest: '#6B90D4'
}

// Theme Colors
export const {
  danger,
  medium,
  success,
  primary,
  primaryDarker,
  primaryDarkest,
  primaryLighter,
  primaryLightest,
  secondary,
  secondaryDarker,
  secondaryDarkest,
  secondaryLighter,
  secondaryLightest
} = createTheme(...Object.keys(colors))

export const maxWidth = 1170

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}
sizes.phablet = Math.floor((sizes.tablet + sizes.phone) / 2)

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const fill = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const aspectRatio = (width, height) => css`
  position: relative;
  &:before {
    display: block;
    content: '';
    padding: ${height / width * 100}% 0 0 0 !important;
  }
  > .content {
    ${fill};
  }
`

export const error = css`
  color: #600;
  font-style: normal;
  font-weight: bold;
  text-align: left;
  padding: 10px;
`
