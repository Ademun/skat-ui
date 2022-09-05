import styled from "styled-components";
import {ILink} from "./Link";

export const LinkStyled = styled.a<Omit<ILink, 'href'>>`
  display: flex;
  justify-items: center;
  border-radius: 4px;
  transition: .5s;
  padding: 8px;
  margin: 4px;
  cursor: pointer;
  &:hover {
    background-color: #43474e30;
  }
  ${props => props.sx}
`