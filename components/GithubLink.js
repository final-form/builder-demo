import React from 'react'
import Icon from 'react-fontawesome'
import styled from 'styled-components'

export default function GithubLink() {
  return (
    <Link href="https://github.com/final-form/builder-demo" target="_blank">
      <Icon name="github" />
    </Link>
  )
}

const Link = styled.a`
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 35px;
  color: #333;
  z-index: 10;
`
