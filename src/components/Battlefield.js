import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { DropTarget } from 'react-drag-drop-container';
import './styles.css'
import Player from '../components/Player'

const useStyles = makeStyles({
    hero: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517547196086-e63b7ae6afb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "2rem",
        fontStyle: "italic",
        paddingBottom: "50px"
    },
    wrapper: {
        display: "flex",
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center"
    },
    pokemon: {
        minWidth: "300px"
    }

})



const weapons = ["rock", "paper", "scissors"];

const Battlefield = ({poke, pokemon, pokeMove})=> {
const classes = useStyles();
const [playerOne, setPlayerOne] = useState()
const [playerTwo, setPlayerTwo] = useState()
const [selectedPoke, setSelectedPoke] = useState([]);
const [winner, setWinner] = useState(null)

const dropped = (e) => {
    e.containerElem.style.visibility="hidden"
    // setSelectedPoke(pokemon)
  
    setSelectedPoke([ ...selectedPoke, e.dragData])
    e.preventDefault()
    console.log(selectedPoke)
}

    const startGame = () => {
        let counter = 0;
        let gameInterval = setInterval(() => {
            counter++;
        setPlayerOne(weapons[Math.floor(Math.random() * weapons.length)])
        setPlayerTwo(weapons[Math.floor(Math.random() * weapons.length)])
        setWinner("");
        if (counter > 5) {
            clearInterval(gameInterval);
            setWinner({winner: selectWinner()})
            }
          })
    }

    const reset = () =>{
        setSelectedPoke([])
    }
    
    const selectWinner = () => {    
        if (playerOne === playerTwo) {
          return "Oops it's a Tie!";
        } else if (
          (playerOne === "rock" && playerTwo === "scissors") ||
          (playerOne === "scissors" && playerTwo === "paper") ||
          (playerOne === "paper" && playerTwo === "rock")
        ) {
          return "Player One Wins!";
        } else {
          return "Player Two Wins!";
        }
      };
    
return(
<>  
<DropTarget targetKey="foo" dropData={poke} onHit={dropped}>

    <Box className={classes.hero}>
        THIS IS THE BATTLEFIELD
        <Box className={classes.wrapper}>
            <Box className={classes.playerOne}>
            <Player weapon={playerOne}/>
            Player One: {selectedPoke.length > 0 && selectedPoke[0].name.english}
            </Box>
            <Box className={classes.pokemon}>
            {selectedPoke.length > 0 && selectedPoke
        .map(p =>   <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${p.id}.png`} style={{width:150}} alt="pokemon"/>)}
            </Box>
            <Box className={classes.playerTwo}>
            <Player weapon={playerTwo} />
            Player Two: {selectedPoke.length > 1 && selectedPoke[1].name.english}
            </Box>
    </Box>
            <div className="winner"> {winner ? selectWinner() : null}</div>
           
            <button className="playButton" type="button" onClick={startGame}> Start! </button>              
            <button className="playButton" type="button" onClick={reset}> Reset your Poke Fighters </button> 
    </Box>
    </DropTarget>

</>
    )
}

export default Battlefield;