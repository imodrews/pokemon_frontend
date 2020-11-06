import React from "react";

// import components //

import Battlefield from "../components/Battlefield";
import Jumbotron from "../components/Jumbotron";
import Poke_cards from "../components/Poke_cards";
import PokeButtons from "../components/PokeButtons";



const HomePage = ({pokemon}) => {

    
    
    return(
    <>
        <Jumbotron />

        <PokeButtons pokemon={pokemon}/>
        <Battlefield />

     </>
    );
};

export default HomePage;