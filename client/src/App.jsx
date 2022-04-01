import react,{useState} from "react";
import { Container, Typography,Box,Button,IconButton } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Home from "./pages/Home";
import OpsPanel from "./components/OpsPanel";
import AddModal from "./components/AddModal";
import SearchBar from "./components/SearchBar";
import ToggleButtons from "./components/ToggleButtons";
import RandomModal from "./components/RandomModal";
import EditModal from "./components/EditModal";

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
  {name:"Butterfree",type:"bug",power: 68},
  {name:"Beedrill",type:"bug",power: 71}
]

function App() {
  
  const [pokemonArray, setPokemonArray] = useState(pokeArr);

  const [opsDrawerOpen,setOpsDrawerOpen] = useState(false);

  const [addModalOpen,setAddModalOpen] = useState(false);
  const [addPokemonName,setAddPokemonName] = useState('');
  const [addPokemonType,setAddPokemonType] = useState('grass');
  const [addPokemonPower,setAddPokemonPower] = useState(50);

  const [editModalOpen,setEditModalOpen] = useState(false);
  const [editPokemonName,setEditPokemonName] = useState('');
  const [editPokemonType,setEditPokemonType] = useState('');
  const [editPokemonPower,setEditPokemonPower] = useState(0);

  const [searchBarToggle,setSearchBarToggle] = useState('name');
  const [showSearchByNameBar,setShowSearchByNameBar] = useState(false);
  const [showSearchByTypeBar,setShowSearchByTypeBar] = useState(false);

  const [nameSearchValue,setNameSearchValue] = useState('');
  const [typeSearchValue,setTypeSearchValue] = useState('');

  const [randomModalOpen,setRandomModalOpen] = useState(false);


  let filteredNameArray = pokemonArray.filter((pokemon)=>{
    return (nameSearchValue !== '' && pokemon.name.toLowerCase().includes(nameSearchValue.toLowerCase()));
  })

  let filteredTypeArray = pokemonArray.filter((pokemon)=>{
    return (typeSearchValue !== '' && pokemon.type.toLowerCase().includes(typeSearchValue.toLowerCase()));
  })

  const generateRandomPokemon = () => {
    return pokemonArray[Math.floor(Math.random()*pokemonArray.length)];
  }

  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2,mt: 3 }}>
        <Typography variant="h3" fontWeight='fontWeightBold' textAlign='center' color="initial">Pokemons Collection App</Typography>

        <Box sx={{ p: 2, borderRadius: '50%',height: '40px', width: '40px',display: 'flex', justifyContent: 'center', alignItems: 'center',mb: 2 }}>
          <IconButton sx={{mt:2}} variant="text" onClick={()=>{setOpsDrawerOpen(true)}}>
            {
              opsDrawerOpen ? 
              <AddCircleOutlineOutlinedIcon 
                sx={{ fontSize: 60,color: 'red',transform: 'rotateZ(45deg)',transition: 'all 0.5s' }} 
              />:
              <AddCircleOutlineOutlinedIcon 
                sx={{ fontSize: 60,color: 'green',transition: 'all 0.5s' }} 
              />
            }
          </IconButton>
        </Box>
      </Container>

      <hr style={{width: '20%', backgroundColor: 'gray', height: '0.5px'}}/>

      {
        (showSearchByNameBar || showSearchByTypeBar) &&

        <ToggleButtons
          searchBarToggle={searchBarToggle}
          setSearchBarToggle={setSearchBarToggle}
          setShowSearchByNameBar={setShowSearchByNameBar}
          setShowSearchByTypeBar={setShowSearchByTypeBar}
        />
      }

      {
        (showSearchByNameBar || showSearchByTypeBar) &&
        
        <SearchBar
          showSearchByNameBar={showSearchByNameBar}
          showSearchByTypeBar={showSearchByTypeBar}
          setShowSearchByNameBar={setShowSearchByNameBar}
          setShowSearchByTypeBar={setShowSearchByTypeBar}
          setNameSearchValue={setNameSearchValue}
          setTypeSearchValue={setTypeSearchValue}
        />
      }

      <Home 
        pokemonArray={pokemonArray}
        filteredNameArray={filteredNameArray}
        filteredTypeArray={filteredTypeArray}
        showSearchByNameBar={showSearchByNameBar}
        showSearchByTypeBar={showSearchByTypeBar}
        setEditModalOpen={setEditModalOpen}
        editPokemonName={editPokemonName}
        setEditPokemonName={setEditPokemonName}
        editPokemonType={editPokemonType} 
        setEditPokemonType={setEditPokemonType}
        editPokemonPower={editPokemonPower} 
        setEditPokemonPower={setEditPokemonPower}
      />
      
      <OpsPanel 
        drawerOpen={opsDrawerOpen} 
        setDrawerOpen={setOpsDrawerOpen} 
        setAddModalOpen={setAddModalOpen} 
        setShowSearchByNameBar={setShowSearchByNameBar}
        setShowSearchByTypeBar={setShowSearchByTypeBar}
        setSearchBarToggle={setSearchBarToggle}
        setRandomModalOpen={setRandomModalOpen}
      />
      
      <AddModal 
        addModalOpen={addModalOpen} 
        setAddModalOpen={setAddModalOpen}
        addPokemonName={addPokemonName}
        setAddPokemonName={setAddPokemonName}
        addPokemonType={addPokemonType} 
        setAddPokemonType={setAddPokemonType}
        addPokemonPower={addPokemonPower} 
        setAddPokemonPower={setAddPokemonPower} 
      />

      <EditModal
        editModalOpen={editModalOpen}
        setEditModalOpen={setEditModalOpen}
        editPokemonName={editPokemonName}
        setEditPokemonName={setEditPokemonName}
        editPokemonType={editPokemonType} 
        setEditPokemonType={setEditPokemonType}
        editPokemonPower={editPokemonPower} 
        setEditPokemonPower={setEditPokemonPower} 
      />

      <RandomModal
        randomModalOpen={randomModalOpen}
        setRandomModalOpen={setRandomModalOpen}
        generateRandomPokemon={generateRandomPokemon}
      />
    </>
  )
}

export default App
