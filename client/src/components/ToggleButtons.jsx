import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const ToggleButtons = ({searchBarToggle,setSearchBarToggle,setShowSearchByNameBar,setShowSearchByTypeBar}) => {
  return (
    <Box sx={{width: '100%',display: 'flex', justifyContent: 'center'}}>
        <ToggleButtonGroup
            sx={{ mx: 'auto' }}
            value={searchBarToggle}
            color='warning'
            exclusive
            size='small'
            onChange={(e,newToggleValue)=>{
                setSearchBarToggle(newToggleValue);
                //the if else is reverse of what should be done as the state values aren't updated in the current render
                if(searchBarToggle === 'type'){
                    setShowSearchByNameBar(true);
                    setShowSearchByTypeBar(false);
                }
                else{
                    setShowSearchByNameBar(false);
                    setShowSearchByTypeBar(true);
                }
            }}
        >
            <ToggleButton value='name'><SearchOutlinedIcon/> Name</ToggleButton>
            <ToggleButton value='type'><SearchOutlinedIcon/> Type</ToggleButton>
        </ToggleButtonGroup>
    </Box>
  )
}

export default ToggleButtons