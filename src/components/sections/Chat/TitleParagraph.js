import React from 'react'
import styled from 'styled-components'

import Button from '../../elements/button'

const Outer = styled.div`
  padding: 24px;
`

const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 32px;
  color: #1b1b1b;
`
const Paragraph = styled.div`
  font-size: 16px;
  color: #757575;
  margin-bottom: 48px;
  line-height: 24px;
`

function TitleParagraph({title, paragraph, onClickContinue}) {
  return (
    <Outer>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      <Button onClick={onClickContinue}>Continue</Button>
    </Outer>
  )
}

export default TitleParagraph
