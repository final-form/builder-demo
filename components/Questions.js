import React from 'react'
import { FieldArray } from 'react-final-form-arrays'
import Icon from 'react-fontawesome'
import styled from 'styled-components'
import { SortableContainer } from 'react-sortable-hoc'
import Button from '../styles/Button'
import Question from './Question'
import SortableList from './SortableList'

@SortableContainer
export default class Questions extends React.Component {
  onSortEnd = info => console.info(info)

  render() {
    return (
      <Container>
        <FieldArray name="questions">
          {({ fields }) => (
            <React.Fragment>
              <SortableList
                lockAxis="y"
                useDragHandle
                onSortEnd={({ oldIndex, newIndex }) =>
                  fields.move(oldIndex, newIndex)
                }
              >
                {fields.map((name, index) => (
                  <Question key={name} index={index} name={name} />
                ))}
              </SortableList>
              <Buttons>
                <Button
                  secondary
                  type="button"
                  onClick={() => fields.push({ type: 'text' })}
                >
                  <Icon name="plus" /> Add Question
                </Button>
              </Buttons>
            </React.Fragment>
          )}
        </FieldArray>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 20px 0;
`

const Buttons = styled.div`
  padding: 10px;
  text-align: center;
`
