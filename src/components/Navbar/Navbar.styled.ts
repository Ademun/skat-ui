import styled from "styled-components";
import {IComponent} from "../../index";

export const NavbarStyled = styled.nav<IComponent>`
  position: fixed;
  padding: 16px;
  left: 0;
  height: 100%;
  width: 192px;
  background-color: ${props => props.color};
  box-shadow:  0 1px 5px 0 rgba(0, 0, 0, 0.2),
  0 2px 2px 0 rgba(0, 0, 0, 0.14),
  0 3px 1px -2px rgba(0, 0, 0, 0.12);
  
  ${props => props.sx}
`