import React, {FC, ReactNode} from 'react';
import {NavbarStyled} from "./Navbar.styled";

export interface INavbar {
    children: ReactNode;
    color?: string;
    sx?: string
}

const Navbar: FC<INavbar> = ({ children, color= '#e0e2ec', sx}) => {
    return (
        <NavbarStyled color={color} sx={sx}>
            {children}
        </NavbarStyled>
    );
};

export default Navbar;