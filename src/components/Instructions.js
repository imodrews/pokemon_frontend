import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';




const useStyles = makeStyles(theme => ({
    box: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin: theme.spacing(1),
        flexWrap: "wrap",
        alignText: "center"
    }
}) )

const Instructions = () =>{

        const classes = useStyles(); 



        return (
            <>
                <Box className={classes.box}>
                    <h2>Poke Rock Paper Scissors Challenge</h2>
                    <p>Drag and drop TWO poke fighters of choice into the Battlefield! Once you and your poke are ready to play Rock, Paper, Scissors just click on play and watch the pokemon fight each other!!</p>
                </Box>
            </>
        );
    }


export default Instructions;