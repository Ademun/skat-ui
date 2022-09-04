import styled from "styled-components";
import {ISurface} from "./Surface";

export const SurfaceStyled = styled.div<ISurface>`
  padding: 8px;
  max-width: 400px;
  color: #001c3a;
  border-radius: 4px;
  background-color: ${props => props.color};
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2),
  0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  
  ${props => props.sx};
`;