import React from 'react';
import Logo from "../../assets/logo.png";
import { Image, HeaderDiv } from './Styles';

export default function Header() {

  return (
    <HeaderDiv>
        <Image src={Logo} alt="Pokémon"/>
    </HeaderDiv>
  )
}
