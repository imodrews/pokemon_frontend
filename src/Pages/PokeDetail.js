import React, {useState} from "react";
import { useParams } from "react-router-dom";
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


const useStyles = makeStyles((theme) => ({
    root: {
      marginLeft: '35%',
      maxWidth: 400,
      margin: '5%',
      textAlign: 'center',
      
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
  }));


const PokeDetail = ({ pokemon }) => {
    const { id } = useParams();

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

return (
     <div>
          {pokemon.length && 
             pokemon
                 .filter((poke) => {
                     return poke.id === Number(id)
          })
        .map((poke) => (
            <div>
              <Card className={classes.root}>
                   <CardHeader
                    title={poke.name.english}
                    subheader={poke.type}
                />
                <CardMedia
                    className={classes.media}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${poke.id}.png`}
                    title={poke.name.english}
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
                    
                    </CardContent>
                </Collapse>
                </Card>
           </div>
          ))}
       </div>
    );
}; 

export default PokeDetail;