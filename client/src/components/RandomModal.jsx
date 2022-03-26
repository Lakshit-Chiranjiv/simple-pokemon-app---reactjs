import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'

const RandomModal = ({randomModalOpen,setRandomModalOpen}) => {
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
                        Bulbasaur
                    </Typography>
                    <Typography variant="body1" color="initial" align='center' mb={4}>
                        {'Grass'.toUpperCase()}
                    </Typography>
                    <Button
                        variant="contained" 
                        color='secondary'
                        fullWidth
                        onClick={()=>{
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