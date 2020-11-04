import React from "react";

// import components //

import Battlefield from "../components/Battlefield";
import Jumbotron from "../components/Jumbotron";
import Poke_cards from "../components/Poke_cards";

const HomePage = ({pokemon}) => {
    return(
    <>
        <div>
            <h1>HomePage yo</h1>
        <p>{pokemon.name}</p>
    
        </div>
     </>
    )
}

export default HomePage;