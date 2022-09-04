import React, {ReactNode, FC} from 'react';
import styled from 'styled-components';

interface IButton {
    color?: string;
    variant: 'solid' | 'outlined' | 'none';
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    sx?: string;
}

const SButton = styled.button<IButton>`
  padding: 8px 16px;
  margin: 0 8px;
  text-align: center;
  font-weight: 500;
  border-radius: 4px;
  border: ${props => props.variant === 'outlined' ? '2px solid #005faf' : 'none'};
  color: ${props => props.variant === 'solid' ? '#ffffff' : '#001c3a'};
  background-color: ${props => props.color ? props.color : '#005faf'};
  box-shadow: ${props => props.variant === 'solid' &&
          '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'};
  transition: 0.5s;

  &:hover {
    background-color: ${props => props.variant === 'solid' ? '#001c3a' : '#b4ceff'};
  }

  ${props => props.sx};
`;

const Button: FC<IButton> = ({
                                 children,
                                 onClick,
                                 ...props
                             }) => {

    return (
        <SButton onClick={onClick} {...props}>
            {children}
        </SButton>
    );
};

export default Button;
