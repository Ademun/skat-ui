import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Surface from "./components/Surface/Surface";
import {ReactNode} from "react";
import {ButtonStyled} from "./components/Button/Button.styled";
import {HeaderStyled} from "./components/Header/Header.styled";
import {InputStyled} from "./components/Input/Input.styled";
import {LoaderStyled} from "./components/Loader/Loader.styled";
import {NavbarStyled} from "./components/Navbar/Navbar.styled";
import {SurfaceStyled} from "./components/Surface/Surface.styled";

export interface IComponent {
    children: ReactNode
    color?: string;
    sx?: string
}

export {Button, ButtonStyled, Header, HeaderStyled, Input, InputStyled, Loader, LoaderStyled, Navbar, NavbarStyled, Surface, SurfaceStyled}
