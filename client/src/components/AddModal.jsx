import { Box, Button, MenuItem, Modal, TextField, Typography} from '@mui/material'
import React from 'react'
import pokemonTypes from '../data/pokemonTypes'

const AddModal = ({addModalOpen, setAddModalOpen,addPokemonName,setAddPokemonName,addPokemonType,setAddPokemonType,addPokemonPower,setAddPokemonPower}) => {
  return (
      <div>
          <Modal 
            open={addModalOpen}
            onClose={()=>{
                setAddModalOpen(false)
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
                    }}>
                  <Typography variant="h4" color="initial">
                      Add a Pokemon
                  </Typography>
                  <TextField 
                    label="Pokemon Name" 
                    variant="outlined" 
                    sx={{ my: 2 }}
                    fullWidth
                    onChange={(e)=>{setAddPokemonName(e.target.value)}}
                  />

                  <TextField
                    select
                    label="Select Pokemon Type"
                    value={addPokemonType}
                    onChange={(e)=>{setAddPokemonType(e.target.value)}}
                    helperText="Please select your pokemon type"
                    variant='outlined'
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
                    defaultValue='50' 
                    variant="outlined" 
                    sx={{ my: 2 }}
                    fullWidth
                    onChange={(e)=>{setAddPokemonPower(Number(e.target.value))}}
                  />

                  <Button
                    variant="contained" 
                    color='success'
                    fullWidth
                    onClick={()=>{
                        setAddModalOpen(false);
                        console.log(addPokemonName,addPokemonType,addPokemonPower);
                    }}
                  >
                      ADD POKEMON
                  </Button>
              </Box>
          </Modal>
      </div>
  )
}

export default AddModal