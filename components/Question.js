import React from 'react'
import { Field } from 'react-final-form'
import styled from 'styled-components'
import Icon from 'react-fontawesome'
import { SortableElement } from 'react-sortable-hoc'
import SortHandle from './SortHandle'
import Select from './Select'
import WhenFieldChanges from './WhenFieldChanges'
import Textarea from './Textarea'
import Answers from './Answers'

const types = [
  {
    value: 'text',
    label: 'Text'
  },
  {
    value: 'longText',
    label: 'Long Text'
  },
  {
    value: 'checkbox',
    label: 'Checkbox'
  },
  {
    value: 'optionGroup',
    label: 'Option Group'
  },
  {
    value: 'checklist',
    label: 'Checklist'
  },
  {
    value: 'dropdown',
    label: 'Drop Down'
  }
]
const hasOptions = type =>
  ~['optionGroup', 'checklist', 'dropdown'].indexOf(type)
const isText = type => ~['text', 'longText'].indexOf(type)

const IfType = ({ name, children, predicate }) => (
  <Field name={`${name}.type`} subscription={{ value: true }}>
    {({ input: { value } }) => (predicate(value) ? children : null)}
  </Field>
)

@SortableElement
export default class Question extends React.Component {
  state = {
    open: true
  }

  toggleOpen = event => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const { name } = this.props
    const { open } = this.state
    return (
      <div>
        <Container>
          <Handle>
            <SortHandle />
          </Handle>
          <Toggle
            title={open ? 'Collapse' : 'Expand'}
            name={open ? 'chevron-down' : 'chevron-right'}
            onClick={this.toggleOpen}
          />
          <Row>
            <Field
              name={`${name}.key`}
              component="input"
              type="text"
              placeholder="Field Name"
            />
            <Field
              name={`${name}.type`}
              component={TypeSelector}
              options={types}
              isSearchable={false}
            />
            <WhenFieldChanges
              field={`${name}.type`}
              becomes="text"
              set={`${name}.answers`}
              to={undefined}
            />
          </Row>
          <Row>
            <Field
              name={`${name}.text`}
              component={Textarea}
              placeholder="Question"
            />
          </Row>
          {open && (
            <React.Fragment>
              <IfType name={name} predicate={hasOptions}>
                <Answers name={name} />
              </IfType>
              <IfType name={name} predicate={isText}>
                <Row>
                  <Field
                    name={`${name}.placeholder`}
                    component={Textarea}
                    placeholder="Placeholder"
                  />
                </Row>
              </IfType>
            </React.Fragment>
          )}
        </Container>
      </div>
    )
  }
}

const Container = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px 10px 10px 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;

  input,
  textarea {
    font-family: monospace, monospace;
    flex: 1;
    padding: 6px 9px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 3px;
    &[disabled] {
      background: #eee;
    }
  }

  & > input {
    margin: 0;
  }
  & > textarea {
    min-height: 38px;
    line-height: 24px;
    margin-left: 0;
    margin-right: 3px;
  }
`
const TypeSelector = styled(Select)`
  width: 150px;
`

const Toggle = styled(Icon)`
  position: absolute;
  top: -15px;
  left: 5px;
  width: 20px;
  margin-right: 5px;
  margin-top: 20px;
`

const Handle = styled.div`
  position: absolute;
  left: 3px;
  top: 50%;
  font-size: 20px;
  margin-top: -10px;
  color: #666;
`
