import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  width: 38.2%;
  min-width: 380px;
  
  @media (max-width: 880px) {
    width: 100%;
    min-width: initial;
    flex: 1;
  }
`

function Chat () {
  return (
    <Outer>
    </Outer>
  )
}

export default Chat

