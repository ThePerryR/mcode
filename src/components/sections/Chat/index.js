import React from 'react'
import styled from 'styled-components'
import { AiOutlineRight } from 'react-icons/ai'

import lessons from '../../../utils/lessons'
import Paragraph from './Paragraph'
import SendCode from './SendCode'
import TitleParagraph from './TitleParagraph'

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 38.2%;
  min-width: 380px;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  
  @media (max-width: 880px) {
    width: 100%;
    min-width: initial;
    flex: 1;
  }
`

const Chapter = styled.div`
  height: 56px;
  border-radius: 4px;
  border: 1px solid #dadada;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
  cursor: pointer;
  ${props => props.locked && `
  cursor: initial;
  `}
`

const ChapterNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4055ff;
  color: white;
  margin-right: 16px;
  ${props => props.locked && `
  background: #c3c3c3;
  color: #848484;
  `}
`

const ChapterTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #383838;
`

const ChapterCount = styled.div`
  font-size: 12px;
  color: grey;
  margin-top: 2px;
`

const ChapterIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f1f1;
  border-radius: 50%;
  color: #3f55ff;
`

class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      complete: false

    }
  }

  render () {
    if (this.state.complete) {
      return <Outer>All done!</Outer>
    }
    if (this.props.chapter === null) {
      return (
        <Outer>
          {lessons.map((chapter, i) => {
            const locked = i > this.props.chapterProgress
            return (
              <Chapter
                key={i}
                locked={locked}
                onClick={() => !locked && this.props.selectChapter(i)}>
                <ChapterNumber locked={locked}>{i + 1}</ChapterNumber>
                <div style={{ flex: 1, opacity: locked ? 0.54 : 1 }}>
                  <ChapterTitle>{chapter.title}</ChapterTitle>
                  <ChapterCount>{chapter.lessons.length} Questions</ChapterCount>
                </div>
                {!locked &&
                <ChapterIcon><AiOutlineRight/></ChapterIcon>
                }
              </Chapter>
            )
          })}
        </Outer>
      )
    }
    const lesson = lessons[this.props.chapter].lessons[this.props.lessonIndex]
    return (
      <Outer>
        {lesson.type === 'title-paragraph' &&
        <TitleParagraph {...lesson} onClickContinue={this.props.next}/>
        }
        {lesson.type === 'paragraph' &&
        <Paragraph {...lesson} onClickContinue={this.props.next}/>
        }
        {lesson.type === 'send-code' &&
        <SendCode countIndex={this.props.countIndex} {...lesson}/>
        }
      </Outer>
    )
  }
}

export default Chat

