import React from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { colors } from '../styles'
import Icon from 'react-fontawesome'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import Questions from '../components/Questions'
import Button from '../styles/Button'
import GradientBar from '../styles/GradientBar'
import GeneratedForm from '../components/GeneratedForm'
import GithubLink from '../components/GithubLink'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
        <Container>
          <GithubLink />
          <Header>
            Demo built with{' '}
            <a
              href="https://github.com/final-form/react-final-form#-react-final-form"
              target="_blank"
            >
              🏁 React Final Form
            </a>
          </Header>
          <Form
            onSubmit={() => {}}
            initialValues={
              {
                // name: 'My Form',
                // questions: [
                //   {
                //     type: 'text',
                //     key: 'firstName',
                //     text: 'First Name',
                //     placeholder: 'First Name'
                //   },
                //   {
                //     type: 'longText',
                //     key: 'essay',
                //     text: 'Essay',
                //     placeholder: 'Type your essay here'
                //   },
                //   {
                //     type: 'checkbox',
                //     key: 'employed',
                //     text: 'Employed?'
                //   },
                //   {
                //     type: 'dropdown',
                //     key: 'favoriteColor',
                //     text: 'What is your favorite color?',
                //     answers: [
                //       {
                //         value: 'red',
                //         text: 'Red'
                //       },
                //       {
                //         text: 'Blue',
                //         value: 'blue'
                //       },
                //       {
                //         text: 'Green',
                //         value: 'green'
                //       }
                //     ]
                //   }
                // ]
              }
            }
            mutators={{
              ...arrayMutators
            }}
            render={({
              handleSubmit,
              reset,
              submitting,
              form: {
                mutators: { push, pop } // injected from final-form-arrays above
              },
              pristine,
              values
            }) => (
              <Columns>
                <form onSubmit={handleSubmit}>
                  <h3>Editor</h3>
                  <GradientBar />
                  <Row>
                    <label>Form Name</label>
                    <Field
                      name="name"
                      component="input"
                      type="text"
                      placeholder="Form Name"
                      style={{ width: '100%' }}
                    />
                  </Row>
                  <Questions />
                </form>
                <div>
                  <h3>Schema</h3>
                  <GradientBar />
                  <Dump>{JSON.stringify(values, 0, 2)}</Dump>
                </div>
                <div>
                  <h3>Generated Form</h3>
                  <GradientBar />
                  <GeneratedForm schema={values} />
                </div>
              </Columns>
            )}
          />
        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  h3 {
    text-align: center;
    color: #333;
  }
`

const Header = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  margin: 5px;
  text-align: center;
  color: #333;
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Columns = styled.div`
  display: flex;
  flex-flow: row;
  height: 100vh;
  padding-top: 50px;
  & > * {
    flex: 1;
    margin: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    padding: 20px;
    overflow-y: auto;
  }
`

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  & > label {
    width: 20%;
    line-height: 32px;
    white-space: nowrap;
    margin-right: 10px;
  }
  input {
    padding: 5px 8px;
  }
`

const Buttons = styled.div`
  padding: 10px;
  text-align: center;
`

const Dump = styled.pre`
  border: 1px solid #ccc;
  font-size: 0.8em;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
  overflow: auto;
`
