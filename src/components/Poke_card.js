import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
  const [image, setImage] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res => res.json())
    .then(data => console.log(data.sprites))
    .catch(err => console.log(err))
  }, [])


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
/*  {pokePics && pokePics.map((poke) => { return ( <img src={poke.sprites.back_default} alt={poke.name} />     )})}*/

  return (
      
    <Card className={classes.root}>
      <CardHeader
        title={poke.name.english}
        subheader={poke.type}
        className={classes.cardHeader}
      />
        {image && image.map((i, index) => (
      <CardMedia
        key={index}
        className={classes.media}
        image={i.back_default} 
      />
      ))}
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








