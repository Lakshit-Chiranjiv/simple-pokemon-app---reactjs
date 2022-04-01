import { Container } from '@mui/material'
import React from 'react'
import PokemonCard from '../components/PokemonCard'


const Home = ({pokemonArray,filteredNameArray,filteredTypeArray,showSearchByNameBar,showSearchByTypeBar,setEditModalOpen,editPokemonName,setEditPokemonName,editPokemonType,setEditPokemonType,editPokemonPower,setEditPokemonPower}) => {
  return (
    <Container sx={{ display: 'flex',flexWrap: 'wrap'}}>
        {
          showSearchByNameBar && 
          filteredNameArray.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.name}/>
          })
        }
        {
          showSearchByTypeBar && 
          filteredTypeArray.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.name}/>
          })
        }
        {
          (!showSearchByTypeBar && !showSearchByNameBar) && 
          pokemonArray.map((pokemon) => {
            return <PokemonCard 
                      pokemon={pokemon} 
                      key={pokemon.name} 
                      setEditModalOpen={setEditModalOpen}
                      editPokemonName={editPokemonName}
                      setEditPokemonName={setEditPokemonName}
                      editPokemonType={editPokemonType} 
                      setEditPokemonType={setEditPokemonType}
                      editPokemonPower={editPokemonPower} 
                      setEditPokemonPower={setEditPokemonPower}
                  />
          })
        }
    </Container>
  )
}

export default Home