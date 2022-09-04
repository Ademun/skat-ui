import styled from 'styled-components';
import {IButton} from "./Button";

export const ButtonStyled = styled.button<IButton>`
  margin: 0 8px;
  padding: 8px 16px;
  text-align: center;
  color: ${props => props.variant === 'solid' ? '#ffffff' : '#001c3a'};
  font-weight: 500;
  border-radius: 4px;
  border: ${props => props.variant === 'outlined' ? '2px solid #005faf' : 'none'};
  background-color: ${props => props.variant === 'solid' && props.color};
  box-shadow: ${props => props.variant === 'solid' &&
          '0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)'};
  transition: 0.5s;

  &:hover {
    background-color: ${props => props.variant === 'solid' ? '#001c3a' : '#b4ceff'};
  }

  ${props => props.sx};
`;