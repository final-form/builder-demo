import React from 'react'
import styled from 'styled-components'

export default ({ children, ...rest }) => (
  <Column {...rest}>
    <Row>{children}</Row>
  </Column>
)

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`
