import React from "react";

// import components //

import Battlefield from "../components/Battlefield";
import Jumbotron from "../components/Jumbotron";
import Poke_cards from "../components/Poke_cards";
import PokeButtons from "../components/PokeButtons";
import PokeImage from "../components/PokeImage";
import Instructions from "../components/Instructions";
import Rock from "../components/Rock";

const HomePage = ({pokemon, pokeMove}) => {

    
    
    return(
    <>
        <Jumbotron />
        <PokeButtons pokemon={pokemon} pokeMove={pokeMove}/>
        <Instructions />
        <Battlefield pokemon={pokemon} pokeMove={pokeMove}/>
        <Rock />
     </>
    );
};

export default HomePage;