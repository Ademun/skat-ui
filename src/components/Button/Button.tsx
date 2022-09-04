import React, {FC} from 'react';
import {ButtonStyled} from './Button.styled';
import {IComponent} from "../../index";


export interface IButton extends IComponent {
    variant: 'solid' | 'outlined' | 'none';
    onClick?: () => void;
    disabled?: boolean;
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
