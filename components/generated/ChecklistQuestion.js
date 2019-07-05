import React from 'react'
import { Field } from 'react-final-form'
import styled from 'styled-components'

export default ({ question }) => (
  <Row>
    <label>{question.text}</label>
    <div>
      {question.answers &&
        question.answers.map(
          (answer, index) =>
            answer.value &&
            answer.text && (
              <label key={index}>
                <Field
                  name={question.key}
                  value={answer.value}
                  component="input"
                  type="checkbox"
                />
                {answer.text}
              </label>
            )
        )}
    </div>
  </Row>
)

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  & > label {
    width: 150px;
    margin-right: 15px;
  }
  & > div > label {
    display: block;
    margin: 5px 0;
    & > input {
      margin-right: 10px;
    }
  }
`
