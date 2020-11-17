import React, { useState, useEffect } from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


// router //

import { Switch, Route } from "react-router-dom";

// import components //

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Poke_cards from "./components/Poke_cards";


// pages //

import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import PokeDetail from "./Pages/PokeDetail";

const App = () => {

// states //
const [pokemon, setPokemon] = useState([]);

// fetching data //

useEffect( () => {

  

  fetch("http://localhost:8080/pokemon?page=2&limit=30")

      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.log('no Pokemons want to fight today!'))
}, []);

const pokeMove = (poke) => {
  console.log(poke)
  const filteredPokemon = pokemon.filter(p => {
    return p.id !== poke.id 
  })
  setPokemon(filteredPokemon)
  console.log(pokemon)
}

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Goldman',
      'cursive',
    ].join(','),
  }
})

  return (
 <div className="App">
       <header>
       <ThemeProvider theme={theme}>
           <NavBar />
        </ThemeProvider>
        </header>
        <main> 
          <Switch>
               <Route
                    path="/pokemon/:id"
                    render={(props) => (
                       <PokeDetail pokemon={pokemon}{...props} /> 
                    )}
                  />

              <Route
                    path="/pokemon"
                    render={(props) => (
                      <Poke_cards pokemon={pokemon}{...props} />
                    )}
              />    
               <Route 
                  path="/about"
                  render={(props) => (
                        <About />
                  )} 
              />

           
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <HomePage pokemon={pokemon} pokeMove={pokeMove} {...props} />
                    )}
                    />
          </Switch>
        </main>
         <footer>
              <Footer />
          </footer>
      
    </div>
  );
};

export default App;
