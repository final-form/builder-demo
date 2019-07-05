import React from 'react'
import { Field } from 'react-final-form'
import styled from 'styled-components'

export default ({ question }) => (
  <Row>
    <label>{question.text}</label>
    <Field
      name={question.key}
      component="input"
      type="text"
      placeholder={question.placeholder}
    />
  </Row>
)

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  label {
    width: 150px;
    margin-right: 15px;
    line-height: 32px;
  }
  input {
    padding: 5px 8px;
  }
`
