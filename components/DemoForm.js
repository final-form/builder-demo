import React from 'react'
import RenderCount from './RenderCount'
import { FORM_ERROR } from 'final-form'
import { Form, Field } from 'react-final-form'
import showResults from './showResults'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 4) {
    errors.firstName = 'Too long'
  }
  return errors
}
const onSubmit = values => {
  const errors = {}
  if (values.firstName && values.firstName.length < 2) {
    errors[FORM_ERROR] = 'TOO SHORT'
  }
  if (Object.keys(errors).length || errors[FORM_ERROR]) {
    return errors
  } else {
    showResults(values)
  }
}

const renderInput = ({ meta, input, label }) =>
  <div>
    <label>
      {label} <RenderCount />
    </label>
    <input {...input} placeholder={label} />
    {meta.touched &&
      meta.error &&
      <span>
        {meta.error}
      </span>}
  </div>

const DemoForm = () =>
  <Form
    onSubmit={onSubmit}
    validate={validate}
    subscription={{ pristine: true, valid: true }}
    render={({ handleSubmit, ...rest }) =>
      <form onSubmit={handleSubmit}>
        <RenderCount />
        <Field name="firstName" render={renderInput} label="First Name" />
        <Field name="lastName" render={renderInput} label="Last Name" />
        <button type="submit">Submit</button>
        <pre>
          {JSON.stringify(rest, 0, 2)}
        </pre>
      </form>}
  />

export default DemoForm
