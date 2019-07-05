import React from 'react'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'
import Textarea from './Textarea'
import Button from '../styles/Button'
import TextQuestion from './generated/TextQuestion'
import LongTextQuestion from './generated/LongTextQuestion'
import CheckboxQuestion from './generated/CheckboxQuestion'
import OptionGroupQuestion from './generated/OptionGroupQuestion'
import DropdownQuestion from './generated/DropdownQuestion'
import ChecklistQuestion from './generated/ChecklistQuestion'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const components = {
  text: TextQuestion,
  longText: LongTextQuestion,
  checkbox: CheckboxQuestion,
  optionGroup: OptionGroupQuestion,
  checklist: ChecklistQuestion,
  dropdown: DropdownQuestion
}

export default class GeneratedForm extends React.Component {
  render() {
    const {
      schema: { name, questions }
    } = this.props
    return (
      <Container>
        <Title>{name}</Title>
        <Form onSubmit={onSubmit}>
          {({ handleSubmit, values, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Questions>
                {questions &&
                  questions
                    .filter(question => question.key && question.type)
                    .map((question, index) => {
                      const QuestionComponent = components[question.type]
                      return (
                        question.key && (
                          <QuestionComponent key={index} question={question} />
                        )
                      )
                    })}
              </Questions>
              <Buttons>
                <Button
                  secondary
                  type="submit"
                  disabled={submitting || pristine}
                >
                  Submit
                </Button>
              </Buttons>
              <Dump>{JSON.stringify(values, 0, 2)}</Dump>
            </form>
          )}
        </Form>
      </Container>
    )
  }
}

const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`
const Questions = styled.div`
  display: flex;
  flex-flow: column nowrap;
  & > * {
    margin: 3px 2px;
    border-top: 1px solid #eee;
    padding: 5px;
    &:last-of-type {
      border-bottom: 1px solid #eee;
    }
  }
`

const Title = styled.h2`
  display: block;
  text-align: center;
`

const Row = styled.div``

const Question = styled.div`
  font-weight: bold;
`

const Buttons = styled.div`
  padding: 10px;
  text-align: center;
`

const Dump = styled.pre`
  border: 1px solid #ccc;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
  overflow: auto;
`
