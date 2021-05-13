import styled from 'styled-components'

const Button = styled.div`
  height: 40px;
  width: 100%;
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
  ${props => props.disabled && `
    background: grey;
  `}
`

export default Button
