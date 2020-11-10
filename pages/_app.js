import {createGlobalStyle} from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${styledNormalize}
  
  body {
    font-family: 'Helvetica Neue', arial, sans-serif;
  }
  
  * {
    box-sizing: border-box;
    line-height: 1.3em;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: underline;
    color: #145;
  }

  p {
    line-height: 1.6em;
  }

  strong {
    color: #145;
    font-weight: bold;
  }

  input, textarea, button {
    outline: none;
  }
  
  button {
    cursor: pointer;
  }
`

export default function App({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
