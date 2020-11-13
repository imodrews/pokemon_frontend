import React from "react";

// import components //

import Battlefield from "../components/Battlefield";
import Jumbotron from "../components/Jumbotron";
import PokeButtons from "../components/PokeButtons";
import Instructions from "../components/Instructions";




const HomePage = ({pokemon, pokeMove}) => {

    
    
    return(
    <>
        <Jumbotron />
        <PokeButtons pokemon={pokemon} pokeMove={pokeMove}/>
        <Instructions />
        <Battlefield pokemon={pokemon} pokeMove={pokeMove}/>
     </>
    );
};

export default HomePage;