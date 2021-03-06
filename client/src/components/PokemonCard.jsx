import { Paper, Typography, IconButton } from '@mui/material'
import React from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { red } from '@mui/material/colors';

const delIconColor = red[500];

const PokemonCard = ({pokemon,setEditModalOpen,setEditPokemonId,editPokemonName,setEditPokemonName,editPokemonType,setEditPokemonType,editPokemonPower,setEditPokemonPower,setDeleteModalOpen,setDeletePokemonId,setDeletePokemonName}) => {
  return (
    <Paper elevation={6} sx={{ m: 2,width: '25%',display: 'flex',p: 3 }}>
        <div style={{marginRight: 'auto'}}>
            <Typography variant="h5" color="initial">{pokemon.name}</Typography>
            <Typography variant='body1' color="initial">{pokemon.type.toUpperCase()}</Typography>
        </div>
        <div>
            <IconButton onClick={() => {
                setDeleteModalOpen(true)
                setDeletePokemonName(pokemon.name)
                setDeletePokemonId(pokemon._id)
            }}>
                <DeleteRoundedIcon sx={{ color: delIconColor }} />
            </IconButton>
            <br />
            <hr style={{ backgroundColor: 'gray', height: '0.1px'}}/>
            <IconButton onClick={()=>{
                setEditModalOpen(true)
                setEditPokemonName(pokemon.name)
                setEditPokemonType(pokemon.type)
                setEditPokemonPower(pokemon.power)
                setEditPokemonId(pokemon._id)
                console.log('edit modal open')
                console.log(pokemon.name,pokemon.type,pokemon.power);
            }}>
                <EditRoundedIcon color='success'/>
            </IconButton>
            
        </div>
    </Paper>
  )
}

export default PokemonCard