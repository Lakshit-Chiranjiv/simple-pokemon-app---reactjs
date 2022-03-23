import { Container } from '@mui/material'
import React from 'react'
import PokemonCard from '../components/PokemonCard'


const Home = ({pokemonArray}) => {
  return (
    <Container sx={{ display: 'flex'}}>
        {
          pokemonArray.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.name}/>
          })
        }
    </Container>
  )
}

export default Home