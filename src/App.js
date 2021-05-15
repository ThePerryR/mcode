import React from 'react'
import styled from 'styled-components'

import Header from './components/sections/Header'
import Radio from './components/sections/Radio'
import Chat from './components/sections/Chat'
import './App.css'
import lessons from './utils/lessons'

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

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentChapter: null,
      lessonIndex: 0,
      countIndex: 0
    }
  }

  handleMessage = message => {
    console.log(message, 'mm')
    const lesson = lessons[this.state.currentChapter].lessons[this.state.lessonIndex]
    if (lesson.type === 'send-code' && lesson.answer === message.trim()) {
      console.log('foo')
      if (lesson.count && lesson.count > 1) {
        if (this.state.countIndex + 1 === lesson.count) {
          setTimeout(() => {
            this.next()
          }, 1200)
        }
        this.setState({ countIndex: this.state.countIndex + 1 })
      } else {
        this.next()
      }
    }
  }

  next = () => {
    if (this.state.lessonIndex + 1 < lessons[this.state.currentChapter].length) {
      this.setState({ lessonIndex: this.state.lessonIndex + 1, countIndex: 0 })
    } else if (this.state.currentChapter + 1 < lessons.length) {
      this.setState({ currentChapter: this.state.currentChapter + 1, countIndex: 0 })
    } else {
      this.setState({ complete: true, countIndex: 0 })
    }
  }

  render () {
    const user = this.props.app.currentUser
    return (
      <Outer>
        <Header user={user}/>
        <Body>
          <Radio onMessage={this.handleMessage}/>
          {user &&
          <Chat
            lessonIndex={this.state.lessonIndex}
            countIndex={this.state.countIndex}
            chapter={this.state.currentChapter}
            next={this.next}
            chapterProgress={0}
            selectChapter={currentChapter => this.setState({ currentChapter })}
          />
          }
        </Body>
      </Outer>
    )
  }
}

export default App
