import React from 'react'
import styled from 'styled-components'


const StyledBienvenida = styled.h2`
    text-transform: uppercase;
    font-weight: bold;
    color: black;
    font-size: 50px;
`;

const Bienvenida = () => {
  return (
    <StyledBienvenida>Welcome</StyledBienvenida>
  )
}

export default Bienvenida