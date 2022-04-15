import { Box, Button, MenuItem, Modal, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import pokemonTypes from '../data/pokemonTypes'

const EditModal = ({setPokemonArray,editModalOpen,setEditModalOpen,editPokemonId,editPokemonName,setEditPokemonName,editPokemonType,setEditPokemonType,editPokemonPower,setEditPokemonPower}) => {
  return (
    <div>
        <Modal 
            open={editModalOpen}
            onClose={()=>{
                setEditModalOpen(false)
            }}
        >
            <Box 
                sx={{ 
                    height: '60%',
                    width: '40%',
                    bgcolor: 'white', 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '20px',
                    boxShadow: 24,
                    p: 4,
                    }}
                >
                <Typography variant="h4" color="initial">
                    Update Pokemon Data
                </Typography>
                <TextField 
                    label="Pokemon Name" 
                    variant="outlined" 
                    value={editPokemonName}
                    color='warning'
                    sx={{ my: 2 }}
                    fullWidth
                    onChange={(e)=>{setEditPokemonName(e.target.value)}}
                />

                <TextField
                    select
                    label="Select Pokemon Type"
                    onChange={(e)=>{setEditPokemonType(e.target.value)}}
                    helperText="Please select your pokemon type"
                    variant='outlined'
                    color='warning'
                    value={editPokemonType.toLowerCase()}
                    fullWidth
                >
                {pokemonTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                    
                ))}
                </TextField>

                <TextField 
                    label="Pokemon Power" 
                    type='number' 
                    variant="outlined" 
                    sx={{ my: 2 }}
                    value={editPokemonPower}
                    fullWidth
                    color='warning'
                    onChange={(e)=>{setEditPokemonPower(Number(e.target.value))}}
                />

                <Button
                    variant="contained" 
                    color='warning'
                    fullWidth
                    onClick={async()=>{
                        setEditModalOpen(false)
                        const response = await axios.patch(`http://localhost:8000/pokemon/update/${editPokemonId}`,{
                            name: editPokemonName,
                            type: editPokemonType,
                            power: editPokemonPower
                        })
                        const responseData = await axios.get('http://localhost:8000/pokemon/getAll');
                        setPokemonArray(responseData.data);
                    }}
                >
                    UPDATE POKEMON
                </Button>
            </Box>
        </Modal>
    </div>
  )
}

export default EditModal