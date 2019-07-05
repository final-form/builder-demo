import React from 'react'
import { FieldArray } from 'react-final-form-arrays'
import Icon from 'react-fontawesome'
import styled from 'styled-components'
import Button from '../styles/Button'
import Answer from './Answer'
import SortableList from './SortableList'

export default class Answers extends React.Component {
  render() {
    return (
      <Container>
        <FieldArray name={`${this.props.name}.answers`}>
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
                  <Answer
                    key={name}
                    index={index}
                    name={name}
                    remove={() => fields.remove(index)}
                  />
                ))}
              </SortableList>
              <Buttons>
                <Button secondary type="button" onClick={() => fields.push({})}>
                  <Icon name="plus" /> Add Answer
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
  margin: 10px 0;
  padding-left: 20px;
`

const Buttons = styled.div`
  padding: 10px;
  text-align: center;
`
