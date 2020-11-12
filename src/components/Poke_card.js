import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign: `center`,
    marginBottom: `5%`,
    outlineColor: `black`
  },

  cardHeader: {
      fontWeight: `bold`,
      color: `black`,
  },
  media: {
    width: '70%',
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
    backgroundColor: `black`,
  

  
}));

const Poke_card = ({ poke }) => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
      
    <Card className={classes.root}>
      <CardHeader
        title={poke.name.english}
        subheader={poke.type}
        className={classes.cardHeader}
      />
        
      <CardMedia
        className={classes.media}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${poke.id}.png`}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Japanese: {poke.name.japanese} Chinese: {poke.name.chinese} French: {poke.name.french}
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions> 
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description</Typography>
          <Typography paragraph>
                    Attack: {poke.base.Attack} 
                    Defense: {poke.base.Defense} 
                    Speed: {poke.base.Speed}
                    
          </Typography>
          <Link to={`/pokemon/${poke.id}/`}>
            <Button>View Me!</Button>
        </Link>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Poke_card;








