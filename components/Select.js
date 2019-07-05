import React from 'react'
import ReactSelect from 'react-select'

export default ({ input, ...rest }) => (
  <ReactSelect
    {...input}
    {...rest}
    onChange={option => input.onChange(option.value)}
    value={rest.options.find(option => option.value === input.value)}
  />
)
