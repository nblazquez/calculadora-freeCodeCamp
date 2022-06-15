import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 75px;
  border-radius: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  background-color: #0a0a23;
  color: white;
  padding: 11px 30px 11px 11px;
  margin: 1px solid #888;
  box-shadow: -1px 4px 1px 1px white;
`;

const Pantalla = ({ input }:any) => {
    return (
        <StyledDiv className='input'>
            {input}
        </StyledDiv>
    )
}

export default Pantalla
