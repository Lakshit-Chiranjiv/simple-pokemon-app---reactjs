import { Box, Button, Modal, Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'


const RandomModal = ({randomModalOpen,setRandomModalOpen,generateRandomPokemon}) => {

    const [randomPokemonObj,setRandomPokemonObj] = useState({});

    useEffect(() => {
        setRandomPokemonObj(generateRandomPokemon());      
    }, [])
    

  return (
    <div>
          <Modal 
            open={randomModalOpen}
            onClose={()=>{
                setRandomModalOpen(false)
            }}
          >
              <Box 
                sx={{ 
                    height: '30%',
                    width: '30%',
                    bgcolor: 'white', 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '10px',
                    boxShadow: 24,
                    p: 4,
                    }}
                >
                    <Typography variant="h5" color="initial" align='center' gutterBottom>
                        Random Generated Pokemon
                    </Typography>
                    <Typography variant="h6" color="initial" align='center' sx={{fontWeight: 800,mt: 3}}>
                        {randomPokemonObj.name}
                    </Typography>
                    <Typography variant="body1" color="initial" align='center' mb={4}>
                        {String(randomPokemonObj.type).toUpperCase()}
                    </Typography>
                    <Button
                        variant="contained" 
                        color='secondary'
                        fullWidth
                        onClick={()=>{
                            setRandomPokemonObj(generateRandomPokemon());
                        }}
                    >
                        GENERATE ANOTHER POKEMON
                    </Button>
              </Box>
          </Modal>
    </div>
  )
}

export default RandomModal