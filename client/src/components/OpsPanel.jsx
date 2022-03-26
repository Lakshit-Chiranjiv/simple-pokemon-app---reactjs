import React,{useState} from 'react'
import { Drawer } from '@mui/material'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const OpsPanel = ({drawerOpen,setDrawerOpen,setAddModalOpen,setShowSearchByNameBar,setShowSearchByTypeBar,setSearchBarToggle,setRandomModalOpen}) => {
  return (
    <Drawer
        onClick={()=>{setDrawerOpen(false)}}
        anchor='bottom'
        open={drawerOpen}
        onClose={()=>{setDrawerOpen(false)}}
    >
        <Stack 
            sx={{ m: 6 }} 
            spacing={4} 
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
          <Button variant="contained" size='large' color='success' onClick={()=>{
            setAddModalOpen(true);
          }}>Add a Pokemon</Button>
          <Button variant="contained" size='large' color='warning' onClick={()=>{
            setShowSearchByNameBar(true)
            setSearchBarToggle('name')
            setShowSearchByTypeBar(false)
          }}>Search Pokemons by name</Button>
          <Button variant="contained" size='large' color='primary' onClick={()=>{
            setShowSearchByTypeBar(true)
            setSearchBarToggle('type')
            setShowSearchByNameBar(false)
          }}>Search Pokemons by type</Button>
          <Button variant="contained" size='large' color='secondary' onClick={()=>{
            setRandomModalOpen(true)
          }}>Generate a Random Pokemon</Button>
        </Stack>
    </Drawer>
  )
}

export default OpsPanel