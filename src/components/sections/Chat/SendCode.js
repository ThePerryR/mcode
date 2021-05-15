import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
`
const Message = styled.div`
  font-size: 16px;
  color: #757575;
  line-height: 24px;
  text-align: center;
`

const Video = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  width: 100%;
  margin-top: 24px;
`

const CountRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`

const Count = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #dedede;
  margin-right: 8px;
  margin-left: 8px;
  ${props => props.complete && `
  background: #1bbd1b;
  `}
`

function getCounts (count, countIndex) {
  const counts = []
  for (let i = 0; i < count; i++) {
    counts.push(<Count key={i} complete={i < countIndex}/>)
  }
  return counts
}

function SendCode ({ video, message, count, countIndex }) {
  return (
    <Outer>
      {(!!count && count > 1) &&
      <CountRow>
        {getCounts(count, countIndex)}
      </CountRow>
      }
      <Message>{message}</Message>
      {video &&
      <Video>
        <iframe
          title='preview'
          src={video}
          frameBorder="0"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </Video>
      }
    </Outer>
  )
}

export default SendCode

