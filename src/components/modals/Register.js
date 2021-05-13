import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../elements/button'

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px;  
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 24px;

`
const SubTitle = styled.div`
  color: #a0a0a0;
  font-size: 15px;
  margin-bottom: 40px;
`
const Form = styled.div`
  min-width: 256px;
  width: 100%;
`
const Label = styled.div`
  color: #a0a0a0;
  font-size: 13px;
  margin-bottom: 8px;
  font-weight: 600;
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  margin-bottom: 16px;
  &:focus {
  
  }
`
const Error = styled.div`
  color: red;
  font-size: 13px;
  text-align: center;
  margin-bottom: 8px;
  margin-top: -24px;
`

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordC: '',

      error: '',
      registering: false
    }
  }

  register = async () => {
    const { email, password, passwordC } = this.state

    this.setState({ error: '' })

    if (!email) {
      return this.setState({ error: 'Please enter a valid email address' })
    }
    if (!password || password.length < 6) {
      return this.setState({ error: 'Password must be at least 6 characters long' })
    }
    if (password !== passwordC) {
      return this.setState({ error: 'Passwords do not match' })
    }
    this.setState({ registering: true })

    try {
      const app = window.Realm.App.getApp('mcode-guru-bdomr')
      await app.emailPasswordAuth.registerUser(email, password)
      const credentials = window.Realm.Credentials.emailPassword(email, password)
      try {
        const user = await app.logIn(credentials)
        window.location.reload()
        return user
      } catch (err) {
        console.error('Failed to log in', err)
      }
      this.setState({ registering: false })
    } catch (err) {
      console.log('eee', err.errorCode)
      if (err.errorCode === 'AccountNameInUse') {
        this.setState({ registering: false, error: 'Email is already in use' })
      } else {
        this.setState({ registering: false })
      }
    }
  }

  render () {
    const { email, password, passwordC, error, registering } = this.state
    return (
      <Outer>
        <Title>Learn Morse Code</Title>
        <SubTitle>Register to save and manage your progress</SubTitle>
        <Form>
          <Label>Email Address</Label>
          <Input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Label>Password</Label>
          <Input
            type='password'
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Label>Confirm Password</Label>
          <Input
            type='password'
            value={passwordC}
            style={{marginBottom: 32}}
            onChange={e => this.setState({ passwordC: e.target.value })}
          />
          {error && <Error>{error}</Error>}
          <Button onClick={this.register} disabled={registering}>
            {registering ? 'One moment...' : 'Register'}
          </Button>
        </Form>
      </Outer>
    )
  }
}

export default Register
