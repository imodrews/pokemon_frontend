import React from "react";

// import components //

import Battlefield from "../components/Battlefield";
import Jumbotron from "../components/Jumbotron";
import PokeButtons from "../components/PokeButtons";
import Instructions from "../components/Instructions";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Goldman',
        'cursive',
      ].join(','),
    }
  })

const HomePage = ({pokemon, pokeMove}) => {

    
    
    return(
    <>
        <Jumbotron />
        <ThemeProvider theme={theme}>
        <PokeButtons pokemon={pokemon} pokeMove={pokeMove}/>
        </ThemeProvider>
        <Instructions />
        <Battlefield pokemon={pokemon} pokeMove={pokeMove}/>
     </>
    );
};

export default HomePage;