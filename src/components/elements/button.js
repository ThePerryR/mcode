import styled from 'styled-components'

const Button = styled.div`
  height: 40px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: 600;
  font-size: 12px;  
  letter-spacing: 0.88px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5da55;
  color: #272727;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: none;
  transition: all 120ms linear;
  box-sizing: border-box;
  ${props => props.disabled && `
    background: grey;
  `}
  ${props => props.secondary && `
    background: white;
    border: 1px solid #9c9c9c;
    &:hover {
      box-shadow: 0 1px 2px rgba(0,0,0,0.2);
      border: 1px solid #585757;
    }
  `}
  ${props => props.small && `
    font-size: 10px;
    height: 32px;
    padding-left: 12px;
    padding-right: 12px;
  `}
`

export default Button
