import React, {FC} from 'react';
import {NavbarStyled} from "./Navbar.styled";
import {IComponent} from "../../index";


const Navbar: FC<IComponent> = ({ children, color= '#e0e2ec', sx}) => {
    return (
        <NavbarStyled color={color} sx={sx}>
            {children}
        </NavbarStyled>
    );
};

export default Navbar;