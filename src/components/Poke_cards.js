import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Poke_card from "../components/Poke_card";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      alignContent: `space-around`,
      padding: `5%`,
      paddingBottom: `10%`,
      overflow: `hidden`,
      backgroundColor: 'white',
      
    }, 
  }));
  

const Poke_cards = ({ pokemon }) => {



const classes = useStyles();

    return(
        <div >
        <CssBaseline />
        <Grid className={classes.root}>
            {pokemon.length >= 1 &&
              pokemon.map((poke) => (
                    <Poke_card poke={poke} key={poke.id} />
                ))}
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Grid>
      </div>
    )}

export default Poke_cards;




