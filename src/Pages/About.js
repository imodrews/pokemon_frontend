import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/*import the material UI components*/
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box, BottomNavigation, BottomNavigationAction } from '@material-ui/core';

/*import the icons*/
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

/*import image */ 
import Pikachu from "../images/pikachu.jpg"
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Goldman',
      'cursive',
    ].join(','),
  }
})

const useStyles = makeStyles({
  text: { 
    marginTop: "3em",
    marginBottom: "1em",
    color: "#008393",
  },
  gridEdit: {
    display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `center`,
      alignContent: `space-around`,
      padding: `5%`,
      paddingBottom: `10%`,
      overflow: `hidden`,
      //backgroundColor: 'white',
  },
  root: {
    maxWidth: 345,
    marginLeft: '2em',
    marginTop: '3em',
    marginBottom: '3em',
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    } 
  },
  media: {
    height: 140,
  },
  box1: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column"
    
},
  box2: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",  
},
});


export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
    <ThemeProvider theme={theme}>
    <Typography className={classes.text} align="center" variant="h3" component="h3">
            The Team
    </Typography>
    <Typography align="center" variant="h4" component="h4">
            That created this awesome stuff
    </Typography>
    </ThemeProvider>
    <CssBaseline />
    <Grid className={classes.gridEdit}>
    <Box className={classes.box2} m={5} display="flex" justifyContent="center">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Pikachu}
          title="Ellesia"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PikaLesia
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Junior Web Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <BottomNavigation className={classes.root} >   
        <BottomNavigationAction label="@group4WBS" value="facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction label="@group4WBS" value="twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction label="@group4WBS" value="github" icon={<GitHubIcon />} />
      </BottomNavigation>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Pikachu}
          title="Imogen"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PikaImo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Junior Web Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <BottomNavigation className={classes.root} >   
        <BottomNavigationAction label="@group4WBS" value="facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction label="@group4WBS" value="twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction label="@group4WBS" value="github" icon={<GitHubIcon />} />
      </BottomNavigation>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Pikachu}
          title="rosmalina"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          PikaLina
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Junior Web Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <BottomNavigation className={classes.root} >   
        <BottomNavigationAction label="@group4WBS" value="facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction label="@group4WBS" value="twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction label="@group4WBS" value="github" icon={<GitHubIcon />} />
      </BottomNavigation>
    </Card>
    </Box>
    </Grid>
    </>
  );
};