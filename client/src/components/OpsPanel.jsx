import React,{useState} from 'react'
import { Drawer } from '@mui/material'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const OpsPanel = ({drawerOpen,setDrawerOpen}) => {
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
        <Button variant="contained" size='large' color='success'>Add a Pokemon</Button>
        <Button variant="contained" size='large' color='warning'>Search Pokemons by name</Button>
        <Button variant="contained" size='large' color='primary'>Search Pokemons by type</Button>
        <Button variant="contained" size='large' color='secondary'>Generate a Random Pokemon</Button>
        </Stack>
    </Drawer>
  )
}

export default OpsPanel