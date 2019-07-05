import React from 'react'
import { Field } from 'react-final-form'
import styled from 'styled-components'
import Select from '../Select'

export default ({ question }) => (
  <Row>
    <label>{question.text}</label>
    <Field
      name={question.key}
      component={Selector}
      options={
        question.answers
          ? question.answers.map(answer => ({
              value: answer.value,
              label: answer.text
            }))
          : []
      }
      isSearchable={false}
    />
  </Row>
)

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  & > label {
    width: 150px;
    margin-right: 15px;
  }
`

const Selector = styled(Select)`
  flex: 1;
`
