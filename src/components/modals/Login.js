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
  color: grey;
  font-size: 15px;
  margin-bottom: 40px;
`
const Form = styled.div`
  min-width: 256px;
  width: 100%;
`
const Label = styled.div`
  color: grey;
  font-size: 13px;
  margin-bottom: 8px;
  font-weight: 600;
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  &:focus {
  
  }
`

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordC: ''
    }
  }

  login = async () => {
    const { email, password } = this.state
    try {
      const app = window.Realm.App.getApp('mcode-guru-bdomr')
      const credentials = window.Realm.Credentials.emailPassword(email, password);
      await app.logIn(credentials)
      window.location.reload()
    } catch (err) {
      console.log(err.errorCode, 'fooerr')
      let error = 'Something went wrong. Please try again'
      if (err.errorCode === 'InvalidPassword') error = 'Invalid email or password'
      this.setState({error})
    }
  }

  render () {
    const { email, password } = this.state
    return (
      <Outer>
        <Title>Learn Morse Code</Title>
        <SubTitle>Login to save and manage your progress</SubTitle>
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
          <Button onClick={this.login}>Login</Button>
        </Form>
      </Outer>
    )
  }
}

export default Login
