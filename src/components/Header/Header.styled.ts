import styled from "styled-components";
import {IComponent} from "../../index";

export const HeaderStyled = styled.header<IComponent>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 100%;
  padding: 0 32px;
  background-color: ${props => props.color};
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
  0 4px 5px 0 rgba(0, 0, 0, 0.14),
  0 1px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 10;
  
  ${props => props.sx}
`