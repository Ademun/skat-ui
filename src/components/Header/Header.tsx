import React, {FC, ReactNode} from "react";
import {HeaderStyled} from "./Header.styled";

export interface IHeader {
    children: ReactNode
    color?: string;
}

const Header: FC<IHeader> = ({children, color = '#d4e3ff'}) => {
    return (
        <HeaderStyled color={color}>{children}</HeaderStyled>
    )
}
export default Header