import React from 'react'
import { Field } from 'react-final-form'
import { SortableElement, SortableHandle } from 'react-sortable-hoc'
import Icon from 'react-fontawesome'
import styled from 'styled-components'
import Textarea from './Textarea'
import SortHandle from './SortHandle'

@SortableElement
export default class Answer extends React.Component {
  render() {
    const { name, remove } = this.props
    return (
      <div>
        <Container>
          <Handle>
            <SortHandle />
          </Handle>
          <Rows>
            <Row>
              <Field
                name={`${name}.value`}
                component="input"
                type="text"
                placeholder="Value"
              />
            </Row>
            <Row>
              <Field
                name={`${name}.text`}
                component={Textarea}
                placeholder="Label"
              />
            </Row>
          </Rows>
          <RemoveButton onClick={remove} />
        </Container>
      </div>
    )
  }
}

const removeButtonSize = 20
const RemoveButton = styled(Icon).attrs({ name: 'trash', fixedWidth: true })`
  color: #800;
  cursor: pointer;
  font-size: ${removeButtonSize}px;
  position: absolute;
  right: -5px;
  top: 50%;
  margin-top: ${removeButtonSize / -2}px;
  opacity: 0.4;
`

const Container = styled.div`
  margin: 5px 0;
  position: relative;
  padding-right: 30px;
  &:hover {
    ${RemoveButton} {
      opacity: 1;
    }
  }
`

const Rows = styled.div`
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

  input,
  textarea {
    font-family: monospace, monospace;
    flex: 1;
    padding: 6px 9px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 3px;
    min-height: 38px;
    line-height: 24px;
    margin-left: 0;
    &[disabled] {
      background: #eee;
    }
  }
`

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const Handle = styled.div`
  position: absolute;
  left: -25px;
  top: 50%;
  font-size: 20px;
  margin-top: -10px;
  color: #666;
`
