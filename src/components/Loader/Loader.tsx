import {LoaderStyled} from "./Loader.styled";
import React, { FC } from 'react';
import {IComponent} from "../../index";

const Loader: FC<IComponent> = ({ color = '#005faf' }) => {

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
