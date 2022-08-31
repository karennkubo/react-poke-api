import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './../../constants/Constants';
import Quantity from '../Quantity/Quantity';
import { Cards, CardsDiv, Form, H3, Input, P, Button } from './Styles';

export default function Homepage() {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState("");

    const getPokemons = async() => {
        let pokemonId = 1;
        let pokemonsInfo = [];
        while (pokemonId <= 10) {
            await axios
            .get(`${BASE_URL}/${pokemonId}`)
            .then((res) => {
                pokemonsInfo.push(res.data);
            })
            .catch((err) => {
                alert(err.data);
            });
            pokemonId++;
        }
        setPokemons(pokemonsInfo);
    }

    const searchingPokemon = async(event) => {
        event.preventDefault();
        let pokemonsFound = [];
        
        pokemons && pokemons.forEach((pokemon) => {
            if (pokemon.name.includes(search) || pokemon.abilities[0].ability.name.includes(search) || pokemon.abilities[1].ability.name.includes(search)) {
                pokemonsFound.push(pokemon);
            }
        });
        setPokemons(pokemonsFound);

        if(search.length===0) getPokemons();

        setSearch("");
    }

    useEffect(()=> {
        search.length===0 ? getPokemons() : searchingPokemon();
    },[])

  return (
    <div>
        <Form onSubmit={searchingPokemon}>
            <Input
            label='Descrição da tarefa'
            placeholder='Digite o nome do Pokémon'
            type={"text"}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />
            <Button><strong>Pesquisar</strong></Button>
        </Form>
        <Quantity
        quantityShown={pokemons.length}
        />
        <CardsDiv>
        {pokemons.length>0 ? pokemons.map((pokemon) => {
            return (
                <Cards key={pokemon.name}>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <H3>{pokemon.name.toUpperCase()}</H3>
                    <P>Abilities: {pokemon.abilities[0].ability.name}, {pokemon.abilities[1].ability.name}.</P>
                </Cards>
            )
        }) : <P>Nenhum pokémon foi encontrado!</P>}
        </CardsDiv> 
        <P>Todos os direitos reservados a Campolink 2022.</P>      
    </div>
  )
}
