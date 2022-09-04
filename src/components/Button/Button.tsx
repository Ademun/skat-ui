import React, {ReactNode, FC} from 'react';
import {ButtonStyled} from './Button.styled';


export interface IButton {
    children: ReactNode;
    variant: 'solid' | 'outlined' | 'none';
    onClick?: () => void;
    disabled?: boolean;
    color?: string;
    sx?: string;
}

const Button: FC<IButton> = ({
                                 children,
                                 onClick,
                                 color = '#005faf',
                                 ...props
                             }) => {

    return (
        <ButtonStyled onClick={onClick} color={color} {...props}>
            {children}
        </ButtonStyled>
    );
};

export default Button;
