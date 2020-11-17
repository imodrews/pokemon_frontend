import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { DropTarget } from 'react-drag-drop-container';
import './styles.css'
import Player from '../components/Player'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Goldman',
      'cursive',
    ].join(','),
  }
})
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
    },
    iconText: {
        color: "white",
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
<ThemeProvider theme={theme}>
    <Box className={classes.hero}>
      <Typography variant="h4" component="h4">
      THIS IS THE BATTLEFIELD
      </Typography>
        <Box className={classes.wrapper}>
          <Box className={classes.playerOne}>
            <Typography variant="h6" component="h6">
              <Player weapon={playerOne}/>
              Player One: {selectedPoke.length > 0 && selectedPoke[0].name.english}
            </Typography>
          </Box>
          <Box className={classes.pokemon}>
            {selectedPoke.length > 0 && selectedPoke
            .map(p =>   <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${p.id}.png`} style={{width:150}} alt="pokemon"/>)}
          </Box>
          <Box className={classes.playerTwo}>
            <Typography variant="h6" component="h6">
              <Player weapon={playerTwo} />
              Player Two: {selectedPoke.length > 1 && selectedPoke[1].name.english}
            </Typography>
          </Box>
        </Box>
          <div className="winner"> {winner ? selectWinner() : null}</div>  
          <Button variant="contained" color="secondary" onClick={startGame}> Play! </Button>              
          <br/>
          <Button variant="contained" color="primary" onClick={reset}> Reset Game</Button> 
          <br/>
          <Typography className={classes.iconText} variant="body2" component="body2">
          Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
          </Typography>
    </Box>
</ThemeProvider>
</DropTarget>

</>
    )
}

export default Battlefield;