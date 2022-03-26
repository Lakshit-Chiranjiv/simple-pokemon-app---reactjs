import { Box, Button, TextField } from '@mui/material'
import React from 'react'


const SearchBar = ({showSearchByNameBar,showSearchByTypeBar,setShowSearchByNameBar,setShowSearchByTypeBar}) => {

  const handleSearchClose = () =>{
    if(showSearchByNameBar){
      setShowSearchByNameBar(false);
    }
    else if(showSearchByTypeBar){
      setShowSearchByTypeBar(false);
    }
  }
  
  return (
    <div>
      <Box sx={{ width: '50%',my: 3,mx: 'auto' }}>
        {
          showSearchByNameBar &&
          <TextField
            variant='outlined'
            label='Enter Pokemon Name to search'
            color='warning'
            sx={{ width: '80%'}}
          />
        }
        {
          showSearchByTypeBar &&
          <TextField
            variant='outlined'
            label='Enter Pokemon Type to search'
            color='warning'
            sx={{ width: '80%'}}
          />
        }
        <Button
          sx={{ py: 2,mx: 2}}
          variant='contained'
          color='error'
          onClick={handleSearchClose}
        >
          X
        </Button>
      </Box>
    </div>
  )
}

export default SearchBar