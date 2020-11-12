import React from "react";
import MoodIcon from '@material-ui/icons/Mood';
import { StaticBanner } from 'material-ui-banner';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    banner:{
        backgroundColor: '#040405',
        color: 'white'
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://vignette.wikia.nocookie.net/serien/images/f/f9/Pokemon_Poster01.jpg/revision/latest?cb=20190214135305&path-prefix=de')`,
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
        fontStyle: "italic"
    }

})





const Jumbotron = () => {
 
    const classes = useStyles();
    
    StaticBanner.show({
        icon: <MoodIcon/>,
        label: 'Are you ready for the pokefight of your life? Be sure to check out all the Poke options we have for you down below. Choose your fighter wisely!',
      });

return(
    
<>
    <StaticBanner className={classes.banner} />
    <Box className={classes.hero}>
        <Box>
            You cannot expect to win every single battle, but love is worth fighting for and if you are brave and courageous and never quit you can come out a winner, just like me. -Ash Ketchum
        </Box>
    </Box>
</>
)}

export default Jumbotron;