import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';




const useStyles = makeStyles(theme => ({
    box: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin: theme.spacing(1),
        flexWrap: "wrap"
    }
}) )

const Instructions = () =>{

        const classes = useStyles(); 



        return (
            <>
                <Box className={classes.box}>
                    <h2>Poke Rock Paper Scissors Challenge</h2>
                    <p>Drag and drop your poke fighter of choice into the Battlefield! Once you and your poke are ready to fight just click on your choice of rock, paper or scissors, and compete against the other pokemon!</p>
                </Box>
            </>
        );
    }


export default Instructions;