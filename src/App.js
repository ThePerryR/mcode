import React from 'react'
import styled from 'styled-components'
import Div100vh from 'react-div-100vh'

import Header from './components/sections/Header'
import Radio from './components/sections/Radio'
import Chat from './components/sections/Chat'
import './App.css'
import lessons from './utils/lessons'

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Body = styled.div`
  display: flex;
  flex: 1;
  
  @media (max-width: 880px) {
    flex-direction: column;
  }
`

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentChapter: null,
      lessonIndex: 0,
      countIndex: 0,
      chapterProgress: 0
    }
  }

  async componentDidMount () {
    const { app, ga4 } = this.props

    ga4.pageview('/')

    if (app.currentUser) {
      const mongodb = app.currentUser.mongoClient('mongodb-atlas')
      const reportCol = mongodb.db('main').collection('report')
      let report = await reportCol.findOne({ owner: app.currentUser.id })
      if (!report) {
        await reportCol.insertOne({ owner: app.currentUser.id, chapterProgress: 0 })
      } else {
        this.setState({ chapterProgress: report.chapterProgress })
      }
    }
  }

  handleMessage = message => {
    if (!this.state.currentChapter) return
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

  next = async () => {
    if (this.state.lessonIndex + 1 < lessons[this.state.currentChapter].lessons.length) {
      this.setState({ lessonIndex: this.state.lessonIndex + 1, countIndex: 0 })
    } else if (this.state.currentChapter + 1 < lessons.length) {
      if (this.state.currentChapter + 1 > this.state.chapterProgress) {
        const mongodb = this.props.app.currentUser.mongoClient('mongodb-atlas')
        const reportCol = mongodb.db('main').collection('report')
        console.log('updating to', this.state.currentChapter + 1)
        await reportCol.updateOne({ owner: this.props.app.currentUser.id }, { chapterProgress: this.state.currentChapter + 1 })
      }
      this.setState({
        countIndex: 0,
        lessonIndex: 0,
        currentChapter: 0,
        chapterProgress: this.state.currentChapter + 1 > this.state.chapterProgress ? this.state.currentChapter + 1 : this.state.chapterProgress
      })
    } else {
      this.setState({ complete: true, countIndex: 0 })
    }
  }

  render () {
    const user = this.props.app.currentUser
    return (
      <Div100vh>
        <Outer>
          <Header user={user}/>
          <Body>
            {user &&
            <Chat
              lessonIndex={this.state.lessonIndex}
              countIndex={this.state.countIndex}
              chapter={this.state.currentChapter}
              next={this.next}
              chapterProgress={this.state.chapterProgress}
              selectChapter={currentChapter => this.setState({ currentChapter })}
            />
            }
            <Radio full={!user} onMessage={this.handleMessage}/>
          </Body>
        </Outer>
      </Div100vh>
    )
  }
}

export default App
