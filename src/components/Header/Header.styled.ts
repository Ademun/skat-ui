import styled from "styled-components";
import {IHeader} from "./Header";

export const HeaderStyled = styled.header<IHeader>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 100%;
  padding: 0 32px;
  background-color: ${props => props.color};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14),
  0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 10;
`