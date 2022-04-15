import { Container } from '@mui/material'
import React from 'react'
import PokemonCard from '../components/PokemonCard'


const Home = ({pokemonArray,filteredNameArray,filteredTypeArray,showSearchByNameBar,showSearchByTypeBar,setEditModalOpen,setEditPokemonId,editPokemonName,setEditPokemonName,editPokemonType,setEditPokemonType,editPokemonPower,setEditPokemonPower,setDeleteModalOpen,setDeletePokemonId,setDeletePokemonName}) => {
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
                      setEditPokemonId={setEditPokemonId}
                      setEditPokemonName={setEditPokemonName}
                      editPokemonType={editPokemonType} 
                      setEditPokemonType={setEditPokemonType}
                      editPokemonPower={editPokemonPower} 
                      setEditPokemonPower={setEditPokemonPower}
                      setDeleteModalOpen={setDeleteModalOpen}
                      setDeletePokemonId={setDeletePokemonId}
                      setDeletePokemonName={setDeletePokemonName}
                  />
          })
        }
    </Container>
  )
}

export default Home