import React, {FC} from "react";
import {HeaderStyled} from "./Header.styled";
import {IComponent} from "../../index";

const Header: FC<IComponent> = ({children, color = '#d4e3ff', sx}) => {
    return (
        <HeaderStyled color={color} sx={sx}>{children}</HeaderStyled>
    )
}
export default Header