import React, { useState } from "react";
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

//import components
import Player from "./Player";
import GameButtons from "./GameButtons";





const useStyles = makeStyles({
    hero: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517547196086-e63b7ae6afb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "2rem",
        fontStyle: "italic",
        paddingBottom: "50px"
    }

})



const onDragOver = (e) => {
    e.preventDefault()
}



const Battlefield = ({poke, pokemon, pokeMove})=> {
const [selectedPoke, setSelectedPoke] = useState([]);
const classes = useStyles();




const dropped = (e) => {
    e.containerElem.style.visibility="hidden"
    // setSelectedPoke(pokemon)
  
    setSelectedPoke([ ...selectedPoke, e.dragData])
    e.preventDefault()
    console.log(selectedPoke)
}

return(
<>
<DropTarget targetKey="foo" dropData={poke} onHit={dropped}>
    <Box className={classes.hero}>
        BATTLEFIELD
        <Box onDragOver={(e) => onDragOver(e)}>
            
           {selectedPoke.length > 0 && selectedPoke
           .map(p =>   <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${p.id}.png`} style={{width:150}}/>)}
        </Box>
        {/* <GameButtons /> */}
    </Box>
 </DropTarget>
</>
    )
}

export default Battlefield;