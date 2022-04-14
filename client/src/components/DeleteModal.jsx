import { Box, Button, Modal,Stack,Typography } from '@mui/material'
import React from 'react'

const DeleteModal = ({deleteModalOpen,setDeleteModalOpen,deletePokemonName}) => {
  return (
    <div>
        <Modal 
            open={deleteModalOpen}
            onClose={()=>{
                setDeleteModalOpen(false)
            }}
        >
            <Box 
                sx={{ 
                    height: '30%',
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
                <Typography variant="h5" color="initial">
                    Are you sure you want to Delete this Pokemon?
                </Typography>

                <Typography variant="h6" color="initial" align='center' sx={{fontWeight: 800,mt: 3}}>
                    {deletePokemonName}
                </Typography>

                <Stack direction='row' spacing={2} sx={{mt: 4,p: 2}} justifyContent="center" alignItems='center'>
                    <Button
                        variant="contained" 
                        color='warning'
                        onClick={()=>{
                            setDeleteModalOpen(false)
                        }}
                        sx={{width: '50%'}}
                    >
                        CANCEL
                    </Button>

                    <Button
                        variant="contained" 
                        color='error'
                        onClick={()=>{
                            setDeleteModalOpen(false)
                        }}
                        sx={{width: '50%'}}
                    >
                        DELETE POKEMON
                    </Button>
                </Stack>
            </Box>
        </Modal>
    </div>
  )
}

export default DeleteModal;