import React from 'react'
import styled from 'styled-components'

import Header from './components/sections/Header'
import Radio from './components/sections/Radio'
import Chat from './components/sections/Chat'
import './App.css';

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const Body = styled.div`
  display: flex;
  flex: 1;
  
  @media (max-width: 880px) {
    flex-direction: column-reverse;
  }
`

function App({app}) {
  return (
    <Outer>
      <Header user={app.currentUser}/>
      <Body>
        <Radio/>
        <Chat/>
      </Body>
    </Outer>
  );
}

export default App;
