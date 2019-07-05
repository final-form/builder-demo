import React from 'react'
import { Field } from 'react-final-form'
import styled from 'styled-components'
import Textarea from '../Textarea'

export default ({ question }) => (
  <Row>
    <label>{question.text}</label>
    <Field
      name={question.key}
      component={Textarea}
      placeholder={question.placeholder}
    />
  </Row>
)

const Row = styled.div`
  display: flex;
  flex-flow: column nowrap;
  label {
    margin-bottom: 15px;
  }
  textarea {
    border: 1px solid #ccc;
    min-height: 90px;
    padding: 8px;
  }
`
