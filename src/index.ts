import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Surface from "./components/Surface/Surface";
import Link from "./components/Link/Link";
import {ReactNode} from "react";

export interface IComponent {
    children: ReactNode
    color?: string;
    sx?: string
}

export {Button, Header, Input, Loader, Navbar, Surface, Link}
