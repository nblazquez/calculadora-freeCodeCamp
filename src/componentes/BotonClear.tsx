import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 80px;
  font-size: 1.6em;
  display: flex;
  flex: 1;
  background-color: #ac0246;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color:white;
  border: 2px solid white;
  cursor: pointer;
  border-radius: 45px;
  user-select: none;

  :hover{
    background-color: #ebb000;
  }
`;

const BotonClear = (props:any) => {
    return (
        <StyledDiv
          onClick={props.manejarClear}>
            {props.children}
        </StyledDiv>
    )
}

export default BotonClear
