import React from "react";

// import components //

import Battlefield from "../components/Battlefield";
import Jumbotron from "../components/Jumbotron";
import Poke_cards from "../components/Poke_cards";




const HomePage = ({pokemon}) => {
    
const lessPokemon = pokemon.slice(1,16);    
    
    
    return(
    <>
        <Jumbotron />
        {pokemon &&  lessPokemon.map((poke)=> {
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