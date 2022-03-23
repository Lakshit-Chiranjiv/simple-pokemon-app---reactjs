import { Paper, Typography } from '@mui/material'
import React from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { red } from '@mui/material/colors';

const delIconColor = red[500];

const PokemonCard = ({pokemon}) => {
  return (
    <Paper elevation={6} sx={{ m: 2,width: 250,display: 'flex',p: 3 }}>
        <div style={{marginRight: 'auto'}}>
            <Typography variant="h5" color="initial">{pokemon.name}</Typography>
            <Typography variant='body1' color="initial">{pokemon.type.toUpperCase()}</Typography>
        </div>
        <div>
            <DeleteRoundedIcon sx={{ color: delIconColor }} /><br />
            <EditRoundedIcon color='warning'/>
        </div>
    </Paper>
  )
}

export default PokemonCard