import React from 'react'
import styled from 'styled-components'
import startAudioContext from 'startaudiocontext'

import { convertToString, isLetter } from '../../../utils/morsecode'
import InteractionHandler from '../../elements/InteractionHandler'

const Outer = styled.div`
  flex: 1;
  border-right: 1px solid #E5E5E5;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 880px) {
    flex-grow: 0;
    flex-basis: 80px;
    flex-shrink: 0;
    border-right: none;
    border-top: 1px solid #E5E5E5;
  }
`

const Button = styled.div`
  height: 112px;
  width: 112px;
  background: #EC5C5C;
  border-radius: 50%;
  ${props => props.pressed && `
  background: #e02e2e;
  `}
`

const Preview = styled.div`
  background: #484848;
  color: #ADFBA1;
  width: 100%;
  max-width: 380px;
  border-radius: 8px;
  margin-bottom: 64px;
`
const PreviewMessage = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
`
const PreviewCode = styled.div`
  height: 112px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  padding-bottom: 24px;
`
const isMobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i


class Radio extends React.Component {
  dotDuration = 100
  pressed = false
  tempMessage = []
  tempWord = []
  tempCharacter = ''

  constructor (props) {
    super(props)
    this.state = {
      keyOn: false,
      volume: 40
    }
  }
  componentDidMount () {
    this.context = new (window.AudioContext || window.webkitAudioContext)()

    this.gainNode = this.context.createGain()
    this.gainNode.gain.value = this.state.volume
    this.gainNode.connect(this.context.destination)

    this.oscillator = this.context.createOscillator()

    this.oscillator.type = 'sine'
    this.oscillator.frequency.value = 800
    this.oscillator.start()
    if (isMobileRegex.test(navigator.userAgent)) {
      startAudioContext(this.context, '#handler')
    }
  }

  handleStart = () => {
    this.oscillator.connect(this.gainNode)
    clearTimeout(this.addCharacter)
    clearTimeout(this.sendWord)
    clearTimeout(this.sendMessage)
    this.setState({ keyOn: true })
    this.pressed = Date.now()
  }

  handleStop = () => {
    if (this.pressed) {
      const duration = Date.now() - this.pressed

      if (duration > this.dotDuration) {
        this.tempCharacter += '-'
      } else {
        this.tempCharacter += '.'
      }

      this.addCharacter = setTimeout(() => {
        if (isLetter(this.tempCharacter)) {
          this.tempWord = [...this.tempWord, this.tempCharacter]
          this.tempCharacter = ''
          this.setState({previewMessage: this.getPreviewMessage()})
        }
      }, this.dotDuration * 3)
      this.sendWord = setTimeout(() => {
        this.tempMessage = [...this.tempMessage, [...this.tempWord, this.tempCharacter]]
        this.tempWord = []
        this.setState({previewMessage: this.getPreviewMessage()})
      }, this.dotDuration * 7)
      this.sendMessage = setTimeout(() => {
        const message = convertToString([...this.tempMessage, [...this.tempWord, this.tempCharacter]])
        if (message) {
          console.log(message)
          //this.onMessage(message)
        }
        this.tempMessage = []
        this.tempWord = []
        this.tempCharacter = ''
        this.setState({previewMessage: this.getPreviewMessage()})
      }, this.dotDuration * 14)

      this.pressed = false
      this.tempCharacter = this.tempCharacter.slice(0, 10)
      this.setState({ keyOn: false, previewMessage: this.getPreviewMessage() })
      this.oscillator.disconnect(this.gainNode)
    }
  }

  getPreviewMessage = () => `${convertToString(this.tempMessage)} ${convertToString([this.tempWord])}`

  render () {
    return (
      <Outer>
        <Preview>
          <PreviewMessage>{this.state.previewMessage}</PreviewMessage>
          <PreviewCode>{this.tempCharacter}</PreviewCode>
        </Preview>
        <InteractionHandler onStart={this.handleStart} onStop={this.handleStop}>
          <Button pressed={this.state.keyOn}/>
        </InteractionHandler>
      </Outer>
    )
  }
}

export default Radio
