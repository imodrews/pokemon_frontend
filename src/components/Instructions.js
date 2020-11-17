import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import './styles.css'
import { FormatBold } from "@material-ui/icons";



const useStyles = makeStyles(theme => ({
    box: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin: theme.spacing(1),
        flexWrap: "wrap",
        alignText: "center",
        flexDirection: "column"
    }, 
    text: {
        color: "red",
        display: "flex",
        justifyContent: "center"
    },
    instruction: {
        fontFamily: "helvetica",
        fontWeight: 500,
        marginTop: "1em",
        marginBottom: "1em"
    },
}) )

const Instructions = () =>{

        const classes = useStyles(); 



        return (
            <>
                <Box className={classes.box}>
                    <Typography className={classes.text} variant="h5" component="h5">
                    Poke Rock Paper Scissors Challenge
                    </Typography>
                    <Typography className={classes.instruction} variant="body1" component="body1">
                    <strong>Drag and drop</strong> TWO poke fighters of choice into the Battlefield!
                    Once you and your poke are ready to play Rock, Paper, Scissors just <strong>click on play</strong> and watch the pokemon fight each other!!
                    </Typography>
                </Box>
            </>
        );
    }


export default Instructions;