import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  flex: 1;
  border-right: 1px solid #E5E5E5;
  box-sizing: border-box;
  
  @media (max-width: 880px) {
    flex-grow: 0;
    flex-basis: 80px;
    flex-shrink: 0;
    border-right: none;
    border-top: 1px solid #E5E5E5;
  }
`

function Radio () {
  return (
    <Outer>
    </Outer>
  )
}

export default Radio
