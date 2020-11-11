import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    button:{
        backgroundColor:"white",
        padding: "2px"
    }
})


const GameButtons = () =>{
    const classes = useStyles();


    return(
        <>
            <Button color="primary" className={classes.button}>PLAY!</Button>

        </>
    )
}

export default GameButtons;