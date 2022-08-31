import React from 'react';
import { Div, P, H3 } from './Styles';

export default function Quantity(props) {
  return (
    <Div>
        <H3>Total de Pokémons <P>10</P></H3>
        <H3>Exibindo <P>{props.quantityShown}</P> de <P>10</P></H3>
    </Div>
  )
}
