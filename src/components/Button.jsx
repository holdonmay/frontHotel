import React, { Component } from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`

    background: #0B2545;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;

`;

export default class Button extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <StyledButton>{this.props.title}</StyledButton>
    )
  }
}
