import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  border-bottom: 1px solid #E5E5E5;
  box-sizing: border-box;
  padding-left: 32px;
  padding-right: 32px;
  
  @media (max-width: 880px) {
    height: 56px;
  }
`

const Logo = styled.div`
  font-size: 15px;
`

function Header() {
  return (
    <Outer>
      <Logo><b>Morse</b>code</Logo>
    </Outer>
  )
}

export default Header
