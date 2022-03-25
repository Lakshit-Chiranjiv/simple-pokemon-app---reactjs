import react,{useState} from "react";
import { Container, Typography,Box,Button,IconButton } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Home from "./pages/Home";
import OpsPanel from "./components/OpsPanel";

let pokeArr = [
  {name:"Bulbasaur",type:"grass",power: 86},
  {name:"Charmandar",type:"fire",power: 77},
  {name:"Squirtle",type:"water",power: 81},
  {name:"Pikachu",type:"electric",power: 90},
  {name:"Pidgeotto",type:"flying",power: 75},
  {name:"Gengar",type:"ghost",power: 84},
  {name:"Onix",type:"rock",power: 72},
  {name:"Tauros",type:"normal",power: 66},
  {name:"Hypno",type:"psychic",power: 83},
  {name:"Butterfree",type:"bug",power: 68}
]

function App() {
  
  const [pokemonArray, setPokemonArray] = useState(pokeArr);

  const [opsDrawerOpen,setOpsDrawerOpen] = useState(false);

  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2,mt: 5 }}>
        <Typography variant="h3" gutterBottom fontWeight='fontWeightBold' textAlign='center' color="initial">Pokemons Collection App</Typography>

        <Box sx={{ p: 2, borderRadius: '50%',height: '40px', width: '40px',display: 'flex', justifyContent: 'center', alignItems: 'center',mb: 2 }}>
          <IconButton variant="text">
            {
              opsDrawerOpen ? 
              <AddCircleOutlineOutlinedIcon 
                sx={{ fontSize: 60,color: 'red',transform: 'rotateZ(45deg)',transition: 'all 0.5s' }} 
                onClick={()=>{setOpsDrawerOpen(true)}}
              />:
              <AddCircleOutlineOutlinedIcon 
                sx={{ fontSize: 60,color: 'green',transition: 'all 0.5s' }} 
                onClick={()=>{setOpsDrawerOpen(true)}}
              />
            }
          </IconButton>
        </Box>
      </Container>
      <hr style={{width: '20%', backgroundColor: 'gray', height: '0.5px'}}/>
      <Home pokemonArray={pokemonArray}/>
      <OpsPanel drawerOpen={opsDrawerOpen} setDrawerOpen={setOpsDrawerOpen} />
    </>
  )
}

export default App
