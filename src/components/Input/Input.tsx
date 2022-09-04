import styled from 'styled-components';
import React, {FC} from 'react';

interface IInput {
    placeholder: string;
    color?: string;
    onChange?: () => void;
    sx?: string;
}

const SInput = styled.input<IInput>`
  padding: 8px 16px;
  margin: 8px 8px;
  border-radius: 4px;
  border: none;
  background-color: ${props => props.color ? props.color : '#fffff'};
  color: #001c3a;

  &:focus {
    outline: solid 2px #005faf;
  }

  ${props => props.sx};
`;

const Input: FC<IInput> = ({placeholder, onChange, ...props}) => {

    return <SInput placeholder={placeholder} onChange={onChange} {...props} />;
};

export default Input;
