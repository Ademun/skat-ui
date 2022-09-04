import {LoaderStyled} from "./Loader.styled";
import React, { FC } from 'react';

export interface ILoader {
  color?: string;
}

const Loader: FC<ILoader> = ({ color = '#005faf' }) => {

  return (
    <LoaderStyled color={color} >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderStyled>
  );
};

export default Loader;
