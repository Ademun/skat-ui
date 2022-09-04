import styled from "styled-components";
import {IInput} from "./Input";

export const InputStyled = styled.input<IInput>`
  margin: 8px 8px;
  padding: 8px 16px;
  color: #001c3a;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.color ? props.color : '#fffff'};
  
  &:focus {
    outline: solid 2px #005faf;
  }

  ${props => props.sx};
`;