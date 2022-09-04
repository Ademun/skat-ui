import {SurfaceStyled} from "./Surface.styled";
import React, {FC} from 'react';
import {IComponent} from "../../index";

export interface ISurface extends IComponent{
    isShown?: boolean;
}


const Surface: FC<ISurface> = ({
                                   children,
                                   color = '#fdfcff',
                                   isShown = 'true',
                                   sx,
                               }) => {

    return <>{isShown && <SurfaceStyled color={color} sx={sx}>{children}</SurfaceStyled>}</>;
};

export default Surface;
