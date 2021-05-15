import React from 'react'
import styled from 'styled-components'

import Button from '../../elements/button'

const Outer = styled.div`
  padding: 24px;
`
const Message = styled.div`
  font-size: 16px;
  color: #757575;
  margin-bottom: 48px;
  line-height: 24px;
`

function Paragraph({paragraph, onClickContinue}) {
  return (
    <Outer>
      <Message>{paragraph}</Message>
      <Button onClick={onClickContinue}>Continue</Button>
    </Outer>
  )
}

export default Paragraph
