import {InputStyled} from "./Input.styled";
import React, {FC} from 'react';

export interface IInput {
    placeholder: string;
    onChange?: () => void;
    sx?: string;
}


const Input: FC<IInput> = ({placeholder, onChange, ...props}) => {

    return <InputStyled placeholder={placeholder} onChange={onChange} {...props} />;
};

export default Input;
