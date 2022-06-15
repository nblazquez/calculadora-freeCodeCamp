import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div<{esOperador:boolean}>`
  height: 83px;
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 38px;
  color: white;
  border-radius: 25px;
  border: 2px solid white;
  margin: 4px;
  cursor: pointer;
  user-select: none;
  background-color: ${props => props.esOperador ? '#00471b' : '#1b1b32'};

  :hover{
    background-color: ${props => props.esOperador ? '#ff6600' : '#5a01a7'};
  }
`;

const esOperador = (valor: any) => {
  return isNaN(valor) && (valor !== '.' && (valor !== '='));
};

const Boton = (props:any) => {
    return (
        <StyledDiv 
          esOperador={esOperador(props.children)}
          onClick={() => props.manejarClic(props.children)}>
          {props.children}
        </StyledDiv>
    )
}

export default Boton
