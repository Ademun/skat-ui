import {SurfaceStyled} from "./Surface.styled";
import React, {FC, ReactNode} from 'react';

export interface ISurface {
    children: ReactNode
    color?: string;
    isShown?: boolean;
    sx?: string;
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
