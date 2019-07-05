import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'

@SortableContainer
export default class SortableList extends React.Component {
  onSortEnd = info => {
    console.info('sort end', info)
    this.props.onSortEnd(info)
  }
  render() {
    return <div>{this.props.children}</div>
  }
}
