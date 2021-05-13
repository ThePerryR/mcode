import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InteractionHandler extends Component {
  pressed = false

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyPress, false)
    document.addEventListener('keyup', this.handleKeyUp, false)
    window.addEventListener('blur', this.handleRelease, false)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyPress, false)
    document.removeEventListener('keyup', this.handleKeyUp, false)
    window.removeEventListener('keyup', this.handleRelease, false)
  }

  handleKeyPress = (e) => {
    if (e.keyCode === 32 && !this.pressed) {
      this.handlePress(e)
    }
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 32) {
      this.handleRelease(e)
    }
  }

  handlePress = (e) => {
    if (this.props.disabled) {
      return
    }
    if (e.type === 'touchstart') {
      e.preventDefault()
    }
    this.pressed = true
    if (this.props.onStart) {
      this.props.onStart()
    }
  }

  handleRelease = () => {
    if (this.props.disabled || !this.pressed) {
      return
    }
    this.pressed = false
    if (this.props.onStop) {
      this.props.onStop()
    }
  }

  render () {
    return (
      <div
        id='handler'
        style={{
          userSelect: 'none'
        }}
        ref={(button) => {
          this.button = button
        }}
        onMouseDown={this.handlePress}
        onMouseUp={this.handleRelease}
        onMouseLeave={this.handleRelease}
        onTouchStart={this.handlePress}
        onTouchEnd={this.handleRelease}>
        {this.props.children}
      </div>
    )
  }
}

InteractionHandler.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onStart: PropTypes.func,
  onStop: PropTypes.func
}

export default InteractionHandler
