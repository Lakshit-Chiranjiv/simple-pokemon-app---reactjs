import react,{useState} from "react";
import { Container, Typography,Box,Button,IconButton } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Home from "./pages/Home";

let pokeArr = [
  {name:"Bulbasaur",type:"grass",power: 86},
  {name:"Charmandar",type:"fire",power: 77},
  {name:"Squirtle",type:"water",power: 81},
  {name:"Pikachu",type:"electric",power: 90},
  {name:"Pidgeotto",type:"flying",power: 75}
]

function App() {
  
  const [pokemonArray, setPokemonArray] = useState(pokeArr);

  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2,mt: 5 }}>
        <Typography variant="h3" gutterBottom fontWeight='fontWeightBold' textAlign='center' color="initial">Pokemons Collection App</Typography>

        <Box sx={{ p: 2, borderRadius: '50%',height: '40px', width: '40px',display: 'flex', justifyContent: 'center', alignItems: 'center',mb: 2 }}>
          <IconButton variant="text"><AddCircleOutlineOutlinedIcon sx={{ fontSize: 60,color: 'green' }}/></IconButton>
        </Box>
      </Container>
      <hr style={{width: '20%', backgroundColor: 'gray', height: '0.5px'}}/>
      <Home pokemonArray={pokemonArray}/>
    </>
  )
}

export default App
