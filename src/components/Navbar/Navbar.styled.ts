import styled from "styled-components";
import {INavbar} from "./Navbar";

export const NavbarStyled = styled.nav<INavbar>`
  position: fixed;
  padding: 16px;
  left: 0;
  height: 100%;
  width: 192px;
  background-color: #e0e2ec;
  box-shadow:  0px 1px 5px 0px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14),
  0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  
  ${props => props.sx}
`