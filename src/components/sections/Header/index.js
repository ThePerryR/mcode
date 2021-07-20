import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'

import modalStyles from '../../../utils/styles/modalStyles'
import Login from '../../modals/Login'
import Register from '../../modals/Register'
import Button from '../../elements/button'

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

const Row = styled.div`
  display: flex;
  margin-left: -8px;
  margin-right: -8px;
`
const Link = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`

function Header ({user}) {
  const [loginOpen, setLoginOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)

  async function logout () {
    await user.logOut()
    window.location.reload()
  }

  return (
    <React.Fragment>
      <Outer>
        <Logo><b>Morse</b>code</Logo>
        <div style={{ flex: 1 }}/>
        {!user &&
        <Row>
          <Link onClick={() => setLoginOpen(true)}>Login</Link>
          <Link onClick={() => setRegisterOpen(true)}>Register</Link>
        </Row>
        }
        {user &&
        <Row>
          <Button secondary small onClick={logout}>Logout</Button>
        </Row>
        }
      </Outer>
      <Modal
        style={modalStyles}
        isOpen={loginOpen}
        onRequestClose={() => setLoginOpen(false)}>
        <Login/>
      </Modal>
      <Modal
        style={modalStyles}
        isOpen={registerOpen}
        onRequestClose={() => setRegisterOpen(false)}>
        <Register/>
      </Modal>
    </React.Fragment>
  )
}

export default Header
