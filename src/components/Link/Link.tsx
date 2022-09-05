import React, {FC} from 'react';
import {default as NLink} from "next/link";
import {LinkStyled} from './Link.styled'
import {IComponent} from "../../index";

export interface ILink extends IComponent {
    href: string
}

const Link: FC<ILink> = ({href, children, ...props}) => {
    return (
        <NLink href={href}>
            <LinkStyled {...props}>{children}</LinkStyled>
        </NLink>
    );
};

export default Link;