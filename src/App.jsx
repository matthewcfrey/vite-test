import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route, useNavigate} from "react-router-dom";

import Home from './components/Home.jsx'
import Layout from './components/Layout.jsx'
import CompMount from './components/CompMount.jsx'
import UEFetch from './components/UEFetch.jsx'

function App() {

  const pokemonlist = ['Gengar', 'Blastoise', "Lickitung", "Sudowoodo", 'Articuno', 'Venusaur', 'Muk', "Quagsire"]

  const [pokemon, setPokemon] = useState([]);
  const [currentFavorite, setCurrentFavorite] = useState({});

useEffect(() => {
    console.log("Heres the api: ")
    console.log(import.meta.env.VITE_POKE_API)
    pokemonlist.forEach(p => {
      fetch(import.meta.env.VITE_POKE_API + p.toLowerCase())
       .then(response => response.json())
       .then(response => {
        //console.log(response)
        setPokemon((prevState) => ([
            ...prevState, response
        ]));
        setCurrentFavorite(response);
       })
       .catch(err => console.error(err))
    })

}, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='CompMount' element={<CompMount />} />
        <Route path='UEFetch' element={<UEFetch pokemon={pokemon} currentFavorite={currentFavorite} setCurrentFavorite={setCurrentFavorite} />} />
      </Route>
    </Routes>
  )
}

export default App
