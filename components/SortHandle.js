import React from 'react'
import { SortableHandle } from 'react-sortable-hoc'
import Icon from 'react-fontawesome'

@SortableHandle
export default class SortHandle extends React.Component {
  render() {
    return (
      <Icon
        name="bars"
        style={{ cursor: 'move' }}
        onClick={e => e.stopPropagation()}
      />
    )
  }
}
