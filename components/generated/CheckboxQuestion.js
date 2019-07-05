import React from 'react'
import { Field } from 'react-final-form'
import styled from 'styled-components'

export default ({ question }) => (
  <Row>
    <span>{question.text}</span>
    <Field name={question.key} component="input" type="checkbox" />
  </Row>
)

const Row = styled.label`
  display: flex;
  flex-flow: row nowrap;
  span {
    width: 150px;
    margin-right: 15px;
  }
  input {
    position: relative;
    top: 5px;
  }
`
