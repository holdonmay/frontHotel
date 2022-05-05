import React, { Component } from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`

  background: rgba(255, 255,255,0.15);
  box-shadow: 0 8px 32px 0 rgba(108, 122, 137, 0.2);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #134074;
  font-size: 1rem;
  font-weight: bold;
  &:focus{
      display: inline-block;
      box-shadow: 0 0 0 0.2rem #134074;
      backdrop-filter: blur(12rem);
      border-radius: 2rem;
  }

  &: :placeholder{
      color: #0B2545;
      font-weight: 100;
      font-size: 1rem;
  }
`;

export default class Input extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <StyledInput {...this.props}></StyledInput>
    )
  }
}
