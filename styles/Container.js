import styled from 'styled-components'
import { maxWidth, media } from '.'

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${maxWidth}px;
  padding: 0 20px;
  ${media.desktop`padding: 0 18px;`}
  ${media.tablet`padding: 0 18px;`}
  ${media.phablet`padding: 0 10px;`}
  ${media.phone`padding: 0 6px;`}
`

export default Container
