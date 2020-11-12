import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import PaperPic from "../images/paper.png";
import RockPic from "../images/rock.png";
import ScissorsPic from "../images/scissors.png";
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Results from './Results';


const useStyles = makeStyles(theme => ({
box: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    margin: theme.spacing(1),
    flexWrap: "wrap"

    
}
}))

// random picture back
const randoEmo = () =>{
    const emojis = [ScissorsPic, RockPic, PaperPic];
    const random = Math.floor(Math.random()*3);
    return emojis[random];
};






const Rock = () =>{
const classes= useStyles();
const [playMode, setPlayMode] = useState(false);
const [counter, setCounter] = useState(1);

useEffect(() => {
    //check for greater than stop the loop
    if (counter > 3) return;

    const timer = setTimeout(() => {
      setCounter(previous => previous + 1);
    }, 500);

    return () => clearTimeout(timer);
  }, [counter]);






return(
    <>
    <Box className={classes.box}>
    <div>
      {/*   <img src={PaperPic} style={{width: 150}} />
        <img src={RockPic} style={{width: 150}} />
        <img src={ScissorsPic} style={{width: 150}} /> */}
    </div>
    <div>
       {/*  <Button color="primary" style={{backgroundColor: "black"}}
        onClick={()=>setPlayMode(true)}>play</Button> */}
      {/*   <Button color="primary">paper</Button>
        <Button color="primary">scissors</Button> */}
    </div>
        {counter > 3 && (
         <>
            <img src={randoEmo()} style={{width: 150}}/>
            <img src={randoEmo()} style={{width: 150}}/>
            <Button onClick={() =>{setCounter(1)}}>Play Again</Button>
            
         </>
        )}
    </Box>
    </>
)
}

export default Rock;