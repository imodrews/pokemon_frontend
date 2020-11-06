import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      }
    },
    box: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin: theme.spacing(1),
        flexWrap: "wrap"
        
    },
    button: {
        color: "#008393",
        backgroundColor: "#040405",
        flexWrap: "wrap",
        display: "flex",
    }
  }));




const PokeButtons = ( { pokemon }) => {
    const classes = useStyles();
    

   /* const handleClick = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke.id}`)
            .then((res) => res.json())
            .then((data) => setPokePics(data.results))
            .catch((error) => console.log('no Poke pics for you'))
      }  {pokePics && pokePics.map((poke) => { return ( <img src={poke.sprites.back_default} alt={poke.name} />     )})}*/


return (
<>
<Box m={5} display="flex" flexWrap="wrap" justifyContent="center">
    {pokemon && pokemon.map((poke)=> {
        return(
        
        <div key={poke.div} className={classes.box}>
            <Button variant="contained" className={classes.button} >
                {poke.name.english}
             </Button>
            
        </div>
        
        )
    })}
</Box>
</>
)}



export default PokeButtons;