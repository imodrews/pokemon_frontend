import React from "react";

// import components //

import Battlefield from "../components/Battlefield";
import Jumbotron from "../components/Jumbotron";
import Poke_cards from "../components/Poke_cards";




const HomePage = ({pokemon}) => {
    
    
    
    
    return(
    <>
        <Jumbotron />
        {pokemon &&  pokemon.map((poke)=> {
            return (
            <div key={poke.id}>
                <p>{poke.name.english}</p>
            </div>
            );
        })}
     </>
    );
};

export default HomePage;